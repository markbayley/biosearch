import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Col,
  Row,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import sortBy from "lodash/sortBy";
import get from "lodash/get";
import last from "lodash/last";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ImageModal.scss";
import ternlogo from "tern-react/dist/images/tern-logo.png";

import { showModalAction, showImagePreviewAction } from "../../store/reducer";

const ImageModal = () => {
  const dispatch = useDispatch();

  const { show, imageIdx } = useSelector((state) => state.ui.imageModal);
  const data = useSelector((state) => state.search.hits);
  const numImages = data.length;
  const imageDoc = get(data[imageIdx], "_source");

  const toggle = () => dispatch(showModalAction(!show));

  const nextIdx = imageIdx === numImages - 1 ? 0 : imageIdx + 1;
  const prevIdx = imageIdx === 0 ? numImages - 1 : imageIdx - 1;

  if (!show || !imageDoc) {
    return null;
  }

  const img_url_large = get(last(sortBy(imageDoc.preview_urls, "size")), "url");

  return (
    <Modal size="lg" className="image-preview-modal" isOpen={show} toggle={toggle} unmountOnClose>
      <ModalHeader className="modal-header" toggle={toggle} tag={Row}>
        <Col className="modal-column">
          <img
            src={ternlogo}
            style={{ width: "300px" }}
            alt="tern logo modal"
          />
        </Col>
        <Col className="modal-info">
          <h6>
            {imageDoc.site_id.label}
            <br />
            {imageDoc.image_type.label}
            <br />
            Plot:
            {" "}
            {imageDoc.plot.label}
            <br />
            Site Visit ID:
            {" "}
            {imageDoc.site_visit_id}
            <br />
            {imageIdx + 1}
            /
            {numImages}
          </h6>
        </Col>
      </ModalHeader>
      {/* <hr className="modal-line" /> */}
      <ModalBody>
        <div className="modal-image-container">
          <img className="img-fluid" src={img_url_large} alt="carousel" />
          <Button
            size="lg"
            className="chevron-right"
            color="flat"
            onClick={() => dispatch(showImagePreviewAction(nextIdx))}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </Button>
          <Button
            size="lg"
            className="chevron-left"
            color="flat"
            onClick={() => dispatch(showImagePreviewAction(prevIdx))}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </Button>
        </div>

        <br />
        <br />
        <FormGroup check className="center modal-select">
          <Label check>
            <Input type="checkbox" />
            Add to selected images?
          </Label>
        </FormGroup>
      </ModalBody>
      <br />
      <ModalFooter>
        <Button
          size="sm"
          color="modal"
          onClick={() => dispatch(showImagePreviewAction(prevIdx))}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
          {" "}
          Prev
        </Button>
        <Button
          size="sm"
          color="modal"
          onClick={() => dispatch(showImagePreviewAction(nextIdx))}
        >
          Next
          {" "}
          <FontAwesomeIcon icon={faChevronRight} />
        </Button>

        {/* <Button color="login" onClick={toggle}>
          Close
        </Button>
        <Button color="login" onClick={toggle}>
          Download
        </Button> */}
      </ModalFooter>
    </Modal>
  );
};

export default ImageModal;

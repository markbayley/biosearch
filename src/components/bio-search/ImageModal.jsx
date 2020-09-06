import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Col,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  // Carousel,
  // CarouselControl,
  // CarouselIndicators,
  // CarouselItem,
} from "reactstrap";
import sortBy from "lodash/sortBy";
import get from "lodash/get";
import last from "lodash/last";
import { showModalAction, showImagePreviewAction } from "../../store/reducer";

const ImageModal = () => {
  const dispatch = useDispatch();

  const { show, imageIdx } = useSelector((state) => state.ui.imageModal);
  const data = useSelector((state) => state.search.hits);
  const numImages = data.length;
  const imageDoc = data[imageIdx]["_source"];

  const toggle = () => dispatch(showModalAction(!show));

  const nextIdx = imageIdx === numImages - 1 ? 0 : imageIdx + 1;
  const prevIdx = imageIdx === 0 ? numImages - 1 : imageIdx - 1;

  if (!show || !imageDoc) {
    return null;
  }

  const img_url_large = get(last(sortBy(imageDoc.preview_urls, "size")), "url");

  return (
    <Modal size="lg" isOpen={show} toggle={toggle} unmountOnClose>
      <ModalHeader className="modal-header" toggle={toggle}>
        {" "}
        <Col sm={2} className="modal-column">
          <img src="/img/logo@3x.png" style={{ width: "300px" }} alt="" />
        </Col>
        <Col className="modal-info" sm={5}>
          <h6>
            {imageDoc.site_id.label}
            <br />
            {imageDoc.image_type.label}
            <br />
            Plot:
            {imageDoc.plot.label}
            <br />
            Site Visit ID:
            {imageDoc.site_visit_id}
            <br />
            {imageIdx + 1}
            /
            {numImages}
          </h6>
        </Col>
      </ModalHeader>
      <hr className="modal-line" />
      <ModalBody>

        {/* To be finished ...<Carousel>
          <CarouselIndicators />
          <CarouselItem>
            <img
              className="img-fluid"
              src={imageDoc.preview_urls[0].url}
              alt="carousel"
            />
          </CarouselItem>
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClick={() => dispatch(showImagePreviewAction(prevIdx))}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClick={() => dispatch(showImagePreviewAction(nextIdx))}
          />
        </Carousel> */}

        <img
          className="img-fluid"
          src={img_url_large}
          alt="carousel"
        />
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
          color="login"
          onClick={() => dispatch(showImagePreviewAction(prevIdx))}
        >
          Prev
        </Button>
        <Button
          size="sm"
          color="login"
          onClick={() => dispatch(showImagePreviewAction(nextIdx))}
        >
          Next
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

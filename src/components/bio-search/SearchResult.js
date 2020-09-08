import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Card, Button, Col } from "reactstrap";
import get from "lodash/get";
import sortBy from "lodash/sortBy";
import first from "lodash/first";
import { showImagePreviewAction } from "../../store/reducer";

import { ReactComponent as BioimagesIcon } from "../../assets/icons/BioimagesIcon.svg";

import "./SearchResult.scss";

const SearchResult = ({ imageIdx }) => {
  const dispatch = useDispatch();
  const bioImageDocument = useSelector(
    (state) => state.search.hits[imageIdx]["_source"],
  );

  // get smallest preview url ... returns undefined if there are no preview urls.
  const img_url_small = get(first(sortBy(bioImageDocument.preview_urls, "size")), "url");

  const site_id = bioImageDocument["site_id"].value;

  const showImagePreview = (idx) => dispatch(showImagePreviewAction(idx));

  return (
    <Col
      xl="2"
      lg="3"
      md="4"
      sm="12"
      xs="12"
    >
      <Card id={site_id} className="image-card">
        <div className="hvrbox">
          <Button
            color="flat"
            className="image-card-button"
            onClick={() => showImagePreview(imageIdx)}
            style={{
              width: "100%",
              height: "0",
              paddingTop: "70%",
              backgroundImage: `url(${img_url_small})`,
              backgroundSize: "cover",
            }}
          >
            <img
              className="preview img-fluid"
              src={img_url_small}
              alt="small preview"
              onKeyPress={() => { }}
              role="none"
            />
            <div className="hvrbox-layer_top">
              <div className="hvrbox-text">
                View Image?
                <br />
                <BioimagesIcon id="bio-icon" />
                {" "}
                <br />
                <span className="center" />
              </div>
            </div>
            {" "}
          </Button>
          <div className="thumbnail-text">
            {bioImageDocument.site_id.label}
            <br />
            {bioImageDocument.image_type.value[0].toUpperCase()
              + bioImageDocument.image_type.value.substr(1)}
          </div>
        </div>
      </Card>
    </Col>
  );
};

SearchResult.propTypes = {
  imageIdx: PropTypes.number.isRequired,
};

export default SearchResult;

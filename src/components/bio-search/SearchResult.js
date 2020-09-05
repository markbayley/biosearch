import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Card, Button, Col } from "reactstrap";
import { showImagePreviewAction } from "../../store/reducer";

import "./SearchResult.scss";

const SearchResult = ({ imageIdx }) => {
  const dispatch = useDispatch();
  const bioImageDocument = useSelector(
    (state) => state.search.hits[imageIdx]["_source"],
  );

  let img_url_large = null;
  let img_url_small = null;
  // Nb: some docs dont have preview_urls (empty array)
  // This causes the application to explored!
  if (bioImageDocument.preview_urls.length !== 0) {
    img_url_large = bioImageDocument.preview_urls[0].url;
    img_url_small = bioImageDocument.preview_urls[1].url;
  }
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
              className="small_preview img-fluid"
              src={img_url_small}
              alt="small preview"
              onKeyPress={() => { }}
              role="none"
            />
            <img
              className="large_preview img-fluid"
              src={img_url_large}
              alt="large preview"
              onKeyPress={() => { }}
              role="none"
            />
            <div className="hvrbox-layer_top">
              <div className="hvrbox-text">
                View Image?
                <br />
                <img
                  src="/img/icons/Bioimages icon.svg"
                  alt="bioimages icon"
                  width="80px"
                />
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
            {" "}
            {/* <img
              src="/img/phenocam.svg"
              width="20px"
              alt="phenocam"
              style={{
                border: ".5px solid orange",
                borderRadius: "20px",
                padding: "2px",
                marginBottom: "5px",
              }}
            /> */}
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

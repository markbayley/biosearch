import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
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

  const showImagePreview = (idx) => dispatch(showImagePreviewAction(idx));

  return (
    <div className="image-item">
      <div className="hvrbox">
        <div className="hvrbox-img-box">
          <img
            className="hvrbox-preview img-fluid"
            src={img_url_small}
            alt="small preview"
            onKeyPress={() => { }}
            role="none"
          />
          <div className="hvrbox-thumbnail-text">
            {bioImageDocument.site_id.label}
            <br />
            {bioImageDocument.image_type.value[0].toUpperCase()
              + bioImageDocument.image_type.value.substr(1)}
          </div>
        </div>
        <div
          className="hvrbox-layer_top"
          onClick={() => showImagePreview(imageIdx)}
          role="button"
          onKeyPress={() => showImagePreview(imageIdx)}
          tabIndex="0"
        >
          <div className="hvrbox-text">
            View Image?
            <br />
            <BioimagesIcon />
            {" "}
            <br />
            <span className="center" />
          </div>
        </div>
      </div>
    </div>
  );
};

SearchResult.propTypes = {
  imageIdx: PropTypes.number.isRequired,
};

export default SearchResult;

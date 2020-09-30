import React from "react";
import PropTypes from "prop-types";

const BioTotalImages = ({ totalDocuments }) => (
  <div
    style={{ paddingTop: "3px" }}
  >
    Images:
    {totalDocuments}
  </div>
);

BioTotalImages.propTypes = {
  totalDocuments: PropTypes.number.isRequired,
};

export default BioTotalImages;

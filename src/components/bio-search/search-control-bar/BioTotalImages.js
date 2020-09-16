import React from "react";
import { useSelector } from "react-redux";

const BioTotalImages = () => {
  const totalDocuments = useSelector((state) => state.search.totalDocuments) || 0;
  return (
    <div
      className="search-control-bar-item"
      style={{ paddingTop: "3px" }}
    >
      Images:
      {totalDocuments}
    </div>
  );
};
export default BioTotalImages;

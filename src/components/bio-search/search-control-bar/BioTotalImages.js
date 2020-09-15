import React from "react";
import { useSelector } from "react-redux";
// TODO: Create separate css file for BioTotalImages
import "./BioResultPagination.scss";

const BioTotalImages = () => {
  const totalDocuments = useSelector((state) => state.search.totalDocuments) || 0;
  return (
    <div className="page-items">
      Images:
      {totalDocuments}
    </div>
  );
};
export default BioTotalImages;

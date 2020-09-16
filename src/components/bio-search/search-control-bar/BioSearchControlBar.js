import React from "react";
import BioTotalImages from "./BioTotalImages";
import BioPageSize from "./BioPageSize";
import BioSortOrder from "./BioSortOrder";
import BioPagination from "./BioPagination";
import "./BioSearchControlBar.scss";

const BioSearchControlBar = () => (
  <div
    className="search-control-bar"
  >
    <BioTotalImages />
    <BioPageSize />
    <BioSortOrder />
    <BioPagination />
  </div>
);
export default BioSearchControlBar;

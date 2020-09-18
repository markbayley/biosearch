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
    <div className="search-control-bar-item">
      <BioTotalImages />
    </div>
    <div className="search-control-bar-item">
      <BioPageSize />
    </div>
    <div className="search-control-bar-item">
      <BioSortOrder />
    </div>
    <div className="search-control-bar-item">
      <BioPagination />
    </div>
  </div>
);
export default BioSearchControlBar;

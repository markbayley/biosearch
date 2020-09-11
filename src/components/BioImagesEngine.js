import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import Favourite from "./bio-favourites/Favourite";
import BioFacetsEngine from "./bio-image-facets/BioFacetsEngine";
import BioMapEngine from "./bio-image-map/BioMapEngine";
import SearchEngine from "./bio-search/SearchEngine";
import FilterHeader from "./headers/FilterHeader";
import { fetchFacetsSearchAction } from "../store/reducer";

import "./BioImagesEngine.scss";

const BioImagesEngine = () => {
  const dispatch = useDispatch();
  const searchMode = useSelector((state) => state.ui.searchResults.searchMode);

  // trigger initial search to populate facets results
  useEffect(() => {
    dispatch(fetchFacetsSearchAction());
  }, [dispatch]);

  return (
    <div className="main-content d-flex">
      {/* Filter SideBar */}
      <Col xs={12} md={3} className="filter-bar">
        <FilterHeader />
        <BioFacetsEngine />
        <Favourite />
      </Col>
      {/* TODO: the scroll-images class should probably be moved as separate
          div into SearchEngine, just simple Col here */}
      <Col md={9} className="scroll-images">
        {/* Leaflet Map or Photo Gallery */}
        {
          searchMode === "Map"
            ? (
              <BioMapEngine />
            ) : (
              <SearchEngine />
            )
        }
      </Col>
    </div>
  );
};

export default BioImagesEngine;

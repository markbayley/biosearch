import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import SearchBar from "./searchbar/SearchBar";
import Favourite from "./bio-favourites/Favourite";
import ImageSearchEngine from "./bio-image-search/ImageSearchEngine";
import BioMapEngine from "./bio-image-map/BioMapEngine";
import SearchEngine from "./bio-search/SearchEngine";
import FilterHeader from "./bio-image-search/FilterHeader";
import { fetchSearchAction, fetchFacetsAction } from "../store/reducer";

const BioImagesEngine = () => {
  const dispatch = useDispatch();
  const searchMode = useSelector((state) => state.ui.searchResults.searchMode);

  // trigger initial search to populate facets results
  useEffect(() => {
    dispatch(fetchSearchAction());
    dispatch(fetchFacetsAction());
  }, [dispatch]);

  return (
    <>
      <SearchBar />
      <Row>
        {/* Filter SideBar */}
        <Col xs={12} md={3} className="filter-bar">
          <FilterHeader />
          <ImageSearchEngine />
          <Favourite />
        </Col>
        {/* <Toggle /> */}
        <Col className="scroll-images">
          {/* Leaflet Map or Photo Gallery */}
          {searchMode === "Map"
            ? (
              <BioMapEngine />
            ) : (
              <SearchEngine />
            )}
        </Col>
      </Row>
    </>
  );
};

export default BioImagesEngine;

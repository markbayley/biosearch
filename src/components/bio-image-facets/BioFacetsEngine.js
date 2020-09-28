import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { push } from "redux-first-history";
import { Row, Button } from "reactstrap";
import { faUndoAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDateRangeFacet from "./ReactDateRangeFacet";
import SelectFacet from "./SelectFacet";
import ImageTypeSelectFacet from "./ImageTypeSelectFacet";
import TextFacet from "./TextFacet";
import MapImageToggle from "../buttons/MapImageToggle";

import "./BioFacetsEngine.scss";

const BioFacetsEngine = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.ui.query);
  const query_string = useSelector((state) => state.router.location.search);

  // TODO: make this a utility method?
  //       could even re-create the whole query string from scratch and remove
  //       dependency on state.router.location.search
  //       need to take care of non facet params then ... (i.e. paging stuff)
  const onFacetChange = (name, value) => {
    const new_query = new URLSearchParams(query_string);
    if (name === "date_range") {
      const { start, end } = value;
      if (start) {
        new_query.set("date_from", start);
      } else {
        new_query.delete("date_from");
      }
      if (end) {
        new_query.set("date_to", end);
      } else {
        new_query.delete("date_to");
      }
    } else {
      // 1. delete old value
      new_query.delete(name);
      // 2. set new value
      if (value) {
        if (Array.isArray(value)) {
          value.forEach((val) => new_query.append(name, val));
        } else {
          new_query.set(name, value);
        }
      }
    }
    // 3. push history action
    dispatch(push({ search: `?${new_query.toString()}` }));
  };

  const handleResetAllFilters = () => {
    const new_query = new URLSearchParams(query_string);
    new_query.delete("search_string");
    new_query.delete("site_id");
    new_query.delete("plot");
    new_query.delete("site_visit_id");
    new_query.delete("image_type");
    new_query.delete("date_from");
    new_query.delete("date_to");
    // TODO: reset pagination as well?
    dispatch(push({ search: `?${new_query.toString()}` }));
  };

  return (
    <div className="bio-facets">
      <TextFacet name="search_string" value={query.search_string} onChange={onFacetChange} placeholder="Enter search text" />
      <Row>
        <MapImageToggle />
      </Row>
      <SelectFacet name="site_id" value={query.site_id} showZeros={false} placeholder="Select Sites" onChange={onFacetChange} />
      <SelectFacet name="plot" value={query.plot} showZeros={false} placeholder="Select Plots" onChange={onFacetChange} />
      <SelectFacet
        name="site_visit_id"
        value={query.site_visit_id}
        showZeros={false}
        placeholder="Select Site Visit Ids"
        onChange={onFacetChange}
      />
      <ImageTypeSelectFacet
        name="image_type"
        value={query.image_type}
        showZeros={false}
        placeholder="Select Image Types"
        onChange={onFacetChange}
      />
      <ReactDateRangeFacet start={query.date_from} end={query.date_to} onChange={onFacetChange} />
      <Row>
        <Button
          // size="sm"
          color="reset"
          onClick={handleResetAllFilters}
        >
          <FontAwesomeIcon icon={faUndoAlt} />
          {" "}
          Clear Filters
        </Button>
      </Row>
    </div>
  );
};

export default BioFacetsEngine;

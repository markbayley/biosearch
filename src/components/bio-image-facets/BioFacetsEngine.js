import React from "react";
import ReactDateRangeFacet from "./ReactDateRangeFacet";
import SelectFacet from "./SelectFacet";
import ImageTypeSelectFacet from "./ImageTypeSelectFacet";
import TextFacet from "./TextFacet";
import MapImageToggle from "../buttons/MapImageToggle";

import "./BioFacetsEngine.scss";

const BioFacetsEngine = () => (
  <div className="bio-facets">
    <TextFacet facet="search_string" placeholder="Enter search text" />
    <MapImageToggle />
    <SelectFacet facet="site_id" showZeros={false} placeholder="Select Sites" />
    <SelectFacet facet="plot" showZeros={false} placeholder="Select Plots" />
    <SelectFacet
      facet="site_visit_id"
      showZeros={false}
      placeholder="Select Site Visit Ids"
    />
    <ImageTypeSelectFacet
      facet="image_type"
      showZeros={false}
      placeholder="Select Image Types"
    />
    <ReactDateRangeFacet />
  </div>
);

export default BioFacetsEngine;

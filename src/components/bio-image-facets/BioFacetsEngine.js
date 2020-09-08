import React from "react";
import ReactDateRangeFacet from "./ReactDateRangeFacet";
import SelectFacet from "./SelectFacet";
import ImageTypeSelectFacet from "./ImageTypeSelectFacet";
import TextFacet from "./TextFacet";

const BioFacetsEngine = () => (
  <div className="bio-facets">
    <TextFacet facet="search_string" placeholder="Enter search text" />
    <SelectFacet facet="site_id" placeholder="Select Sites" />
    <SelectFacet facet="plot" showZeros={false} placeholder="Select Plots" />
    <SelectFacet facet="site_visit_id" placeholder="Select Site Visit Ids" />
    <ImageTypeSelectFacet facet="image_type" placeholder="Select Image Types" />
    <ReactDateRangeFacet />
  </div>
);

export default BioFacetsEngine;

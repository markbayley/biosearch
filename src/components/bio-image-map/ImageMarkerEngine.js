import React from "react";
import { useSelector } from "react-redux";
import ImageMarker from "./ImageMarker";

const ImageMarkerEngine = () => {
  // all sites from facet
  const sites = useSelector((state) => state.search.facets.site_id.buckets);
  // current select sites UI
  const selectedSites = useSelector((state) => state.ui.searchFilters.site_id);

  // site.doc_count, site.key
  // TODO: may fail if vocab is null
  const site_vocab = useSelector((state) => state.search.vocabs.site_id);

  // set of currently selected site ids
  const selectedSiteIds = new Set(selectedSites.map((site) => site.value));

  const getSiteCoordinates = (site) => {
    const sitePosition = site_vocab[site.key].centre_point.coordinates;
    const locType = site_vocab[site.key].centre_point.type;

    const siteCordinates = [];
    if (locType === "polygon") {
      // Take lat/lon from the first coords
      // TODO Have asked Wilma to look at this if we should be expecting
      // that some sites have polygons instead of lat/lon
      siteCordinates.push(sitePosition[0][0][1]);
      siteCordinates.push(sitePosition[0][0][0]);
    } else {
      siteCordinates.push(sitePosition[1]);
      siteCordinates.push(sitePosition[0]);
    }
    return siteCordinates;
  };

  return (
    sites.map((site) => (
      <ImageMarker
        key={site.key}
        sitePosition={getSiteCoordinates(site)}
        name={site_vocab[site.key].label}
        count={site.doc_count}
        selected={selectedSiteIds.has(site.key)}
      />
    ))
  );
};

export default ImageMarkerEngine;

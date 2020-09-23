import React, { useState } from "react";
import {
  Map,
  TileLayer,
} from "react-leaflet";
import Leaflet from "leaflet";
import { useSelector } from "react-redux";
import ImageMarkerEngine from "./ImageMarkerEngine";
import AppError from "../bio-search/AppError";

import "./BioMapEngine.scss";

const BioMapEngine = () => {
  const [mapInitState] = useState({
    lat: -26.47,
    lng: 134.02,
    zoomSnap: 0.5,
        maxZoom: 30,
    minZoom: 4.5,
    zoom: 4.5,
  });
  const mapInitPosition = [mapInitState.lat, mapInitState.lng];

  const error = useSelector((state) => state.search.error);

  // Set map boundary (australia)
  const corner1 = Leaflet.latLng(-9.820066, 115.240312);
  const corner2 = Leaflet.latLng(-44.482812, 152.339923);
  const bounds = Leaflet.latLngBounds(corner1, corner2);

  const BioMap = () => (
    <div className="map-frame">
      <div id="map-id">
        <Map
          className="markercluster-map"
          center={mapInitPosition}
          zoom={mapInitState.zoom}
          style={{ zIndex: "1" }}
          scrollWheelZoom={false}
          minZoom={mapInitState.zoom}
          maxBounds={bounds}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* <FeatureGroup>
            <EditControl
              position="bottomright"
            // onEdited={this._onEditPath}
            // onCreated={this._onCreate}
            // onDeleted={this._onDeleted}
            />
            <Circle center={[51.51, -0.06]} radius={200} />
          </FeatureGroup> */}

          {/* API Markers */}
          {/* TODO: decide what we want:
                    if map is a facet selector we want to show all sites and
                       use styles to show selected and 0 result sites. (current impl.)
                    if map shows result sites, we need to change the API to
                       return a site aggregation with sub aggregations about additional data.
          */}
          <ImageMarkerEngine />

        </Map>
      </div>
    </div>
  );

  // return <>{totalImages === 0 ? <NoResults /> : <BioMap />}</>;
  if (error) {
    return (
      <AppError />
    );
  }
  return <BioMap />;
};

export default BioMapEngine;

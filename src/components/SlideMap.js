import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import "./SlideMap.scss";
import BioMapEngine from "./bio-image-map/BioMapEngine";

const SlideMap = () => {
  const [isOpen, setIsOpen] = useState(false);

  const style = {
    overflow: "hidden",
    width: isOpen ? 2400 : 0,
    transition: "0.5s",
  };

  return (
    <>
      <button onClick={() => setIsOpen((prev) => !prev)}>Slide Toggle</button>
      <div className="pane">
        <div style={style}>
          <BioMapEngine />
          <img src="/img/sample-map.png" alt="map" width="1400px" />
        </div>
      </div>
    </>
  );
};

export default SlideMap;

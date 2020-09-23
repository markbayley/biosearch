import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { faGlobeAsia, faImages } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { setSearchModeAction } from "../../store/reducer";

/* Map Image Toggle */
function MapImageToggle() {
  const dispatch = useDispatch();

  const searchMode = useSelector((state) => state.ui.searchResults.searchMode);

  return searchMode === "Images"
    ? (
      <Button
        // size="sm"
        color="toggle"
        onClick={() => dispatch(setSearchModeAction("Map"))}
      >
        <FontAwesomeIcon icon={faGlobeAsia} />
        {" "}
        Map
      </Button>
    ) : (
      <Button
        // size="sm"
        color="toggle"
        onClick={() => dispatch(setSearchModeAction("Images"))}
      >
        <FontAwesomeIcon icon={faImages} />
        {" "}
        Images
      </Button>
    );
}

export default MapImageToggle;

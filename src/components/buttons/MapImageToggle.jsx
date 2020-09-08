import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { setSearchModeAction } from "../../store/reducer";
import { faGlobeAsia } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* Map Image Toggle */
function MapImageToggle() {
  const dispatch = useDispatch();

  const searchMode = useSelector((state) => state.ui.searchResults.searchMode);

  return searchMode === "Images" ? (
    <Button
      size="sm"
      color="login"
      onClick={() => dispatch(setSearchModeAction("Map"))}
    >
      <FontAwesomeIcon icon={faGlobeAsia} />
      {" "}
      Map
    </Button>
  ) : (
    <Button
      size="sm"
      color="login"
      onClick={() => dispatch(setSearchModeAction("Images"))}
    >
      Images
    </Button>
  );
}

export default MapImageToggle;

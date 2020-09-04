import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { setSearchModeAction } from "../../store/reducer";

/* Map Image Toggle */
function MapImageToggle() {
  const dispatch = useDispatch();

  const searchMode = useSelector((state) => state.ui.searchResults.searchMode);

  return searchMode === "Images" ? (
    <Button style={{marginLeft: "20px", width: "75px", borderRadius: "10px"}}
      className=""
      size="sm"
      color="login"
      onClick={() => dispatch(setSearchModeAction("Map"))}
    >
      Map
    </Button>
  ) : (
    <Button style={{marginLeft: "20px", width: "75px", borderRadius: "10px"}}
      className=""
      size="sm"
      color="login"
      onClick={() => dispatch(setSearchModeAction("Images"))}
    >
      Images
    </Button>
  );
}

export default MapImageToggle;

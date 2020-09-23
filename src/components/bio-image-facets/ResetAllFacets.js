import React from "react";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import {
  updateFilterAction,
  fetchFacetsSearchAction,
} from "../../store/reducer";
import "../buttons/buttons.scss";
import { faUndoAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ResetAllFacets = () => {
  const dispatch = useDispatch();
  //   const allFacets = useSelector((state) => state.ui.searchFilters);

  const handleResetAllFilters = () => {
    // Note: hard-coded for now. But would be nice to get init empty state
    // of filters somewhere and use that to clear them all. Thinking about it.
    const resetFilters = {
      search_string: "",
      site_id: [],
      plot: [],
      site_visit_id: [],
      image_type: [],
      date_range: {
        start: "",
        end: "",
      },
    };
    dispatch(updateFilterAction(resetFilters));
    dispatch(fetchFacetsSearchAction());
  };
  return (
    <Button
      // size="sm"
      color="reset"
      onClick={handleResetAllFilters}
    >
      <FontAwesomeIcon icon={faUndoAlt} /> Clear Filters
    </Button>
  );
};
export default ResetAllFacets;

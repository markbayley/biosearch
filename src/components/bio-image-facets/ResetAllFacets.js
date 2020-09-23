import React from "react";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import {
  updateFilterAction,
  fetchFacetsSearchAction,
} from "../../store/reducer";
import "../buttons/buttons.scss";

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
    <Button color="round" className="round" onClick={handleResetAllFilters}>
      Clear All Filters
    </Button>
  );
};
export default ResetAllFacets;

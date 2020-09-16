import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { updateFilterAction, fetchSearchAction } from "../../../store/reducer";
import { bioSort } from "./bioSort";
import "./BioSortOrder.scss";

const BioSortOrder = () => {
  const dispatch = useDispatch();
  const { sort_order, sort_column } = useSelector(
    (state) => state.ui.searchFilters.sort,
  );
  const selectedSortOrder = bioSort.sort_order.filter(
    (sort) => sort.sort_name === sort_order,
  );

  const handleSortOrder = (value) => {
    dispatch(
      updateFilterAction({ sort: { sort_order: value, sort_column } }),
    );
    dispatch(fetchSearchAction());
  };

  return (
    <div
      className="mobile-pagination"
    >
      <UncontrolledDropdown className="sort-order-item" size="sm">
        Sort Order:
        {" "}
        <DropdownToggle size="sm" caret color="sort-order-item" className="sort-order-item">
          {selectedSortOrder[0].sort_label}
        </DropdownToggle>
        <DropdownMenu>
          {bioSort.sort_order.map((sort) => (
            <DropdownItem
              key={sort.sort_name}
              onClick={() => handleSortOrder(sort.sort_name)}
            >
              {sort.sort_label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
};

export default BioSortOrder;

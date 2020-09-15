import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterAction, fetchSearchAction } from "../../../store/reducer";
import { bioSort } from "./bioSort";
// TODO: Create separate scss file for BioPageSize
import "./BioResultPagination.scss";

const BioPageSize = () => {
  const dispatch = useDispatch();
  const { page_size, page_num } = useSelector(
    (state) => state.ui.searchFilters.pagination,
  );
  const handlePageSizeChange = (value) => {
    dispatch(
      updateFilterAction({ pagination: { page_size: value, page_num } }),
    );
    dispatch(fetchSearchAction());
  };
  return (
    <>
      <UncontrolledDropdown className="pageitems" size="sm">
        <span className="">Page Size: </span>
        <DropdownToggle size="sm" caret color="pageitems" className="pageitems">
          {page_size}
        </DropdownToggle>
        <DropdownMenu>
          {bioSort.images_per_page.map((perPage) => (
            <DropdownItem
              key={perPage}
              onClick={() => handlePageSizeChange(perPage)}
            >
              {perPage}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </UncontrolledDropdown>
    </>
  );
};

BioPageSize.propTypes = {

};

export default BioPageSize;

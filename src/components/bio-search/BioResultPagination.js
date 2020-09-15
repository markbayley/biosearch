import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Pagination,
  PaginationItem,
  PaginationLink,
  Input,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import debounce from "lodash/debounce";
import { updateFilterAction, fetchSearchAction } from "../../store/reducer";
import { bioSort } from "./bioSort";

import "./BioResultPagination.scss";

// define a debounced dispatch to fire search only once while user is typing
// this method needs to be defined outside of component, otherwise the debounced
// method would be recreated on each state change which would defeat the purpose
const debouncedDispatch = debounce((dispatch, action) => {
  dispatch(action);
}, 1000);

const BioResultPagination = () => {
  const dispatch = useDispatch();
  // ui data out of store
  const { page_size, page_num } = useSelector(
    (state) => state.ui.searchFilters.pagination,
  );
  const { sort_order, sort_column } = useSelector(
    (state) => state.ui.searchFilters.sort,
  );
  // result data out of store
  const totalDocuments = useSelector((state) => state.search.totalDocuments) || 0;

  const selectedSortOrder = bioSort.sort_order.filter(
    (sort) => sort.sort_name === sort_order,
  );

  const pages = Math.ceil(totalDocuments / page_size);

  // change Page to given page, if delay is true, it will debounce the fetchSearchAction dispatch
  const changePage = (page, delay = false) => {
    // TODO: maybe move value checks into reducer?
    let newPage = parseInt(page, 10);
    if (Number.isNaN(newPage)) {
      return;
    }
    // don't go below 1
    if (newPage < 1) {
      newPage = 1;
    }
    if (newPage > pages) {
      newPage = pages;
    }
    // did it change at all?
    if (newPage === page_num) {
      // no change, cance debounce, and ignore
      debouncedDispatch.cancel();
      return;
    }
    // first update state
    dispatch(
      updateFilterAction({ pagination: { page_size, page_num: newPage } }),
    );
    // trigger search
    if (delay) {
      debouncedDispatch(dispatch, fetchSearchAction());
    } else {
      // cancel any debounced dispatchs
      debouncedDispatch.cancel();
      dispatch(fetchSearchAction());
    }
  };

  const handlePageSizeChange = (value) => {
    dispatch(
      updateFilterAction({ pagination: { page_size: value, page_num } }),
    );
    dispatch(fetchSearchAction());
  };

  const handleSortOrder = (value) => {
    dispatch(updateFilterAction({ sort: { sort_order: value, sort_column } }));
    dispatch(fetchSearchAction());
  };

  return (
    <div className="pagination-row">
      <Pagination
        className="pagination"
        size="sm"
        style={{ paddingTop: "5px" }}
      >
        {/* TODO: [TERNDA-903] Images per page and Sort Order should probably not be part of
                    pagination control. */}
        <div className="page-items">
          Images:
          {totalDocuments}
        </div>
        <UncontrolledDropdown className="pageitems" size="sm">
          <span className="">Page Size: </span>
          <DropdownToggle
            size="sm"
            caret
            color="pageitems"
            className="pageitems"
          >
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
        <div className="mobile-pagination">
          <UncontrolledDropdown className="pageitems" size="sm">
            Sort Order:
            {" "}
            <DropdownToggle
              size="sm"
              caret
              color="pageitems"
              className="pageitems"
            >
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
        <PaginationItem
          className={
            page_num === "" || parseInt(page_num, 10) === 1
              ? "disable-pagination"
              : "page-item"
          }
          disabled={page_num === "" || parseInt(page_num, 10) === 1}
        >
          <PaginationLink first title="First" onClick={() => changePage(1)} />
        </PaginationItem>
        <PaginationItem
          className={
            page_num === "" || parseInt(page_num, 10) === 1
              ? "disable-pagination"
              : "page-item"
          }
          disabled={page_num === "" || parseInt(page_num, 10) === 1}
        >
          <PaginationLink
            previous
            title="Previous"
            onClick={() => changePage(page_num - 1)}
          />
        </PaginationItem>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            changePage(Number(page_num), true);
          }}
        >
          <div className="page-input">
            <Input
              title="Enter page number"
              size="4"
              // min="1"
              pattern="[0-9]*"
              max={pages}
              type="text"
              bsSize="sm"
              value={page_num}
              onChange={(e) => {
                dispatch(
                  updateFilterAction({
                    pagination: {
                      page_size,
                      page_num: e.currentTarget.value.replace(/\D/, ""),
                    },
                  }),
                );
              }}
            />
          </div>
        </form>
        <PaginationItem
          className={
            page_num === "" || parseInt(page_num, 10) === pages
              ? "disable-pagination"
              : "page-item"
          }
          disabled={page_num === "" || parseInt(page_num, 10) === pages}
        >
          <PaginationLink
            next
            title="Next"
            onClick={() => changePage(Number(page_num) + 1)}
          />
        </PaginationItem>
        <PaginationItem
          className={
            page_num === "" || parseInt(page_num, 10) === pages
              ? "disable-pagination"
              : "page-item"
          }
          disabled={page_num === "" || parseInt(page_num, 10) === pages}
        >
          <PaginationLink last title="Last" onClick={() => changePage(pages)} />
        </PaginationItem>
      </Pagination>
    </div>
  );
};

export default BioResultPagination;

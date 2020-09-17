import React from "react";
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  Input,
  Form,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import debounce from "lodash/debounce";
import { updateFilterAction, fetchSearchAction } from "../../../store/reducer";

import "./BioPagination.scss";

// define a debounced dispatch to fire search only once while user is typing
// this method needs to be defined outside of component, otherwise the debounced
// method would be recreated on each state change which would defeat the purpose
// TODO: think about bringing this back
//       -> if yes, need to fix editing single digits (may onFoucs select all?
//       .. still need backspace to empty though)
//       -> noe way might be to use a custom input field with internal state?
const debouncedDispatch = debounce((dispatch, action) => {
  dispatch(action);
}, 1000);

const BioPagination = () => {
  const dispatch = useDispatch();
  // ui data out of store
  const { page_size, page_num } = useSelector(
    (state) => state.ui.searchFilters.pagination,
  );

  // result data out of store
  const totalDocuments = useSelector((state) => state.search.totalDocuments) || 0;

  const pages = Math.ceil(totalDocuments / page_size);

  const updatePagination = (data) => {
    dispatch(updateFilterAction({ pagination: data }));
  };

  // change Page to given page, if delay is true,
  // it will debounce the fetchSearchAction dispatch
  const changePage = (page, delay = false) => {
    // TODO: maybe move value checks into reducer?
    let newPage = Number(page);
    if (Number.isNaN(newPage)) {
      // input doesn't make any sense
      // cancel actions in case there are any
      debouncedDispatch.cancel();
      return;
    }
    if (delay && page === "") {
      // still typing just update store, so that current input is reflected in input field
      updatePagination({ page_size, page_num: page });
      // cancel actions in case there are any
      debouncedDispatch.cancel();
      return;
    }
    // some sanitiy checks on new page number
    // don't go below 1
    if (newPage < 1) {
      newPage = 1;
    }
    // don't go beyond max pages
    if (newPage > pages) {
      newPage = pages;
    }
    // did it change at all?
    if (newPage === page_num) {
      // no change ... we either have an update queued in debounce
      // or nothing needs to happen anyway
      if (!delay) {
        // don't wait, flush debounced events
        debouncedDispatch.flush();
      }
      // otherwise do nothing
      return;
    }
    // first update store
    updatePagination({ page_size, page_num: newPage });
    // trigger search
    if (delay) {
      debouncedDispatch(dispatch, fetchSearchAction());
    } else {
      // cancel any debounced dispatchs
      debouncedDispatch.cancel();
      dispatch(fetchSearchAction());
    }
  };

  return (
    <Pagination size="sm">
      <PaginationItem disabled={page_num === 1}>
        <PaginationLink first title="First" onClick={() => changePage(1)} />
      </PaginationItem>
      <PaginationItem disabled={page_num === 1}>
        <PaginationLink
          previous
          title="Previous"
          onClick={() => changePage(page_num - 1)}
        />
      </PaginationItem>
      <PaginationItem>
        <Form
          inline
          className="page-input"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            changePage(page_num);
          }}
        >
          <Input
            title="Enter page number"
            size="4"
            min="1"
            max={pages}
            type="number"
            bsSize="sm"
            value={page_num}
            onBlur={() => changePage(page_num)}
            onChange={(e) => { changePage(e.currentTarget.value, true); }}
          />
        </Form>
      </PaginationItem>
      <PaginationItem disabled={page_num === pages}>
        <PaginationLink
          next
          title="Next"
          onClick={() => changePage(page_num + 1)}
        />
      </PaginationItem>
      <PaginationItem disabled={page_num === pages}>
        <PaginationLink last title="Last" onClick={() => changePage(pages)} />
      </PaginationItem>
    </Pagination>
  );
};

export default BioPagination;

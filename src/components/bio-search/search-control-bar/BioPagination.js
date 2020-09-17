import React from "react";
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  Input,
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
  }

  // change Page to given page, if delay is true,
  // it will debounce the fetchSearchAction dispatch
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
      <PaginationItem
        disabled={page_num === "" || parseInt(page_num, 10) === 1}
      >
        <PaginationLink first title="First" onClick={() => changePage(1)} />
      </PaginationItem>
      <PaginationItem
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
            min="1"
            max={pages}
            type="number"
            bsSize="sm"
            value={page_num}
            onChange={(e) => {
              dispatch(
                updateFilterAction({
                  pagination: {
                    page_num: e.currentTarget.value.replace(/\D/, ""),
                  },
                }),
              );
            }}
          />
        </div>
      </form>
      <PaginationItem
        disabled={page_num === "" || parseInt(page_num, 10) === pages}
      >
        <PaginationLink
          next
          title="Next"
          onClick={() => changePage(Number(page_num) + 1)}
        />
      </PaginationItem>
      <PaginationItem
        disabled={page_num === "" || parseInt(page_num, 10) === pages}
      >
        <PaginationLink last title="Last" onClick={() => changePage(pages)} />
      </PaginationItem>
    </Pagination>
  );
};

export default BioPagination;

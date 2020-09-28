import React from "react";
import PropTypes from "prop-types";
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  Input,
  Form,
} from "reactstrap";
// import debounce from "lodash/debounce";

import "./BioPagination.scss";

// define a debounced dispatch to fire search only once while user is typing
// this method needs to be defined outside of component, otherwise the debounced
// method would be recreated on each state change which would defeat the purpose
// TODO: think about bringing this back
//       -> if yes, need to fix editing single digits (may onFoucs select all?
//       .. still need backspace to empty though)
//       -> noe way might be to use a custom input field with internal state?
// const debouncedDispatch = debounce((dispatch, action) => {
//   dispatch(action);
// }, 1000);

const BioPagination = ({ pageNum, pages, onChange }) => {
  // // change Page to given page, if delay is true,
  // // it will debounce the fetchSearchAction dispatch
  // const changePage = (page, delay = false) => {
  //   // TODO: maybe move value checks into reducer?
  //   let newPage = Number(page);
  //   if (Number.isNaN(newPage)) {
  //     // input doesn't make any sense
  //     // cancel actions in case there are any
  //     debouncedDispatch.cancel();
  //     return;
  //   }
  //   if (delay && page === "") {
  //     // still typing just update store, so that current input is reflected in input field
  //     setPageNum(page, false);
  //     // cancel actions in case there are any
  //     debouncedDispatch.cancel();
  //     return;
  //   }
  //   // some sanitiy checks on new page number
  //   // don't go below 1
  //   if (newPage < 1) {
  //     newPage = 1;
  //   }
  //   // don't go beyond max pages
  //   if (newPage > pages) {
  //     newPage = pages;
  //   }
  //   // did it change at all?
  //   if (newPage === page_num) {
  //     // no change ... we either have an update queued in debounce
  //     // or nothing needs to happen anyway
  //     if (!delay) {
  //       // don't wait, flush debounced events
  //       debouncedDispatch.flush();
  //     }
  //     // otherwise do nothing
  //     return;
  //   }
  //   // trigger search
  //   if (delay) {
  //     // TODO: update url needs to happen before we dispatch fetchSearch
  //     setPageNum(newPage);
  //     debouncedDispatch(dispatch, fetchSearchAction({
  //       queryString: history.location.search,
  //     }));
  //   } else {
  //     // cancel any debounced dispatchs
  //     debouncedDispatch.cancel();
  //     setPageNum(newPage);
  //     dispatch(fetchSearchAction({
  //       queryString: history.location.search,
  //     }));
  //   }
  // };

  const handleInput = (event) => {
    event.preventDefault();
    event.stopPropagation();
    onChange(event.target.elements.page_num.value);
  };

  const handlePage = (nextPage) => {
    if (nextPage !== pageNum && nextPage >= 1 && nextPage <= pages) {
      onChange(nextPage);
    }
  };

  return (
    <Pagination size="sm">
      <PaginationItem disabled={pageNum <= 1}>
        <PaginationLink first title="First" onClick={() => handlePage(1)} />
      </PaginationItem>
      <PaginationItem disabled={pageNum <= 1}>
        <PaginationLink
          previous
          title="Previous"
          onClick={() => handlePage(pageNum - 1)}
        />
      </PaginationItem>
      <PaginationItem>
        <Form
          inline
          className="page-input"
          onSubmit={handleInput}
        >
          <Input
            title="Enter page number"
            name="page_num"
            size="4"
            min="1"
            max={pages}
            type="number"
            bsSize="sm"
            // force re init on prop change
            key={pageNum}
            defaultValue={pageNum}
            onBlur={(e) => e.target.form.requestSubmit()}
          // TODO: onChange: could do debounced subnit?
          // onChange={(e) => { changePage(e.currentTarget.value, true); }}
          />
        </Form>
      </PaginationItem>
      <PaginationItem disabled={pageNum >= pages}>
        <PaginationLink
          next
          title="Next"
          onClick={() => handlePage(pageNum + 1)}
        />
      </PaginationItem>
      <PaginationItem disabled={pageNum >= pages}>
        <PaginationLink last title="Last" onClick={() => handlePage(pages)} />
      </PaginationItem>
    </Pagination>
  );
};

BioPagination.propTypes = {
  pageNum: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default BioPagination;

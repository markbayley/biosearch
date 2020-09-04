import React from "react";
import PropTypes from "prop-types";
import {
  Row,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { updateFilterAction, fetchSearchAction } from "../../store/reducer";
import "./SearchResult.scss";
import { bioSort } from "./bioSort";

const BioResultPagination = ({ page_size, page_num, totalDocuments }) => {
  const dispatch = useDispatch();

  const { sort_order, sort_column } = useSelector(
    (state) => state.ui.searchFilters.sort,
  );

  const selectedSortOrder = bioSort.sort_order.filter(
    (sort) => sort.sort_name === sort_order,
  );

  const getPagination = (itemsPerPage, startFrom, totalImages) => {
    const perPage = itemsPerPage || 4;
    const pages = Math.ceil(totalImages / perPage);
    const pagination = [];

    const currentPage = startFrom <= pages ? startFrom : 1;

    const showThisPage = (pageNo) => {
      for (let i = 1; i < 3; i += 1) {
        if (pageNo === currentPage + i) {
          return true;
        }
        if (pageNo === currentPage - i) {
          return true;
        }
      }
      return false;
    };

    // TODO: [TERNDA-867] Change pagination to only show 5 pages
    // between the prev and next buttons like portal.tern.org.au
    for (let i = 1; i <= pages; i += 1) {
      if (i === currentPage) {
        pagination.push({ id: i, current: true, show: true });
      } else if (showThisPage(i)) {
        pagination.push({ id: i, current: false, show: true });
      } else {
        pagination.push({ id: i, current: false, show: false });
      }
    }

    const changePage = (page, e) => {
      e.preventDefault();
      if (page !== currentPage) {
        dispatch(
          updateFilterAction({
            pagination: { page_size: itemsPerPage, page_num: page },
          }),
        );
        dispatch(fetchSearchAction());
      }
    };

    const goToPrevPage = (e) => {
      e.preventDefault();
      if (currentPage !== 1) {
        dispatch(
          updateFilterAction({
            pagination: { page_size: itemsPerPage, page_num: currentPage - 1 },
          }),
        );
        dispatch(fetchSearchAction());
      }
    };

    const goToNextPage = (e) => {
      e.preventDefault();
      if (currentPage !== pages) {
        dispatch(
          updateFilterAction({
            pagination: { page_size: itemsPerPage, page_num: currentPage + 1 },
          }),
        );
        dispatch(fetchSearchAction());
      }
    };

    return {
      pagination,
      pages,
      prevPage: goToPrevPage,
      nextPage: goToNextPage,
      changePage,
    };
  };

  const {
    pagination, pages, prevPage, nextPage, changePage,
  } = getPagination(
    page_size,
    page_num,
    totalDocuments,
  );

  const handlePageSizeChange = (value) => {
    dispatch(
      updateFilterAction({ pagination: { page_size: value, page_num } }),
    );
    dispatch(fetchSearchAction());
  };

  const handleSortOrder = (value) => {
    dispatch(
      updateFilterAction({
        sort: { sort_order: value, sort_column },
      }),
    );
    dispatch(fetchSearchAction());
  };
  return (
    <div>
      <Row className="pagination-row">
        <Pagination className="pagination" size="sm">
          {/* TODO: Images per page and Sort Order should probably not be part of
                    pagination control. */}
          <UncontrolledDropdown className="pageitems" size="sm">
            Images:
            {" "}
            <DropdownToggle
              size="sm"
              caret
              color="pageitems"
              id="dropdown-basic-button"
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
                id="dropdown-basic-button"
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
          <PaginationItem onClick={(e) => changePage(1, e)}>
            <PaginationLink first title="First" />
          </PaginationItem>
          <PaginationItem onClick={prevPage}>
            <PaginationLink previous title="Previous" />
          </PaginationItem>
          <div className="mobile-pagination">
            {pagination.map((page) => {
              if (page.show) {
                return (
                  <div key={page.id} className="pagelink">
                    <PaginationItem
                      key={page.id}
                      active={!!page.current}
                      onClick={(e) => changePage(page.id, e)}
                    >
                      <PaginationLink>{page.id}</PaginationLink>
                    </PaginationItem>
                  </div>
                );
              }
              return null;
            })}
          </div>
          <div className="page-input">
            {/* <div className="image-input">Page: </div> */}
            <Input placeholder="24" min={10} max={100} />
          </div>
          <PaginationItem onClick={nextPage}>
            <PaginationLink next title="Next" />
          </PaginationItem>
          <PaginationItem onClick={(e) => changePage(pages, e)}>
            <PaginationLink last title="Last" />
          </PaginationItem>
          {/* TODO: page_size / totlaDocuments a Button? ... what should happen on click? */}
          <Button
            className="page-items"
            color="flat"
            size="sm"
            style={{ marginLeft: "10px", fontSize: "16px" }}
          >
            {/* Showing
            {" "} */}
            {page_size}
            {" "}
            /
            {" "}
            {totalDocuments}
            {" "}
            Images
          </Button>
        </Pagination>
      </Row>
    </div>
  );
};

BioResultPagination.propTypes = {
  page_size: PropTypes.number.isRequired,
  page_num: PropTypes.number.isRequired,
  totalDocuments: PropTypes.number.isRequired,
};
export default BioResultPagination;

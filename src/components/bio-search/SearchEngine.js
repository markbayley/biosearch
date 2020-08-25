import React from "react";
import PropTypes from "prop-types";
import { Row, Pagination, DropdownButton, Dropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import SearchResult from "./SearchResult";
import BioResultPagination from "./BioResultPagination";
import {
  paginationPageSizeAction,
} from "../../store/reducer";
import "./SearchResult.scss";
import NoResults from "./NoResults";
import BioMapEngine from "../bio-image-map/BioMapEngine";

const SearchEngine = ({ embed }) => {
  const data = useSelector((state) => state.search.hits);
  const totalImages = useSelector((state) => state.search.totalDocuments);
  const pageScroll = useSelector((state) => state.search.pagination);
  const dispatch = useDispatch();

  // if (loading) {
  //   return (
  //     <Spinner animation="border" role="status">
  //       <span className="sr-only">Loading...</span>
  //     </Spinner>
  //   );
  // }

  const itemsPerPage = pageScroll["page_size"];
  const startFrom = pageScroll["page_num"];

  const {
    pagination,
    pages,
    prevPage,
    nextPage,
    changePage,
  } = BioResultPagination({
    itemsPerPage,
    data,
    startFrom,
    totalImages,
  });

  const handlePageSizeChange = (value) => {
    dispatch(paginationPageSizeAction({ page_size: value }));
  };

  const ShowPagination = () => (
    <div>
      <Row>
        {data.map((bioImageDocument) => (
          <SearchResult
            bioImageDocument={bioImageDocument["_source"]}
            site_id={bioImageDocument["_source"]["site_id"].value}
            key={bioImageDocument["_id"]}
            embed={embed}
          />
        ))}
         
      </Row>
      <Row className="pagination-row">
        <Pagination className="pagination">
          <div>
            <DropdownButton id="dropdown-basic-button" title={`${itemsPerPage} per page`} variant="pageitems" className="pageitems">
              <Dropdown.Item onClick={() => handlePageSizeChange(18)}>18 per page</Dropdown.Item>
              <Dropdown.Item onClick={() => handlePageSizeChange(36)}>36 per page</Dropdown.Item>
              <Dropdown.Item onClick={() => handlePageSizeChange(54)}>54 per page</Dropdown.Item>
              <Dropdown.Item onClick={() => handlePageSizeChange(102)}>102 per page</Dropdown.Item>
            </DropdownButton>
          </div>
          <Pagination.First onClick={(e) => changePage(1, e)}>
            First
          </Pagination.First>
          <Pagination.Prev onClick={prevPage}>Previous</Pagination.Prev>
          <div className={'mobile-pagination'}>
          {pagination.map((page) => {
            if (!page.ellipsis) {
              return (
                <div key={page.id} className="pagelink">
                  <Pagination.Item
                    key={page.id}
                    active={!!page.current}
                    onClick={(e) => changePage(page.id, e)}
                  >
                    {page.id}
                  </Pagination.Item>
                </div>
              );
            }
            return <Pagination.Ellipsis key={page.id} />;
          })}
          </div>
          <Pagination.Next onClick={nextPage}>Next</Pagination.Next>
          <Pagination.Last onClick={(e) => changePage(pages, e)}>
            Last
          </Pagination.Last>
        </Pagination>
      </Row>
    </div>
  );

  return totalImages === 0 ? <NoResults />  : <ShowPagination />;
};

SearchEngine.propTypes = {
  embed: PropTypes.bool,
};

SearchEngine.defaultProps = {
  embed: false,
};

export default SearchEngine;

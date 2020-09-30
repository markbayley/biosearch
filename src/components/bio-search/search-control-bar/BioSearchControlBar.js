import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { push } from "redux-first-history";
import BioTotalImages from "./BioTotalImages";
import BioPageSize from "./BioPageSize";
import BioSortOrder from "./BioSortOrder";
import BioPagination from "./BioPagination";
import "./BioSearchControlBar.scss";

const BioSearchControlBar = () => {
  const dispatch = useDispatch();
  const query_string = useSelector((state) => state.router.location.search);
  const uiConfig = useSelector((state) => state.ui.config);
  const totalDocuments = useSelector((state) => state.search.totalDocuments) || 0;
  const page_num = useSelector((state) => state.ui.query.page_num || 1);
  const page_size = useSelector((state) => state.ui.query.page_size || 12);
  const sort_order = useSelector((state) => state.ui.query.sort_order);

  const handlePageSize = (pageSize) => {
    const new_query = new URLSearchParams(query_string);
    if (pageSize === uiConfig.defaultPageSize) {
      new_query.delete("page_size");
    } else {
      new_query.set("page_size", pageSize);
    }
    // try to keep currently shown image on page
    const firstImage = (page_size * (page_num - 1)) + 1;
    let pageNum = Math.ceil(firstImage / pageSize);
    if (pageNum <= 0) {
      pageNum = 1;
    }
    // check page_num (avoid error)
    if (pageNum * pageSize > 10000) {
      new_query.set("page_num", Math.floor(10000 / pageSize));
    } else {
      new_query.set("page_num", pageNum);
    }
    dispatch(push({ search: `?${new_query.toString()}` }));
  };

  let selectedSortOrder = uiConfig.sort_orders.filter((item) => item.value === sort_order)[0];
  if (!selectedSortOrder) {
    // selectedSortOrder = uiConfig.defaultSortOrder;
    [selectedSortOrder] = uiConfig.sort_orders;
  }

  // TODO: add filename as secondary sort order ...
  //       date only may return random result ordering within same date
  const handleSortOrder = (sortOrder) => {
    const new_query = new URLSearchParams(query_string);
    if (sortOrder.value === uiConfig.defaultSortOrder) {
      new_query.delete("sort_order");
    } else {
      new_query.set("sort_order", sortOrder.value);
    }
    dispatch(push({ search: `?${new_query.toString()}` }));
  };

  const pages = Math.min(
    Math.ceil(totalDocuments / page_size),
    Math.floor(10000 / page_size),
  );
  const handlePageChange = (pageNum) => {
    const new_query = new URLSearchParams(query_string);
    if (!pageNum) {
      new_query.delete("page_num");
    } else {
      new_query.set("page_num", pageNum);
    }
    dispatch(push({ search: `?${new_query.toString()}` }));
  };

  return (
    <div className="search-control-bar">
      <div className="search-control-bar-item">
        <BioTotalImages totalDocuments={totalDocuments} />
      </div>
      <div className="search-control-bar-item">
        <BioPageSize
          pageSize={page_size}
          values={uiConfig.images_per_page}
          onChange={handlePageSize}
        />
      </div>
      <div className="search-control-bar-item">
        <BioSortOrder
          sortOrder={selectedSortOrder}
          values={uiConfig.sort_orders}
          onChange={handleSortOrder}
        />
      </div>
      <div className="search-control-bar-item">
        <BioPagination pageNum={page_num} pages={pages} onChange={handlePageChange} />
      </div>
    </div>
  );
};

export default BioSearchControlBar;

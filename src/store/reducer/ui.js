import { createAction, createReducer } from "@reduxjs/toolkit";
import { LOCATION_CHANGE } from "redux-first-history";
import { fetchSearchDoneAction } from "./search";

export const setSearchModeAction = createAction("SET_SEARCH_MODE");
export const showModalAction = createAction("SHOW_IMAGE_MODAL");
export const showImagePreviewAction = createAction("SHOW_IMAGE_PREVIEW");

// UI state reducers
// TODO: put query here ... update on LOCATION_CHANGE events (parse query)
const initialUiState = {
  searchResults: {
    searchMode: "Images",
  },
  imageModal: {
    show: false,
    imageIdx: 0,
  },
  query: {
    search_string: "",
    site_id: [],
    plot: [],
    site_visit_id: [],
    image_type: [],
    date_from: "",
    date_to: "",
  },
  config: {
    images_per_page: [12, 24, 48, 96, 192],
    defaultPageSize: 24,
    sort_orders: [
      { value: "asc", label: "Ascending" },
      { value: "desc", label: "Descending" },
    ],
    defaultSortOrder: "asc",
    sort_columns: [
      { value: "file_created", label: "File Creation" },
      { value: "image_type", label: "Image Type" },
      { value: "site_id", label: "Site Id" },
      { value: "plot", label: "Plot" },
      { value: "site_visit_id", label: "Site Visit Id" },
      { value: "camera_make", label: "Camera Make" },
      { value: "camera_model", label: "Camera Model" },
    ],
    defaultSortColumn: "file_created",
  },
};

function getPageSize(query, defaultValue, values) {
  const pageSize = Number(query.get("page_size"));
  if (!values.includes(pageSize)) {
    return defaultValue;
  }
  return pageSize;
}

function getSortOrder(query, defaultValue, values) {
  const value = query.get("sort_order");
  const item = values.filter((x) => x.value === value)[0];
  if (!item) {
    return defaultValue;
  }
  return value;
}

function getSortColumn(query, defaultValue, values) {
  const value = query.get("sort_field");
  const item = values.filter((x) => x.value === value)[0];
  if (!item) {
    return defaultValue;
  }
  return value;
}

const uiReducer = createReducer(initialUiState, {
  [setSearchModeAction]: (state, action) => {
    state.searchResults.searchMode = action.payload;
  },
  [fetchSearchDoneAction]: (state) => {
    state.imageModal.imageIdx = 0;
  },
  [showModalAction]: (state, action) => {
    state.imageModal.show = action.payload;
  },
  [showImagePreviewAction]: (state, action) => {
    state.imageModal = {
      show: true,
      imageIdx: action.payload,
    };
  },
  [LOCATION_CHANGE]: (state, action) => {
    const { location } = action.payload;
    if (location.path === "/search") {
      return;
    }
    const query = new URLSearchParams(location.search);
    state.query = {
      search_string: query.get("search_string"),
      site_id: query.getAll("site_id"),
      plot: query.getAll("plot"),
      site_visit_id: query.getAll("site_visit_id"),
      image_type: query.getAll("image_type"),
      date_from: query.get("date_from"),
      date_to: query.get("date_to"),
      // pagination parameters
      page_size: getPageSize(query, state.config.defaultPageSize, state.config.images_per_page),
      sort_order: getSortOrder(query, state.config.defaultSortOrder, state.config.sort_orders),
      sort_column: getSortColumn(query, state.config.defaultSortColumn, state.config.sort_columns),
      page_num: Number(query.get("page_num")),
    };
  },
});

export default uiReducer;

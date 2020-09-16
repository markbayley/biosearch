import { createAction, createReducer } from "@reduxjs/toolkit";
import { fetchSearchDoneAction } from "./search";

export const setSearchModeAction = createAction("SET_SEARCH_MODE");
export const updateFilterAction = createAction("UPDATE_SEARCH_FILTER");
export const showModalAction = createAction("SHOW_IMAGE_MODAL");
export const showImagePreviewAction = createAction("SHOW_IMAGE_PREVIEW");

// UI state reducers
const initialUiState = {
  searchResults: {
    searchMode: "Images",
  },
  searchFilters: {
    search_string: "",
    site_id: [],
    plot: [],
    site_visit_id: [],
    image_type: [],
    date_range: {
      start: "",
      end: "",
    },
    pagination: {
      page_size: 24,
      page_num: 1,
    },
    sort: {
      sort_order: "asc",
      sort_column: "file_created",
    },
  },
  imageModal: {
    show: false,
    imageIdx: 0,
  },
};

const uiReducer = createReducer(initialUiState, {
  [setSearchModeAction]: (state, action) => {
    state.searchResults.searchMode = action.payload;
  },
  // updateFilterAction leaves filters not mentioned in payload unchanged
  [updateFilterAction]: (state, action) => {
    const { pagination } = action.payload;
    // TODO: this is a bad workaround to avoid issues with paging past 10000 results
    //       we need a better way to deal with that but for now this avoids errors
    if (pagination) {
      // Check if user cleared pagination input field
      if (pagination.page_num !== "") {
        // we are updating pagination
        if (state.searchFilters.pagination.page_size !== pagination.page_size) {
          // whon updating page_size, let's try to keep currently shown first image on page
          // get "index" of first image
          const firstImage = (
            state.searchFilters.pagination.page_size
            * (state.searchFilters.pagination.page_num - 1)
          ) + 1;
          // calculate page num wher firstImage is on in new page_size
          pagination.page_num = Math.ceil(firstImage / pagination.page_size);
          if (pagination.page_num === 0) {
            pagination.page_num = 1;
          }
        }
        // check if page_num * page_size > 10000
        if ((pagination.page_num * pagination.page_size) > 10000) {
          // fix page_num to last page
          pagination.page_num = Math.floor(10000 / pagination.page_size);
        }
        action.payload.pagination = pagination;
      }
    } else {
      // Hack: revert page_num to default 1!
      // just in case the user cleared pagination input
      // then jumped to facets searching!
      const pageNum = state.searchFilters.pagination.page_num;
      if (pageNum === "") {
        state.searchFilters.pagination.page_num = 1;
      }
    }
    Object.assign(state.searchFilters, action.payload);
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
});

export default uiReducer;

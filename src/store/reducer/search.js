import { createAction, createReducer } from "@reduxjs/toolkit";

export const fetchSearchAction = createAction("FETCH_SEARCH");
export const fetchSearchDoneAction = createAction("FETCH_SEARCH_DONE");
export const fetchSearchErrorAction = createAction("FETCH_SEARCH_ERROR");
export const fetchFacetsAction = createAction("FETCH_FACETS");
export const fetchFacetsDoneAction = createAction("FETCH_FACETS_DONE");
export const fetchVocabsDoneAction = createAction("FETCH_VOCABS_DONE");
export const fetchFacetsSearchAction = createAction("FETCH_FACETS_SEARCH");

const initialSearchState = {
  error: null,
  isLoadingSearch: true,
  hits: [],
  totalDocuments: null,
  // facet values and counts
  facets: {
    site_id: { buckets: [] },
    plot: { buckets: [] },
    site_visit_id: { buckets: [] },
    image_type: { buckets: [] },
  },
  vocabs: null,
};

const searchReducer = createReducer(initialSearchState, {
  [fetchFacetsSearchAction]: (state) => {
    state.isLoadingSearch = true;
  },
  [fetchSearchAction]: (state) => {
    state.isLoadingSearch = true;
  },
  [fetchSearchDoneAction]: (state, action) => {
    state.isLoadingSearch = false;
    const { hits } = action.payload;
    if (hits) {
      // Null, Undefined, Empty, Whatever .... All Means No Results
      state.hits = hits.hits;
      state.totalDocuments = hits.total.value;
    }
  },
  [fetchSearchErrorAction]: (state, action) => {
    state.isLoadingSearch = false;
    state.error = action.payload;
  },
  [fetchFacetsDoneAction]: (state, action) => {
    const { aggregations } = action.payload;
    state.facets = aggregations;
  },
  [fetchVocabsDoneAction]: (state, action) => {
    state.vocabs = action.payload;
  },
});

export default searchReducer;

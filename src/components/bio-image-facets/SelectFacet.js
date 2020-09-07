/* eslint-disable no-nested-ternary */
import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import get from "lodash/get";
import {
  updateFilterAction,
  fetchFacetsSearchAction,
} from "../../store/reducer";
import { facetColourStyles } from "./facetColourStyles";

const SelectFacet = ({ facet, showZeros, ...props }) => {
  const dispatch = useDispatch();

  // currently selected facets
  const selected = useSelector((state) => state.ui.searchFilters[facet]);
  // facet data as returned by ES
  const facets = useSelector((state) => state.search.facets[facet]);
  // vocabulary with labels for facet values
  const vocab = useSelector((state) => get(state.search.vocabs, facet, null));

  const selectedValues = new Set(selected.map((item) => item.value));

  // build list of options for select widget
  const cur_value = [];
  const options = facets.buckets.reduce((accum, item) => {
    const count = item.doc_count;
    if (showZeros || count > 0) {
      const value = item.key;
      const label = get(vocab, `${item.key}.label`, item.key);
      const option = { label, value, count };
      if (selectedValues.has(value)) {
        cur_value.push(option);
      }
      // add option to result
      accum.push(option);
    }
    return accum;
  }, []);

  const handleChange = (items) => {
    // update state
    if (items === null) {
      dispatch(updateFilterAction({ [facet]: [] }));
    } else {
      dispatch(updateFilterAction({ [facet]: items }));
    }
    // update facets and search results
    dispatch(fetchFacetsSearchAction());
  };

  return (
    <Select
      className="mb-4 facet"
      isMulti
      options={options}
      value={cur_value}
      isSearchable
      autoFocus
      onChange={handleChange}
      styles={facetColourStyles}
      getOptionLabel={(option) => `${option.label} (${option.count})`}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
};

SelectFacet.propTypes = {
  // the property name in redux store at 'state.search.facets[facet]'.
  facet: PropTypes.string.isRequired,
  // show values with 0 results?
  showZeros: PropTypes.bool,
};

SelectFacet.defaultProps = {
  showZeros: true,
};

export default SelectFacet;

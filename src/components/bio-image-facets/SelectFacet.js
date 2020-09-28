/* eslint-disable no-nested-ternary */
import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import get from "lodash/get";
import { facetColourStyles } from "./facetColourStyles";

const SelectFacet = ({
  name, value, showZeros, onChange, ...props
}) => {
  // facet data as returned by ES
  const facets = useSelector((state) => state.search.facets[name]);
  // vocabulary with labels for facet values
  const vocab = useSelector((state) => get(state.search.vocabs, name, null));

  // build list of options for select widget
  const cur_value = [];
  const options = facets.buckets.reduce((accum, item) => {
    const count = item.doc_count;
    if (showZeros || count > 0) {
      const option = {
        label: get(vocab, `${item.key}.label`, item.key),
        value: item.key,
        count,
      };
      // is optionValue in current values?
      if (value && value.includes(option.value)) {
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
      onChange(name, []);
    } else {
      onChange(name, items.map((e) => e.value));
    }
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
  // the property name in redux store at 'state.search.facets[name]'
  // and state.search.vocabs[name] with vocabulary for lables and additional infos.
  // which holds current possible values
  name: PropTypes.string.isRequired,
  // the current value
  value: PropTypes.arrayOf(PropTypes.any),
  // show values with 0 results?
  showZeros: PropTypes.bool,
  // onChange callback
  onChange: PropTypes.func.isRequired,
};

SelectFacet.defaultProps = {
  value: [],
  showZeros: true,
};

export default SelectFacet;

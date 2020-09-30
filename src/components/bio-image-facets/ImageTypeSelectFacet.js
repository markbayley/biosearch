/* eslint-disable no-nested-ternary */
import React from "react";
import startCase from "lodash/startCase";
import get from "lodash/get";
import Select from "react-select";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { facetColourStyles } from "./facetColourStyles";
import CustomSelectOption from "./CustomSelectOption";
import CustomSelectValue from "./CustomSelectValue";

const ImageTypeSelectFacet = ({
  name, value, showZeros, onChange, ...props
}) => {
  // facet data as returned by ES
  const facets = useSelector((state) => state.search.facets[name]);
  // vocabulary with labels for facet values
  const vocab = useSelector((state) => get(state.search.vocabs, name, null));

  // build list of options for select widget
  const cur_value = [];
  const options = [];
  facets.buckets.forEach((item) => {
    // for ancillaries add image_type_sub as well
    if (item.key === "ancillary") {
      item["image_type_sub"].buckets.forEach(
        (sub_type) => {
          // FIXME: [TERNDA-860] Data corruption needs to be fixed.
          // Ancillary Samford camera trap has string like %/20.
          // Wilma and Andrew need to look at backend data
          if (showZeros || sub_type.doc_count > 0) {
            const option = {
              label: `${get(vocab, `${item.key}.label`, name)}[${startCase(
                get(
                  vocab,
                  `${item.key}.${sub_type.key}.label`,
                  sub_type.key,
                ).replace(/%20/gi, " "),
              )}]`,
              value: `ancillary.${sub_type.key.replace(/%20/gi, " ")}`,
              count: sub_type.doc_count,
            };
            if (value && value.includes(option.value)) {
              cur_value.push(option);
            }
            options.push(option);
          }
        },
      );
    } else if (showZeros || item.doc_count > 0) {
      const option = {
        label: get(vocab, `${item.key}.label`, name),
        value: item.key,
        count: item.doc_count,
      };
      if (value && value.includes(option.value)) {
        cur_value.push(option);
      }
      options.push(option);
    }
  });

  const handleChange = (items) => {
    // update state
    if (items === null) {
      // react-select return null if nothing is selected
      onChange(name, []);
    } else {
      onChange(name, items.map((e) => e.value));
    }
  };

  return (
    <Select
      className="mb-4"
      isMulti
      options={options}
      value={cur_value}
      isSearchable
      autoFocus
      onChange={handleChange}
      styles={facetColourStyles}
      components={{
        Option: CustomSelectOption,
        SingleValue: CustomSelectValue,
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
};

ImageTypeSelectFacet.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(PropTypes.any),
  showZeros: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};
ImageTypeSelectFacet.defaultProps = {
  showZeros: true,
  value: [],
};

export default ImageTypeSelectFacet;

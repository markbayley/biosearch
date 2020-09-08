/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  Form, InputGroup, InputGroupAddon, Input, Button,
} from "reactstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  updateFilterAction, fetchFacetsSearchAction,
} from "../../store/reducer";

const TextFacet = ({ facet, ...props }) => {
  const dispatch = useDispatch();

  // currently selected facets
  const value = useSelector((state) => state.ui.searchFilters[facet]);

  const handleChange = (event) => dispatch(updateFilterAction({ [facet]: event.target.value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(fetchFacetsSearchAction());
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup
        inline="true"
        className="mb-4 facet"
      >
        <Input
          onChange={handleChange}
          onBlur={handleSubmit}
          type="text"
          aria-label="term"
          value={value}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
        />
        <InputGroupAddon addonType="append">
          <Button color="login" onClick={handleSubmit} type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </Form>
  );
};

TextFacet.propTypes = {
  facet: PropTypes.string.isRequired,
};

export default TextFacet;

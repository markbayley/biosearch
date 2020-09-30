/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";
import {
  Form, InputGroup, InputGroupAddon, Input, Button,
} from "reactstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./TextFacet.scss";
import "../buttons/buttons.scss";

const TextFacet = ({ name, value, onChange, ...props }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    onChange(name, event.target.elements.text.value);
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4 text-facet">
      <InputGroup inline="true">
        <Input
          onBlur={(e) => e.target.form.requestSubmit()}
          className="text-facet-input"
          type="text"
          aria-label="term"
          name="text"
          defaultValue={value}
          // set key to force re-recration if value changes
          key={value}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
        />
        <InputGroupAddon addonType="append">
          <span className="separator" />
          <Button color="round" className="round" type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </Form>
  );
};

TextFacet.propTypes = {
  // called when value change has been committed
  onChange: PropTypes.func.isRequired,
  // name of facet parameter
  name: PropTypes.string.isRequired,
  // used as initialValue in text field
  value: PropTypes.string,
};

TextFacet.defaultProps = {
  value: "",
};

export default TextFacet;

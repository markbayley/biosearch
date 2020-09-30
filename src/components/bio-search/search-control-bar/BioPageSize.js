import React from "react";
import PropTypes from "prop-types";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "./BioPageSize.scss";

// TODO: naybe this should be a select?
const BioPageSize = ({ pageSize, onChange, values }) => (
  <UncontrolledDropdown className="page-size-item" size="sm">
    <span className="">Page Size: </span>
    <DropdownToggle
      size="sm"
      caret
      color="page-size-item"
      className="page-size-item"
    >
      {pageSize}
    </DropdownToggle>
    <DropdownMenu>
      {values.map((perPage) => (
        <DropdownItem
          key={perPage}
          onClick={() => onChange(perPage)}
        >
          {perPage}
        </DropdownItem>
      ))}
    </DropdownMenu>
  </UncontrolledDropdown>
);

BioPageSize.propTypes = {
  pageSize: PropTypes.number.isRequired,
  values: PropTypes.arrayOf(PropTypes.number).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default BioPageSize;

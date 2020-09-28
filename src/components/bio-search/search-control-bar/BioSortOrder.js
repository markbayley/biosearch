import React from "react";
import PropTypes from "prop-types";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "./BioSortOrder.scss";

const BioSortOrder = ({ sortOrder, values, onChange }) => (
  <div
    className="mobile-pagination"
  >
    <UncontrolledDropdown className="sort-order-item" size="sm">
      Sort Order:
      {" "}
      <DropdownToggle size="sm" caret color="sort-order-item" className="sort-order-item">
        {sortOrder.label}
      </DropdownToggle>
      <DropdownMenu>
        {values.map((sort) => (
          <DropdownItem
            key={sort.value}
            onClick={() => onChange(sort)}
          >
            {sort.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </UncontrolledDropdown>
  </div>
);

BioSortOrder.propTypes = {
  sortOrder: PropTypes.objectOf(PropTypes.any).isRequired,
  values: PropTypes.arrayOf(PropTypes.any).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default BioSortOrder;

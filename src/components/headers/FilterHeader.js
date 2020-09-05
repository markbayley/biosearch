import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { faFilter, faStar, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./FilterHeader.scss";

const FilterHeader = () => (
  <div className="filter-header">
    <Nav tabs>
      <NavItem>
        <NavLink href="#" active className="filter-link">
          <FontAwesomeIcon icon={faFilter} />
          {" "}
          Filter
        </NavLink>
      </NavItem>
      <NavItem style={{ display: "none" }}>
        <NavLink href="#" className="filter-link">
          <FontAwesomeIcon icon={faStar} />
          {" "}
          Favs
        </NavLink>
      </NavItem>
      <NavItem style={{ display: "none" }}>
        <NavLink href="#" className="filter-link">
          <FontAwesomeIcon icon={faCheckSquare} />
          {" "}
          Saved
        </NavLink>
      </NavItem>
    </Nav>
  </div>
);

export default FilterHeader;

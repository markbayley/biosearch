import React from "react";
import { Nav, NavbarText, NavItem, NavLink } from "reactstrap";

import { ReactComponent as BioimagesDownload } from "../../assets/icons/BioimagesDownload.svg";

import LoginNavItem from "./LoginNavItem";

import "./BioImagesAppHeader.scss";

const BioImagesAppHeader = () => (
  <>
    <NavbarText>
      <h3 className="biologo">
        <BioimagesDownload className="bio-icon" />
        {" "}
        Bioimages
      </h3>
    </NavbarText>
    <Nav navbar>
      <NavItem>
        <NavLink>
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
          About
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
          Search
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
          Help
        </NavLink>
      </NavItem>
      <LoginNavItem />
    </Nav>
  </>
);

export default BioImagesAppHeader;

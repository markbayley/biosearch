import React from "react";
import { NavLink as RRNavLink } from "react-router-dom";
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
        <NavLink tag={RRNavLink} to="/" exact>
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={RRNavLink} to="/about">
          About
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={RRNavLink} to="/search">
          Search
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={RRNavLink} to="/help">
          Help
        </NavLink>
      </NavItem>
      <LoginNavItem />
    </Nav>
  </>
);

export default BioImagesAppHeader;

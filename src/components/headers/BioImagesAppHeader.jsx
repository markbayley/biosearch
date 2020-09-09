import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import LoginButton from "../buttons/LoginButton";
import { CONFIG } from "../../config";
import MapImageToggle from "../buttons/MapImageToggle";

import { ReactComponent as BioimagesDownload } from "../../assets/icons/BioimagesDownload.svg";

import "./BioImagesAppHeader.scss";

const BioImagesAppHeader = () => (
  <Nav navbar className="nav-container mb-auto mt-auto">
    <NavItem className="mt-auto mb-auto mr-auto">
      <h3 className="biologo">
        <BioimagesDownload className="bio-icon" />
        Bioimages
      </h3>
    </NavItem>

    <NavLink className="mt-auto mb-auto">
      Home
    </NavLink>
    <NavLink className="mt-auto mb-auto">
      Help
    </NavLink>
    <NavLink className="mt-auto mb-auto" href={CONFIG.LOGIN_URL}>
      Login
    </NavLink>


    {/* <NavItem className="mt-auto mb-auto">
   
      <a href={CONFIG.LOGIN_URL}>
        {" "}
        <LoginButton />{" "}
      </a>
    </NavItem> */}

    <NavItem className="mt-auto mb-auto">
      <MapImageToggle />
    </NavItem>
  </Nav>
);

export default BioImagesAppHeader;

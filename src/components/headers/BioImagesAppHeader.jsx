import React from "react";
import { Nav, NavItem } from "reactstrap";
import LoginButton from "../buttons/LoginButton";
import { CONFIG } from "../../config";
import MapImageToggle from "../buttons/MapImageToggle";

import "./BioImagesAppHeader.scss";

/* Connects to another test API unsplash, not the TERN API as yet, need to change over */
const BioImagesAppHeader = () => (
  <Nav navbar className="nav-container mb-auto mt-auto" style={{ width: "100%" }}>
    <NavItem className="mt-auto mb-auto mr-auto">
      <h1 className="biologo">
        <img
          className="bio-icon img-fluid"
          src="/img/icons/bioimages-download.svg"
          alt="bio icon"
        />
        Bioimages
      </h1>
    </NavItem>

    <NavItem className="mt-auto mb-auto">
      {/* Login Buttons */}
      <a href={CONFIG.LOGIN_URL}>
        {" "}
        <LoginButton />
        {" "}
      </a>
    </NavItem>

    <NavItem className="mt-auto mb-auto">
      <MapImageToggle />
    </NavItem>
  </Nav>
);

export default BioImagesAppHeader;

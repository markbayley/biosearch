import React from "react";
import { Nav, NavbarText, NavItem, NavLink } from "reactstrap";
import { CONFIG } from "../../config";

import { ReactComponent as BioimagesDownload } from "../../assets/icons/BioimagesDownload.svg";

import "./BioImagesAppHeader.scss";

const BioImagesAppHeader = () => (
  <>
    <NavbarText >
      <h3 className="biologo">
        <BioimagesDownload className="bio-icon" />
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
        <NavLink href={CONFIG.LOGIN_URL}>
          Login
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
          Help
        </NavLink>
      </NavItem>
    </Nav>
  </>
);

export default BioImagesAppHeader;

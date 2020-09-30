import React from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import { Col, Nav, NavItem, NavLink } from "reactstrap";
import "./Home.scss";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SitesList() {
  return (
    <Col xl={3} className="sites-sidebar" id="sites">
      <div className="section-title">Sites</div>

      <Nav navbar className="home-sites">
        <NavItem>
          <NavLink tag={RRNavLink} to="/about#alice-mulga">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Alice Mulga
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/about#boyagin">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Boyagin
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/about">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Cape Tribulation
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/about">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Cumberland Plain
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/about">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Calperum Mallee
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/about">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Cowbay
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/about">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Gingin Banksia Woodland
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/about">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Great Western Woodland
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/about">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Karawatha
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/about">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Litchfield Savanna
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/about">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Mitchel Grass Rangeland
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/about">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Robson Creek
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/about">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Samford
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/about">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Tumbarumba
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/about">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Wombat Stringybark
            Eucalypt
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/about">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Whroo Victorian Dry
            Eucalypt
          </NavLink>
        </NavItem>
      </Nav>
    </Col>
  );
}

export default SitesList;

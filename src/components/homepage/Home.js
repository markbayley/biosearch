import React from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Button,
  Container,
  Row,
  Col,
  Nav,
  NavbarText,
  NavItem,
  NavLink,
} from "reactstrap";
import "./Home.scss";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as SvgLai } from "../../assets/icons/LAI.svg";
import { ReactComponent as SvgPanoramic } from "../../assets/icons/panoramic.svg";
import { ReactComponent as SvgPhenocam } from "../../assets/icons/phenocam.svg";
import { ReactComponent as SvgPhotopoint } from "../../assets/icons/photopoint.svg";

const Home = (props) => {
  return (
    <div>
      <div className="home-header">
        <Container>
          {/* SUBHEADER */}
          <div className="home-caption">
            <h3>Bioimages Portal</h3>
            The TERN Australian SuperSite Network is made up of a number of
            representitive ecosystem "SuperSites" located across the country.
            <br />
            <Button
              color="homesearch"
              className="homesearch"
              tag={RRNavLink}
              to="/search"
            >
              <FontAwesomeIcon icon={faSearch} /> Search Images
            </Button>
          </div>

          {/* <Button
            color="home-search"
            className="home-search"
            tag={RRNavLink}
            to="/search"
          >
            <FontAwesomeIcon icon={faSearch} /> Search Images
          </Button> */}
        </Container>
      </div>

      <Container className="content-home">
        <Row>
          {/* SIDEBAR  */}
          <Col xl={3} className="sites-sidebar">
            <div className="home-title">Sites</div>

            <Nav navbar className="home-sites">
              <NavItem>
                <NavLink tag={RRNavLink} to="/about#alice-mulga">
                  Alice Mulga
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/about#boyagin">
                  Boyagin
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/about">
                  Cape Tribulation
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/about">
                  Cumberland Plain
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/about">
                  Calperum Mallee
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/about">
                  Cowbay
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/about">
                  Gingin Banksia Woodland
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/about">
                  Great Western Woodland
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/about">
                  Karawatha
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/about">
                  Litchfield Savanna
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/about">
                  Mitchel Grass Rangeland
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/about">
                  Robson Creek
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/about">
                  Samford
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/about">
                  Tumbarumba
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/about">
                  Wombat Stringybark Eucalypt
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/about">
                  Whroo Victorian Dry Eucalypt
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          {/* CONTENT */}
          <Col>
            <div className="home-title center">
              Welcome to TERN Bioimages Portal
            </div>
            <p className="home-text">
              BioImage data from the Australian SuperSite Network records
              vegetation condition across 1 ha vegetation plots. The records
              include Leaf Area Index, Phenocamera, and Photopoint images.
            </p>

            <Row className="center">
              <NavLink tag={RRNavLink} to="/about#sites">
                <img
                  src="/img/sample-map.png"
                  alt="sample site map"
                  className="map-links"
                />
              </NavLink>
            </Row>
            <p className="info-text center">
              Click on the map to learn more about our sites...
            </p>
            <p className="home-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
              dapibus nisl. Mauris ut ipsum nunc. Proin maximus, justo quis
              maximus ultricies, elit massa interdum lectus, sit amet pulvinar
              nunc nibh et sem. Donec vitae dui pharetra, iaculis nunc at,
              scelerisque purus. Morbi vel suscipit libero, vestibulum sodales
              nisl. Cras quis consequat velit.
            </p>
          </Col>
        </Row>
      </Container>

      {/* BANNER */}
      <div className="home-banner">
        <Nav className="image-links-banner center">
          <NavItem>
            <NavLink tag={RRNavLink} to="/about">
              <SvgLai className="icon-large svg-icon-phenocam" />
              <h5>Leaf Area</h5>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="/about">
              <SvgPanoramic className="icon-large svg-icon-phenocam" />
              <h5>Panorama</h5>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="/about">
              <SvgPhenocam className="icon-large svg-icon-phenocam" />
              <h5>Phenocam</h5>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="/about">
              <SvgPhotopoint className="icon-large svg-icon-phenocam" />
              <h5>Photopoint</h5>
            </NavLink>
          </NavItem>
        </Nav>
      </div>

      <Container>
        <Row>
          <Col>
            <div className="home-title">Image Types</div>
            <p className="home-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
              dapibus nisl. Mauris ut ipsum nunc. Proin maximus, justo quis
              maximus ultricies, elit massa interdum lectus, sit amet pulvinar
              nunc nibh et sem vel suscipit libero, vestibulum sodales nisl.
              Cras quis consequat velit.
            </p>

            <Nav className="image-links center">
              <NavItem>
                <NavLink tag={RRNavLink} to="/about">
                  <SvgLai className="icon svg-icon-phenocam" />
                  <p>Leaf Index</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/about">
                  <SvgPanoramic className="icon svg-icon-phenocam" />
                  <p>Panorama</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/about">
                  <SvgPhenocam className="icon svg-icon-phenocam" />
                  <p>Phenocam</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/about">
                  <SvgPhotopoint className="icon svg-icon-phenocam" />
                  <p>Photopoint</p>
                </NavLink>
              </NavItem>
            </Nav>
            <p className="home-text-highlighted">
              <h4>Lorem Ipsum</h4>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
              dapibus nisl. Mauris ut ipsum nunc. Proin maximus, justo quis
              maximus ultricies, elit massa interdum lectus, sit amet pulvinar
              nunc nibh et sem."
            </p>
            <p className="home-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
              dapibus nisl. Mauris ut ipsum nunc. Proin maximus, justo quis
              maximus ultricies, elit massa interdum lectus, sit amet pulvinar
              nunc nibh et sem vel suscipit libero, vestibulum sodales nisl.
              Cras quis consequat velit.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;

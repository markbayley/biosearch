import React from "react";
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
import SvgLai from "../icons-svgs/SvgLai";
import SvgPanoramic from "../icons-svgs/SvgPanoramic";
import SvgPhenocam from "../icons-svgs/SvgPhenocam";
import SvgPhotopoint from "../icons-svgs/SvgPhotopoint";

const HomeHeader = (props) => {
  return (
    <Container>
      <div className="home-header">
        {/* <div className="home-title">
            Delivering open access to Australia's terrestrial ecosystem data
          </div> */}
        <div className="home-caption">
          The TERN Australian SuperSite Network is made up of a number of
          "SuperSites" located across the country, each representative of a
          different ecosystem type.
        </div>

        <Button color="home-search" className="home-search">
          <FontAwesomeIcon icon={faSearch} />
          {" "}
          Search Images
        </Button>
      </div>

      <Container>
        <Row>
          <Col xl={3} className="sites-sidebar">
            <div className="home-title">
              Sites
            </div>

            <Nav navbar className="home-sites">
              <NavItem>
                <NavLink>Alice Mulga</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Boyagin</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Cape Tribulation</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Cumberland Plain</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Calperum Mallee</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Cowbay</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Gingin Banksia Woodland</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Great Western Woodland</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Karawatha</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Litchfield Savanna</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Mitchel Grass Rangeland</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Robson Creek</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Samford</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Tumbarumba</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Wombat Stringybark Eucalypt</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Whroo Victorian Dry Eucalypt</NavLink>
              </NavItem>
            </Nav>
          </Col>

          <Col style={{ border: "1px solid lightgrey", height: "auto" }}>
            <div className="home-title">Welcome to TERN Bioimages Portal</div>
            <p>
              BioImage data from the Australian SuperSite Network records
              vegetation condition across 1 ha vegetation plots. The records
              include Leaf Area Index, Phenocamera, and Photopoint images.
            </p>

            <Row>
              <Col className="center">
                <img
                  src="/img/sample-map.png"
                  alt="sample site map"
                  className="map-links"
                />
              </Col>
            </Row>
            <p className="info-text center">
              Click on the map to learn more about our sites...
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
              dapibus nisl. Mauris ut ipsum nunc. Proin maximus, justo quis
              maximus ultricies, elit massa interdum lectus, sit amet pulvinar
              nunc nibh et sem. Donec vitae dui pharetra, iaculis nunc at,
              scelerisque purus. Morbi vel suscipit libero, vestibulum sodales
              nisl. Cras quis consequat velit.
            </p>

            <Nav className="image-links center">
              <NavItem>
                <NavLink>
                  <SvgLai className="icon" />
                  <p>Leaf Area</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <SvgPanoramic className="icon"/>
                  <p>Phenocam</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">
                  <SvgPhenocam className="icon"/>
                  <p>Photopoint</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <SvgPhotopoint className="icon"/>
                  <p>Panorama</p>
                </NavLink>
              </NavItem>
            </Nav>

            <p className="info-text center">
              Click on an icon to learn more about image types...
            </p>
            <p>
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
    </Container>
  );
};

export default HomeHeader;

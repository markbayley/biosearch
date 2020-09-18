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
import "./HomeHeader.scss";
import { faSearch, faGlobeAsia } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          <FontAwesomeIcon icon={faSearch} /> Search Images
        </Button>
      </div>

      <Container>
        <Row>
          <Col xl={3} style={{ border: "1px solid grey", height: "auto" }}>
            <div className="home-title">Sites  <hr></hr></div>
           
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
                <NavLink href="">Cumberland Plain</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Calperum Mallee</NavLink>
              </NavItem>
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
                <NavLink href="">Cumberland Plain</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Calperum Mallee</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Cumberland Plain</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Calperum Mallee</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Calperum Mallee</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Cumberland Plain</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Calperum Mallee</NavLink>
              </NavItem>
            </Nav>
          </Col>

          <Col style={{ border: "1px solid grey", height: "auto" }}>
            <div className="home-title">Welcome to TERN Bioimages Portal</div>
            <p>
              BioImage data from the Australian SuperSite Network records
              vegetation condition across 1 ha vegetation plots. The records
              include Leaf Area Index, Phenocamera, and Photopoint images.
            </p>

            <Nav className="center">
              <NavItem>
                <NavLink>
                  <FontAwesomeIcon icon={faSearch} />
                  <p>Leaf Area</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <FontAwesomeIcon icon={faGlobeAsia} />
                  <p>Phenocam</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <FontAwesomeIcon icon={faSearch} />
                  <p>Photopoint</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">
                  <FontAwesomeIcon icon={faGlobeAsia} />
                  <p>Panorama</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <FontAwesomeIcon icon={faSearch} />
                  <p> Auxillary</p>
                </NavLink>
              </NavItem>
            </Nav>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
              dapibus nisl. Mauris ut ipsum nunc. Proin maximus, justo quis
              maximus ultricies, elit massa interdum lectus, sit amet pulvinar
              nunc nibh et sem. Donec vitae dui pharetra, iaculis nunc at,
              scelerisque purus. Morbi vel suscipit libero, vestibulum sodales
              nisl. Cras quis consequat velit.
            </p>
            <Row>
              <Col className="center">
                <img src="" alt="map" className="map" />
              </Col>
            </Row>
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
        <Button color="map-search" className="map-search">
          <FontAwesomeIcon icon={faGlobeAsia} /> Map Search
        </Button>
      </Container>
    </Container>
  );
};

export default HomeHeader;

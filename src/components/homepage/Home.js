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
        {/* <div className="home-title">
            Delivering open access to Australia's terrestrial ecosystem data
          </div> */}
        <div className="home-caption">
          The TERN Australian SuperSite Network is made up of a number of
          "SuperSites" located across the country, each representative of a
          different ecosystem type.
        </div>

        <Button color="home-search" className="home-search" tag={RRNavLink} to="/search">
          <FontAwesomeIcon icon={faSearch} />
          {" "}
          Search Images
        </Button>
      </div>

      <div>
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
                <SvgLai className="icon svg-icon-lai" />
                <p>Leaf Area</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <SvgPanoramic className="icon svg-icon-phenocam" />
                <p>Panorama</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">
                <SvgPhenocam className="icon svg-icon-photopoint" />
                <p>Phenocam</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <SvgPhotopoint className="icon svg-icon-panoramic" />
                <p>Photopoint</p>
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
      </div>
    </div>
  );
};

export default Home;

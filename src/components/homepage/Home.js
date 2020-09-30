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
import { Link } from "react-scroll";
import "./Home.scss";
import { ReactComponent as SvgLai } from "../../assets/icons/LAI.svg";
import { ReactComponent as SvgPanoramic } from "../../assets/icons/panoramic.svg";
import { ReactComponent as SvgPhenocam } from "../../assets/icons/phenocam.svg";
import { ReactComponent as SvgPhotopoint } from "../../assets/icons/photopoint.svg";
import SubHeader from "./SubHeader";
import SitesList from "./SitesList";

const Home = (props) => {
  return (
    <div id="top">
      <SubHeader />
      <Container className="content-home">
        <div className="home-title center">
          Welcome to TERN Bioimages Portal
        </div>
        <p className="home-text-start center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
          dapibus nisl. Mauris ut ipsum nunc. Proin maximus, justo quis maximus
          ultricies, elit massa interdum lectus, sit amet pulvinar nunc nibh et
          sem. Donec vitae dui pharetra. Proin maximus, justo quis maximus
          ultricies, elit massa interdum lectus, sit amet pulvinar nunc nibh et
          sem.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "30px 0px",
          }}
        >
          <Link to="sites" smooth duration={1000}>
            <Button color="home-link">
              <img
                src="https://www.tern.org.au/wp-content/uploads/elementor/thumbs/landscapes@2x-oopx3npcygot4af5sj4glj66ndagy61zmv36qh0pts.png"
                alt="link icon"
                width="100px"
                height="100px"
              />
              <br />
              <br />
              <h5 style={{ textAlign: "center" }}>Search Sites</h5>
              {/* <div className="home-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div> */}
            </Button>
          </Link>

          <Link to="images" smooth duration={1000}>
            <Button color="home-link">
              <img
                src="https://www.tern.org.au/wp-content/uploads/2019/10/ecosystem@2x.png"
                alt="link icon"
                width="100px"
                height="100px"
              />
              <br />
              <br />
              <h5 style={{ textAlign: "center" }}>Filter Images</h5>
            </Button>
          </Link>

          <Link to="download" smooth duration={1000}>
            <Button color="home-link">
              <img
                src="https://www.tern.org.au/wp-content/uploads/elementor/thumbs/eco-process@2x-oopx4hs6yj3tyxcwibleedsu0otrqxhxf3ma8tjl26.png"
                alt="link icon"
                width="100px"
                height="100px"
              />
              <br />
              <br />
              <h5 style={{ textAlign: "center" }}> Download</h5>
            </Button>
          </Link>
        </div>

        <Row>
          <SitesList />
          {/* CONTENT */}
          <Col>
            <div className="section-title">TERN Ecosystems Map</div>
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
        <hr />
      </Container>

      <Container id="images">
        <Row style={{ marginBottom: "50px" }}>
          <Col>
            <div className="section-title-2">Image Types</div>
            <p className="home-text-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
              dapibus nisl. Mauris ut ipsum nunc. Proin maximus, justo quis
              maximus ultricies, elit massa interdum lectus, sit amet pulvinar
              nunc nibh et sem vel suscipit libero, vestibulum sodales nisl.
              Cras quis consequat velit.
            </p>
            {/* BANNER */}
            <Container style={{ flexWrap: "wrap" }}>
              <Nav className="image-links-banner center ">
                <Col sm={12} md={3}>
                  <NavItem>
                    <NavLink
                      tag={RRNavLink}
                      to="/about"
                      style={{ border: "none" }}
                    >
                      <SvgLai className="icon-large svg-icon-phenocam" />
                    </NavLink>
                    <h5>Leaf Area</h5>
                    <NavbarText style={{ textAlign: "center" }}>
                      Morbi vel suscipit libero, vestibulum sodales nisl.
                    </NavbarText>
                    <Button color="learn-more">Learn more</Button>
                  </NavItem>
                </Col>
                <Col sm={12} md={3}>
                  <NavItem>
                    <NavLink
                      tag={RRNavLink}
                      to="/about#panorama"
                      style={{ border: "none" }}
                    >
                      <SvgPanoramic className="icon-large svg-icon-phenocam" />
                    </NavLink>
                    <h5>Panorama</h5>
                    <NavbarText style={{ textAlign: "center" }}>
                      Morbi vel suscipit libero, vestibulum sodales nisl.
                    </NavbarText>
                    <Button to="/about#panorama" color="learn-more">
                      Learn more
                    </Button>
                  </NavItem>
                </Col>
                <Col sm={12} md={3}>
                  <NavItem>
                    <NavLink
                      tag={RRNavLink}
                      to="/about#phenocam"
                      style={{ border: "none" }}
                    >
                      <SvgPhenocam className="icon-large svg-icon-phenocam" />
                    </NavLink>
                    <h5>Phenocam</h5>
                    <NavbarText style={{ textAlign: "center" }}>
                      Morbi vel suscipit libero, vestibulum sodales nisl.
                    </NavbarText>
                    <Button to="/about#phenocam" color="learn-more">
                      Learn more
                    </Button>
                  </NavItem>
                </Col>
                <Col sm={12} md={3}>
                  <NavItem>
                    <NavLink
                      tag={RRNavLink}
                      to="/about"
                      style={{ border: "none" }}
                    >
                      <SvgPhotopoint className="icon-large svg-icon-phenocam" />
                    </NavLink>
                    <h5>Photopoint</h5>
                    <NavbarText style={{ textAlign: "center" }}>
                      Morbi vel suscipit libero, vestibulum sodales nisl.
                    </NavbarText>
                    <Button color="learn-more">Learn more</Button>
                  </NavItem>
                </Col>
              </Nav>
            </Container>
          </Col>
        </Row>

        <Row>
          <Col>
            <p className="home-text-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
              dapibus nisl. Mauris ut ipsum nunc. Proin maximus, justo quis
              maximus ultricies, elit massa interdum lectus, sit amet pulvinar
              nunc nibh et sem vel suscipit libero, vestibulum sodales nisl.
              Cras quis consequat velit.
            </p>
          </Col>
        </Row>
      </Container>

      <Container id="download">
        <div className="section-title-2">Download</div>
        <p className="home-text-highlighted">
          <h4>Lorem Ipsum</h4>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
          dapibus nisl. Mauris ut ipsum nunc. Proin maximus, justo quis maximus
          ultricies, elit massa interdum lectus, sit amet pulvinar nunc nibh et
          sem."
        </p>
        <p className="home-text-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
          dapibus nisl. Mauris ut ipsum nunc. Proin maximus, justo quis maximus
          ultricies, elit massa interdum lectus, sit amet pulvinar nunc nibh et
          sem vel suscipit libero, vestibulum sodales nisl. Cras quis consequat
          velit.
        </p>
      </Container>
      <Link to="top" smooth duration={1000} className="center">
        <Button color="learn-more">Back To Top</Button>
      </Link>
      <hr />
    </div>
  );
};

export default Home;

import React from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Button,
  Container,
  Row,
  Col,
  NavLink,
} from "reactstrap";
import "./Home.scss";
import { faSearch, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as SvgLai } from "../../assets/icons/LAI.svg";
import { ReactComponent as SvgPanoramic } from "../../assets/icons/panoramic.svg";
import { ReactComponent as SvgPhenocam } from "../../assets/icons/phenocam.svg";
import { ReactComponent as SvgPhotopoint } from "../../assets/icons/photopoint.svg";

const About = () => (
  <div style={{ scrollbehaviour: "smooth" }}>
    <div className="home-header">
      <Container>
        {/* SUBHEADER */}
        <div className="home-caption">
          <h2>Bioimages Portal</h2>
          The TERN Australian SuperSite Network is made up of a number of
          representitive ecosystem &quot;SuperSites&quot; located across the country.
          <br />
          <Button
            color="homesearch"
            className="homesearch"
            tag={RRNavLink}
            to="/search"
          >
            <FontAwesomeIcon icon={faSearch} />
            {" "}
            Search Images
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

    <Container className="content-about">
      <Row>
        <Col>
          <div className="home-title">About the TERN Bioimages Portal</div>
          <p className="home-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
            dapibus nisl. Mauris ut ipsum nunc. Proin maximus, justo quis
            maximus ultricies, elit massa interdum lectus, sit amet pulvinar
            nunc nibh et sem. Donec vitae dui pharetra, iaculis nunc at,
            scelerisque purus. Morbi vel suscipit libero, vestibulum sodales
            nisl. Cras quis consequat velit.
          </p>

          <div className="section-title">Sites</div>
          <p className="home-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
            dapibus nisl. Mauris ut ipsum nunc. Proin maximus, justo quis
            maximus ultricies, elit massa interdum lectus, sit amet pulvinar
            nunc nibh et sem. Donec vitae dui pharetra, iaculis nunc at,
            scelerisque purus. Morbi vel suscipit libero, vestibulum sodales
            nisl. Cras quis consequat velit.
          </p>

          <div className="about-site-title" id="alice-mulga">
            <NavLink tag={RRNavLink} to="/search">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              {" "}
              Alice Mulga
            </NavLink>
          </div>
          <p className="home-text">
            <strong>Total Images:</strong>
            {" "}
            1000
            <strong>Image Types: </strong>
            {" "}
            LAI, Phenocam, Photopoint
            {" "}
          </p>
          <p className="home-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
            dapibus nisl. Mauris ut ipsum nunc. Proin maximus, justo quis
            maximus ultricies, elit massa interdum lectus, sit amet pulvinar
            nunc nibh et sem. Donec vitae dui pharetra, iaculis nunc at,
            scelerisque purus. Morbi vel suscipit libero, vestibulum sodales
            nisl. Cras quis consequat velit.
            {" "}
          </p>
          <div className="image-div">
            <img
              className="sample-image"
              src="https://via.placeholder.com/250"
              alt="leaf area index"
            />
            <img
              className="sample-image"
              src="https://via.placeholder.com/250"
              alt="leaf area index"
            />
            <img
              className="sample-image"
              src="https://via.placeholder.com/250"
              alt="leaf area index"
            />
          </div>

          <div className="home-subtitle" id="alice-mulga">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            {" "}
            Boyagin
          </div>
          <p className="home-text">
            <strong>Total Images:</strong>
            {" "}
            1000
            <strong>Image Types:</strong>
            {" "}
            LAI, Phenocam, Photopoint
          </p>
          <p className="home-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
            dapibus nisl. Mauris ut ipsum nunc. Proin maximus, justo quis
            maximus ultricies, elit massa interdum lectus, sit amet pulvinar
            nunc nibh et sem. Donec vitae dui pharetra, iaculis nunc at,
            scelerisque purus. Morbi vel suscipit libero, vestibulum sodales
            nisl. Cras quis consequat velit.
          </p>
          <div className="image-div">
            <img
              className="sample-image"
              src="https://via.placeholder.com/250"
              alt="leaf area index"
            />
            <img
              className="sample-image"
              src="https://via.placeholder.com/250"
              alt="leaf area index"
            />
          </div>
        </Col>
      </Row>
    </Container>

    <div className="about-banner" />

    <Container>
      <Row>
        <Col>
          <div className="section-title">Image Types</div>

          <p className="home-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
            dapibus nisl. Mauris ut ipsum nunc. Proin maximus, justo quis
            maximus ultricies, elit massa interdum lectus, sit amet pulvinar
            nunc nibh et sem. Donec vitae dui pharetra, iaculis nunc at,
            scelerisque purus. Morbi vel suscipit libero, vestibulum sodales
            nisl. Cras quis consequat velit.
          </p>
          <div className="home-subtitle-type" id="leaf-index">
            <SvgLai className="icon-small svg-icon-lai" />
            Leaf Area Index
          </div>
          <p className="home-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
            dapibus nisl. Mauris ut ipsum nunc. Proin maximus, justo quis
            maximus ultricies, elit massa interdum lectus, sit amet pulvinar
            nunc nibh et sem. Donec vitae dui pharetra, iaculis nunc at,
            scelerisque purus. Morbi vel suscipit libero, vestibulum sodales
            nisl. Cras quis consequat velit.
          </p>
          <div className="image-div">
            <img
              className="sample-image"
              src="https://via.placeholder.com/250"
              alt="leaf area index"
            />
            <img
              className="sample-image"
              src="https://via.placeholder.com/250"
              alt="leaf area index"
            />
            <img
              className="sample-image"
              src="https://via.placeholder.com/250"
              alt="leaf area index"
            />
          </div>
          <div className="home-subtitle-type">
            <SvgPanoramic className="icon-small svg-icon-lai" />
            Panorama
          </div>
          <p className="home-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
            dapibus nisl. Mauris ut ipsum nunc. Proin maximus, justo quis
            maximus ultricies, elit massa interdum lectus, sit amet pulvinar
            nunc nibh et sem. Donec vitae dui pharetra, iaculis nunc at,
            scelerisque purus. Morbi vel suscipit libero, vestibulum sodales
            nisl. Cras quis consequat velit.
          </p>
          <div className="image-div">
            <img
              className="sample-image"
              src="https://via.placeholder.com/250"
              alt="leaf area index"
            />
            <img
              className="sample-image"
              src="https://via.placeholder.com/250"
              alt="leaf area index"
            />
            <img
              className="sample-image"
              src="https://via.placeholder.com/250"
              alt="leaf area index"
            />
          </div>
          <div className="home-subtitle-type" id="about#phenocam">
            <SvgPhenocam className="icon-small svg-icon-phenocam" />
            Phenocam
          </div>
          <p className="home-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
            dapibus nisl. Mauris ut ipsum nunc. Proin maximus, justo quis
            maximus ultricies, elit massa interdum lectus, sit amet pulvinar
            nunc nibh et sem. Donec vitae dui pharetra, iaculis nunc at,
            scelerisque purus. Morbi vel suscipit libero, vestibulum sodales
            nisl. Cras quis consequat velit.
          </p>
          <div className="image-div">
            <img
              className="sample-image"
              src="https://via.placeholder.com/250"
              alt="leaf area index"
            />
            <img
              className="sample-image"
              src="https://via.placeholder.com/250"
              alt="leaf area index"
            />
            <img
              className="sample-image"
              src="https://via.placeholder.com/250"
              alt="leaf area index"
            />
          </div>
          <div className="home-subtitle-type">
            <SvgPhotopoint className="icon-small svg-icon-lai" />
            Photopoint
          </div>
          <p className="home-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
            dapibus nisl. Mauris ut ipsum nunc. Proin maximus, justo quis
            maximus ultricies, elit massa interdum lectus, sit amet pulvinar
            nunc nibh et sem. Donec vitae dui pharetra, iaculis nunc at,
            scelerisque purus. Morbi vel suscipit libero, vestibulum sodales
            nisl. Cras quis consequat velit.
          </p>
          <div className="image-div">
            <img
              className="sample-image"
              src="https://via.placeholder.com/250"
              alt="leaf area index"
            />
            <img
              className="sample-image"
              src="https://via.placeholder.com/250"
              alt="leaf area index"
            />
            <img
              className="sample-image"
              src="https://via.placeholder.com/250"
              alt="leaf area index"
            />
          </div>
        </Col>
      </Row>
    </Container>

    <hr />
  </div>
);

export default About;

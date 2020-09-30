import React from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import "./Home.scss";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Help = () => (
  <div>
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
          <div className="home-title">
            Help with the TERN Bioimages Portal
          </div>

          <div className="section-title">Glossary of Terms</div>
          <div className="home-subtitle">Plot</div>
          <p className="home-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
            dapibus nisl. Mauris ut ipsum nunc. Proin maximus, justo quis
            maximus ultricies, elit massa interdum lectus, sit amet pulvinar
            nunc nibh et sem. Donec vitae dui pharetra, iaculis nunc at,
            scelerisque purus. Morbi vel suscipit libero, vestibulum sodales
            nisl. Cras quis consequat velit.
          </p>
          <div className="home-subtitle">Site Visit Id</div>
          <p className="home-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
            dapibus nisl. Mauris ut ipsum nunc. Proin maximus, justo quis
            maximus ultricies, elit massa interdum lectus, sit amet pulvinar
            nunc nibh et sem. Donec vitae dui pharetra, iaculis nunc at,
            scelerisque purus. Morbi vel suscipit libero, vestibulum sodales
            nisl. Cras quis consequat velit.
          </p>
          <div className="home-subtitle">Auxillary Image</div>
          <p className="home-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
            dapibus nisl. Mauris ut ipsum nunc. Proin maximus, justo quis
            maximus ultricies, elit massa interdum lectus, sit amet pulvinar
            nunc nibh et sem. Donec vitae dui pharetra, iaculis nunc at,
            scelerisque purus. Morbi vel suscipit libero, vestibulum sodales
            nisl. Cras quis consequat velit.
          </p>
          <div className="home-subtitle">Overstory</div>
          <p className="home-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
            dapibus nisl. Mauris ut ipsum nunc. Proin maximus, justo quis
            maximus ultricies, elit massa interdum lectus, sit amet pulvinar
            nunc nibh et sem. Donec vitae dui pharetra, iaculis nunc at,
            scelerisque purus. Morbi vel suscipit libero, vestibulum sodales
            nisl. Cras quis consequat velit.
          </p>
          <hr />
          <div className="section-title">How to use the Bioimages Portal</div>
          <div className="home-subtitle">Freet Text Search</div>
          <p className="home-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
            dapibus nisl. Mauris ut ipsum nunc. Proin maximus, justo quis
            maximus ultricies, elit massa interdum lectus, sit amet pulvinar
            nunc nibh et sem. Donec vitae dui pharetra, iaculis nunc at,
            scelerisque purus. Morbi vel suscipit libero, vestibulum sodales
            nisl. Cras quis consequat velit.
          </p>
          <div className="home-subtitle">Filter Search</div>
          <p className="home-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
            dapibus nisl. Mauris ut ipsum nunc. Proin maximus, justo quis
            maximus ultricies, elit massa interdum lectus, sit amet pulvinar
            nunc nibh et sem. Donec vitae dui pharetra, iaculis nunc at,
            scelerisque purus. Morbi vel suscipit libero, vestibulum sodales
            nisl. Cras quis consequat velit.
          </p>
          <div className="home-subtitle">Map Search</div>
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
    <hr />
  </div>
);

export default Help;

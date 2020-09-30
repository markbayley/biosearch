import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Home.scss";
import Site from "./Site";
import Type from "./Type";
import SubHeader from "./SubHeader";

const About = () => {
  return (
    <div style={{ scrollbehaviour: "smooth" }}>
      <SubHeader />
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
            <Site name=" Alice Mulga" id="alice-mulga" />
            <Site name=" Boyagin Wandoo Woodland" id="boyagin" />
            <Site name=" Cape Tribulation" id="cape-tribulation" />
            <Site name=" Cumberland Plain" id="cumberland" />
            <Site name=" Calperum Malee" id="calperum" />
            <Site name=" Cowbay" id="cowbay" />
            <Site name=" Gingin Banksia Woodland" id="gingin" />
            <Site name=" Great Western Woodland" id="great-western" />
            <Site name=" Karawatha" id="karawatha" />
          </Col>
        </Row>
      </Container>
      {/* <div className="about-banner"></div> */}
      {/* ABOUT -IMAGE TYPES */}
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
            <Type name="Leaf Area Index" id="lai" />
            <Type name="Panorama" id="panoramic" />
            <Type name="Phenocam" id="phenocam" />
            <Type name="Photopoint" id="photopoint" />
          </Col>
        </Row>
      </Container>
      <hr />
    </div>
  );
}

export default About;

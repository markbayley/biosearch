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
import { faSearch, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as SvgLai } from "../../assets/icons/LAI.svg";
import { ReactComponent as SvgPanoramic } from "../../assets/icons/panoramic.svg";
import { ReactComponent as SvgPhenocam } from "../../assets/icons/phenocam.svg";
import { ReactComponent as SvgPhotopoint } from "../../assets/icons/photopoint.svg";
import TimeLine from "./TimeLine";

const About = (props) => {
  return (
    <div style={{ scrollbehaviour: "smooth" }}>
      <div className="home-header">
        <Container>
          {/* SUBHEADER */}
          <div className="home-caption">
            <h2>Bioimages Portal</h2>
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
            <div
              style={{
                backgroundColor: "#eeeeee",
                margin: "15px",
                borderTop: "5px solid #F5A26C",
              }}
            >
              <div className="about-site-title" id="alice-mulga">
                <NavLink tag={RRNavLink} to="/search">
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Alice Mulga
                </NavLink>
              </div>
              <p className="home-text-title">
                Total Images:
                <a href=""> 1200 </a> Image Types:
                <a href="">
                  {" "}
                  Leaf Area(279), Panorama(200), Phenocam(565), Photopoint(156)
                </a>
              </p>
              <p className="home-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                id dapibus nisl. Mauris ut ipsum nunc. Proin maximus, justo quis
                maximus ultricies, elit massa interdum lectus, sit amet pulvinar
                nunc nibh et sem.{" "}
              </p>
              <p className="home-text-title">
                Data Distribution: All | <a>Leaf Area Index</a> | Panorama |
                Phenocam | Photopoint |
              </p>

              <TimeLine />
              <NavLink
                tag={RRNavLink}
                to="/search#alice-mulga"
                className="site-search-link"
              >
                <em>
                  <FontAwesomeIcon icon={faSearch} /> Search Alice Mulga{" "}
                </em>
              </NavLink>
              <div className="image-div"></div>
            </div>

            <div
              style={{
                backgroundColor: "#eee",
                margin: "15px",
                borderTop: "5px solid #F5A26C",
              }}
            >
              <div className="about-site-title" id="alice-mulga">
                <NavLink tag={RRNavLink} to="/search">
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Boyagin Wandoo
                  Woodland
                </NavLink>
              </div>
              <p className="home-text-title">
                <strong>Total Images:</strong>
                <a href=""> 1000 </a> <strong> Image Types: </strong>
                <a href=""> Leaf Area, </a>
                <a href=""> Panorama </a>
              </p>
              <p className="home-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                id dapibus nisl. Mauris ut ipsum nunc. Proin maximus, justo quis
                maximus ultricies, elit massa interdum lectus, sit amet pulvinar
                nunc nibh et sem. Donec vitae dui pharetra, iaculis nunc at,
                scelerisque purus. Morbi vel suscipit libero, vestibulum sodales
                nisl. Cras quis consequat velit.{" "}
              </p>
              <p className="home-text-title">
                Data Distribution: All | <a>Leaf Area Index</a> | Panorama |
                Phenocam | Photopoint |
              </p>

              <TimeLine />
              <NavLink
                tag={RRNavLink}
                to="/search#alice-mulga"
                className="site-search-link"
              >
                <em>
                  <FontAwesomeIcon icon={faSearch} /> Search Boyagin Woodlands{" "}
                </em>
              </NavLink>
              <div className="image-div"></div>
            </div>

            <div
              style={{
                backgroundColor: "#eee",
                margin: "15px",
                borderTop: "5px solid #F5A26C",
              }}
            >
              <div className="about-site-title" id="alice-mulga">
                <NavLink tag={RRNavLink} to="/search">
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Cape Tribulation
                </NavLink>
              </div>
              <p className="home-text-title">
                <strong>Total Images:</strong>
                <a href=""> 1000 </a> <strong> Image Types: </strong>
                <a href=""> Leaf Area </a>
                <a href=""> Panorama </a>
              </p>
              <p className="home-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                id dapibus nisl. Mauris ut ipsum nunc. Proin maximus, justo quis
                maximus ultricies, elit massa interdum lectus, sit amet pulvinar
                nunc nibh et sem. Donec vitae dui pharetra, iaculis nunc at,
                scelerisque purus. Morbi vel suscipit libero, vestibulum sodales
                nisl. Cras quis consequat velit.{" "}
              </p>
              <p className="home-text-title">
                Data Distribution: All | <a>Leaf Area Index</a> | Panorama |
                Phenocam | Photopoint |
              </p>

              <TimeLine />
              <NavLink
                tag={RRNavLink}
                to="/search#alice-mulga"
                className="site-search-link"
              >
                <em>
                  <FontAwesomeIcon icon={faSearch} /> Search Cape Tribulation{" "}
                </em>
              </NavLink>
              <div className="image-div"></div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="about-banner"></div>

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

            <div
              style={{
                backgroundColor: "#eee",
                margin: "15px",
                borderTop: "5px solid #6EB3A6",
              }}
            >
              <div className="home-subtitle-type" id="leaf-index">
                <SvgLai className="icon-small svg-icon-lai" />
                Leaf Area Index
              </div>
              <p className="home-text-title">
                <strong>Total Images:</strong>
                <a href=""> 1376 </a> <strong> Sites: </strong>
                <a href=""> Alice Mulga(876), </a>
                <a href=""> Boyagin Wandoo Woodlands(345), </a>
                <a href=""> Cape Tribulation(155) </a>
              </p>
              <p className="home-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                id dapibus nisl. Mauris ut ipsum nunc. Proin maximus, justo quis
                maximus ultricies, elit massa interdum lectus, sit amet pulvinar
                nunc nibh et sem.
              </p>
              <p className="home-text-title">
                Data Distribution: All | <a>Alice Mulga</a> | Boyagin Wandoo
                Woodlands | Cape Tribulation |
              </p>
              <TimeLine />
              <NavLink
                tag={RRNavLink}
                to="/search#leaf-area"
                className="site-search-link"
              >
                <em>
                  <FontAwesomeIcon icon={faSearch} /> Search Leaf Area Index{" "}
                </em>
              </NavLink>
              <div className="image-div">
                {/* <img
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
                /> */}
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#eee",
                margin: "15px",
                borderTop: "5px solid #6EB3A6",
              }}
            >
              <div className="home-subtitle-type" id="panorama">
                <SvgPanoramic className="icon-small svg-icon-panorama" />
                Panorama
              </div>
              <p className="home-text-title">
                <strong>Total Images:</strong>
                <a href=""> 1376 </a> <strong> Sites: </strong>
                <a href=""> Alice Mulga(876), </a>
                <a href=""> Boyagin Wandoo Woodlands(345), </a>
                <a href=""> Cape Tribulation(155) </a>
              </p>
              <p className="home-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                id dapibus nisl. Mauris ut ipsum nunc. Proin maximus, justo quis
                maximus ultricies, elit massa interdum lectus, sit amet pulvinar
                nunc nibh et sem.
              </p>
              <p className="home-text-title">
                Data Distribution: All | <a>Alice Mulga</a> | Boyagin Wandoo
                Woodlands | Cape Tribulation |
              </p>
              <TimeLine />
              <NavLink
                tag={RRNavLink}
                to="/search#panorama"
                className="site-search-link"
              >
                <em>
                  <FontAwesomeIcon icon={faSearch} /> Search Panorama{" "}
                </em>
              </NavLink>
              <div className="image-div">
                {/* <img
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
                /> */}
              </div>
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
};

export default About;

import React from "react";
import { Jumbotron, Button, Container, Row, Col } from "reactstrap";
import "./HomeHeader.scss";
import { faSearch, faGlobeAsia } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeHeader = (props) => {
  return (
    <div>
      <Jumbotron className="home-header">
        <Container>
          <div className="home-title">
            Delivering open access to Australia's terrestrial ecosystem data
          </div>
          <div className="home-subtitle">
            The TERN Australian SuperSite Network is made up of a number of
            "SuperSites" located across the country, <br />
            each representative of a different ecosystem type.
          </div>

          <Button color="home-search" className="home-search">
            <FontAwesomeIcon icon={faSearch} /> Search
          </Button>
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col style={{ border: "1px solid grey", height: "500px" }}>

            Map
          </Col>
         
        
        </Row>
        <Button color="map-search" className="map-search">
            <FontAwesomeIcon icon={faGlobeAsia} /> Map Search
          </Button>
      </Container>
    </div>
  );
};

export default HomeHeader;

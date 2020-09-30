import React from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import { Button, Container } from "reactstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SubHeader = () => {
  return (
    <div className="home-header">
      <Container>
        {/* SUBHEADER */}
        <div className="home-caption">
          <h2>Bioimages Portal</h2>
          The TERN Australian SuperSite Network is made up of a number of
          representitive ecosystem SuperSites located across the country.
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
      </Container>
    </div>
  );
}

export default SubHeader;

import React from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import { NavLink } from "reactstrap";
import "./Home.scss";
import { faSearch, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TimeLine from "./TimeLine";

const Site = ({name, id}) => {
  return (
    <div
      style={{
        backgroundColor: "#eeeeee",
        margin: "15px",
        borderTop: "5px solid #F5A26C",
      }}
    >
      <div className="about-site-title" id={id}>
        <NavLink tag={RRNavLink} to="/search">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          {name}
        </NavLink>
      </div>
      <p className="home-text-title">
        <strong>Total Images: </strong>
        <a href="">1200</a>
        <strong>Image Types: </strong>
        <a href="">
          {" "}
          Leaf Area(279), Panorama(200), Phenocam(565), Photopoint(156)
        </a>
      </p>
      <p className="home-text-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
        dapibus nisl. Mauris ut ipsum nunc. Proin maximus, justo quis maximus
        ultricies, elit massa interdum lectus, sit amet pulvinar nunc nibh et
        sem.{" "}
      </p>
      <div style={{ paddingBottom: "50px" }}>
        <p className="home-text-title">
          <strong>Data Distribution:</strong>
          <a> Leaf Area Index</a>| Panorama | Phenocam | Photopoint | All
        </p>

        <TimeLine />
      </div>
      <NavLink tag={RRNavLink} to="/search#{id}" className="site-search-link">
        <em>
          <FontAwesomeIcon icon={faSearch} />
          Search {name}{" "}
        </em>
      </NavLink>
    </div>
  );
};

export default Site;

import React from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import { NavLink } from "reactstrap";
import "./Home.scss";
import { Link } from "react-scroll";
import { faSearch, faImages } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { ReactComponent as SvgLai } from "../../assets/icons/LAI.svg";
// import { ReactComponent as SvgPanoramic } from "../../assets/icons/panoramic.svg";
// import { ReactComponent as SvgPhenocam } from "../../assets/icons/phenocam.svg";
// import { ReactComponent as SvgPhotopoint } from "../../assets/icons/photopoint.svg";
import TimeLine from "./TimeLine";

function Type({ name, id }) {
  return (
    <div className="item-div-image">
      <div className="home-subtitle-type" id={id}>
        {/* <SvgLai className="icon-small svg-icon-lai" /> */}
        <NavLink tag={RRNavLink} to="/search" className="nav-link-type">
          <FontAwesomeIcon icon={faImages} /> {name}
        </NavLink>
      </div>
      <p className="home-text-title">
        <strong>Total Images:</strong>
        <a href=""> 1376 </a>
        <br />
        <strong> Sites: </strong>
        <Link> Alice Mulga(876), </Link>
        <a href=""> Boyagin Wandoo Woodlands(345), </a>
        <a href=""> Cape Tribulation(155) </a>
        Cumberland Plain, Calperum Mallee, Cowbay, Gingin Banksia Woodland,
        Great Western Woodland, Karawatha, Litchfield Savanna, Mitchel Grass
        Rangeland, Robson Creek, Samford, Tumbarumba, Wombat Stringybark
        Eucalypt, Whroo Victorian Dry Eucalypt
      </p>
      <p className="home-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
        dapibus nisl. Mauris ut ipsum nunc. Proin maximus, justo quis maximus
        ultricies, elit massa interdum lectus, sit amet pulvinar nunc nibh et
        sem.
      </p>
      <div style={{ paddingBottom: "50px" }}>
        <p className="home-text-title">
          <strong>Data Distribution: </strong>
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
}

export default Type;

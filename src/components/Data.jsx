import React from "react";

import MainMenu from './MainMenu';
import BioimagesMenu from './BioimagesMenu';

import TERNDataDropdown from './TERNDataDropdown';
import CommunityDropdown from './CommunityDropdown';
import CoESRADropdown from './CoESRADropdown';
import DataVisualiserDropdown  from './DataVisualiserDropdown';
import BioMenu from './BioMenu';

import BioimagesBanner from './BioimagesBanner';
import MainBanner from './MainBanner';
import SignIn from './SignIn';
import MapBox from './MapBox';
import MainFooter from './MainFooter';
import Api from './Api';

import NavBar from './NavBar';
import SearchBar from './SearchBar';
import BioimagesSubFooter from './BioimagesSubFooter'

import MapSearch from './MapSearch';
import State from './State';

import { Container, Col, Row, Button, InputGroup, FormControl, Jumbotron, Form } from "react-bootstrap";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Data() {
  return (
    <Router>
  
    
      <div>
     
        <div class="above-header">
          <div class="container">
        
       
            <div class="above-header-section-wrap d-flex">
              <Row  style={{marginRight: "10%", paddingTop: ".5%"}}>
                <Col>   <TERNDataDropdown /></Col>
           
           <Col> <DataVisualiserDropdown /></Col>
           <Col style={{marginLeft: "40px"}}> <CoESRADropdown /></Col>
            <Col><CommunityDropdown /></Col>
            </Row>
              <div class="above-header-section above-header-section-1">
                <div class="user-select">
                  <Link to="/"> <img src="img/logo-mini-all.png" alt="" /> </Link>
                </div>
              </div>
                
              <div class="above-header-section above-header-section-2">
              
                 <div id="data"> <Link to="/data" style={{color: "#fff", fontSize: "16px"}}><p class="center">Data</p></Link></div>
            
              </div>

            </div>
          </div>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/data">
            <DataPortal />
          </Route>

          <Route path="/">
            <Home />
          </Route>

       
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>

      <NavBar />
      <MainBanner />
      <SignIn />
      <MainFooter />
      <BioimagesSubFooter />



    </div>
  );
}

function DataPortal() {
  return (
    <div>
         <NavBar />
         <MapSearch />
   
   
    

   
    </div>
  );
}



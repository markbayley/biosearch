import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
  useLocation,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { TopBar, Footer, AppHeader, getTernMenu } from "tern-react";

import { CONFIG } from "./config";
import { checkLoginStatusStartAction } from "./store/reducer";
import BioImagesAppHeader from "./components/headers/BioImagesAppHeader";
import BioImagesEngine from "./components/BioImagesEngine";
import Home from "./components/homepage/Home";
import { Container } from "reactstrap";

const fluidpages = ["/search"];

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkLoginStatusStartAction());
  });

  return (
    <Switch>
      <AppContainer>
        <TopBar menuConfig={getTernMenu(CONFIG.MENU)} />
        <AppHeader fluid>
          <BioImagesAppHeader />
        </AppHeader>

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/search">
          <BioImagesEngine />
        </Route>

        <Footer about={getTernMenu(CONFIG.MENU).resources} />
      </AppContainer>
    </Switch>
  );
}

export default App;

function AppContainer({ children }) {
  const location = useLocation();
  console.log("location", location);
  return <Container style={{border: "1px solid green"}} fluid={fluidpages.includes(location.pathname)}>{children}</Container>;
}

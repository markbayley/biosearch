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
import { Container } from "reactstrap";
import { CONFIG } from "./config";
import { checkLoginStatusStartAction } from "./store/reducer";
import BioImagesAppHeader from "./components/headers/BioImagesAppHeader";
import BioImagesEngine from "./components/BioImagesEngine";
import Home from "./components/homepage/Home";
import About from "./components/homepage/About";
import Help from "./components/homepage/Help";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkLoginStatusStartAction());
  });

  return (
    <Router>
      <TopBar menuConfig={getTernMenu(CONFIG.MENU)} />
      <AppHeader fluid>
        <BioImagesAppHeader />
      </AppHeader>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/search">
          <BioImagesEngine />
        </Route>
        <Route path="/help">
          <Help />
        </Route>
      </Switch>
      <Footer about={getTernMenu(CONFIG.MENU).resources} />
    </Router>
  );
}

export default App;


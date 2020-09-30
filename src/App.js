import React, { useEffect } from "react";
import {
  Route,
  Switch,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { TopBar, Footer, AppHeader, getTernMenu } from "tern-react";
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
    <>
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
    </>
  );
}

export default App;

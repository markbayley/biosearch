import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TopBar, Footer, AppHeader, getTernMenu } from "tern-react";

import { CONFIG } from "./config";
import { checkLoginStatusStartAction } from "./store/reducer";
import BioImagesAppHeader from "./components/headers/BioImagesAppHeader";
import BioImagesEngine from "./components/BioImagesEngine";
import Home from "./components/homepage/Home";

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
        <Route path="/search">
          <BioImagesEngine />
        </Route>
      </Switch>
      <Footer about={getTernMenu(CONFIG.MENU).resources} />
    </Router>
  );
}

export default App;

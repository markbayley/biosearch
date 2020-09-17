import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TopBar, Footer, AppHeader, getTernMenu } from "tern-react";

import { CONFIG } from "./config";
import { checkLoginStatusStartAction } from "./store/reducer";
import BioImagesAppHeader from "./components/headers/BioImagesAppHeader";
import BioImagesEngine from "./components/BioImagesEngine";

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
      <BioImagesEngine />
      <Footer about={getTernMenu(CONFIG.MENU).resources} />
    </Router>
  );
}

export default App;

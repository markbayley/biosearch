import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { TopBar, Footer, AppHeader, getTernMenu } from "tern-react";

import { CONFIG } from "./config";
import BioImagesAppHeader from "./components/headers/BioImagesAppHeader";
import BioImagesEngine from "./components/BioImagesEngine";

function App() {
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

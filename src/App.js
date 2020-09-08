import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { TopBar, Footer, AppHeader } from "tern-react";

import BioImagesAppHeader from "./components/headers/BioImagesAppHeader";
import BioImagesEngine from "./components/BioImagesEngine";

function App() {
  return (
    <Router>
      <TopBar />
      <AppHeader fluid>
        <BioImagesAppHeader />
      </AppHeader>
      <BioImagesEngine />
      <Footer />
    </Router>
  );
}

export default App;

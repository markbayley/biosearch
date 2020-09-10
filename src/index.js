import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import axios from "axios";

// include all our global standard styles.
// should probably be the first css to be included, so that later css can override
import "tern-react/dist/index.css";

import { store } from "./store/configureStore";
import App from "./App";

import { CONFIG } from "./config";

axios({
  method: "GET",
  url: "/config/config.json",
}).then((response) => {
  Object.assign(CONFIG, response.data);
  ReactDOM.render(
    // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
    // </React.StrictMode>
    document.getElementById("root"),
  );
});

/** TODO: remove this function after some time */
(function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then(
      (regs) => regs.forEach((reg) => reg.unregister()),
    );
  }
}());

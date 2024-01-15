import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";
import { Provider } from "react-redux";

import "./index.css";
import { store } from "./store/index";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

import React from "react";
import { createRoot } from "react-dom/client"; // Mengimpor createRoot dari "react-dom/client"
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import axios from "axios";
import store from "./services/redux/store.js";

axios.defaults.withCredentials = true;

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

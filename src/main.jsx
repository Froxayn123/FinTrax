import React from "react";
import { createRoot } from "react-dom/client"; // Mengimpor createRoot dari "react-dom/client"
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import axios from "axios";

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

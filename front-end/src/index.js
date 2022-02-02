import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import LoadingContextProvider from "./context/LoadingContextProvider.js";
import { BrowserRouter } from "react-router-dom";
import "./fonts/Abel-Regular.ttf";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <LoadingContextProvider>
      <App />
    </LoadingContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

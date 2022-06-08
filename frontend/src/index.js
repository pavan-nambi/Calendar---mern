import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FronteggProvider } from "@frontegg/react";

const contextOptions = {
  baseUrl: "https://app-2annv5vbbpfb.frontegg.com",
  clientId:
    "464003919671-a2aukfoovtj228c99ojef1g1083i9mdp.apps.googleusercontent.com-8a8a-47d7-9d74-b425f3ea9a28",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>
    <App />
  </FronteggProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

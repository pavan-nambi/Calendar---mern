import React from "react";
// import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { FronteggProvider } from "@frontegg/react";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.render(
  <GoogleOAuthProvider clientId="464003919671-a2aukfoovtj228c99ojef1g1083i9mdp.apps.googleusercontent.com">
    <App />,
  </GoogleOAuthProvider>,

  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

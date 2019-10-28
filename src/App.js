import React from "react";
import "./App.css";
import Router from "./routes";
import Logo from "./assets/logo.svg";

const App = () => (
  <div className="container">
    <img src={Logo} alt="Logo" />
    <div className="content">
      <Router />
    </div>
  </div>
);

export default App;

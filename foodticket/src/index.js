import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import MainMenu from "./pages/MainMenu/MainMenu.js";
import SignUp from "./pages/SignUp/SignUp";
import Customer from "./pages/Customer"


ReactDOM.render(
  <>
    <Router>
      <Switch>
        <Route path="/" exact component={MainMenu} />
        <Route path="/signUp" exact component={SignUp} />
        <Route path="/" exact component={Customer} />
      </Switch>
    </Router>
  </>,
  document.getElementById("root")
);

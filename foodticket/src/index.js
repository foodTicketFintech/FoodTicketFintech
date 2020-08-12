import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import MainMenu from "./pages/MainMenu/MainMenu.js";
import SignUp from "./pages/SignUp/SignUp";

ReactDOM.render(
  <>
    <Router>
      <Switch>
        <Route path="/" exact component={MainMenu} />
        <Route path="/signUp" exact component={SignUp} />
      </Switch>
    </Router>
  </>,
  document.getElementById("root")
);

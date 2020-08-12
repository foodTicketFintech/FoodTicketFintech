import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import MainMenu from "./pages/MainMenu/MainMenu.js";

ReactDOM.render(
  <>
    <Router>
      <Switch>
        <Route path="/" exact component={MainMenu} />
      </Switch>
    </Router>
  </>,
  document.getElementById("root")
);

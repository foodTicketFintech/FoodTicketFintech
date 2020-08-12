import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import MainMenu from "./pages/MainMenu/MainMenu.js";
import SignUp from "./pages/SignUp/SignUp";

import testMain from "./pages/MainMenu/testMain.js"

ReactDOM.render(
  <>
    <Router>
      <Switch>
<<<<<<< HEAD
        <Route path="/" exact component={testMain} />
=======
        <Route path="/" exact component={MainMenu} />
        <Route path="/signUp" exact component={SignUp} />
        <Route path="/" exact component={Customer} />
>>>>>>> 50623866a83e54c1cc88bd2e2b0a82734d4f9a29
      </Switch>
    </Router>
  </>,
  document.getElementById("root")
);

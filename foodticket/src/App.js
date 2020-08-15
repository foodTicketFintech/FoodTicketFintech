import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ScrollToTopRoute from "./ScrollToTopRoute";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";

import Customer from "./pages/Customer.js"
import MainMenu from "./pages/MainMenu/MainMenu.js";
/*------ Pages-----*/

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.hideLoader();
  }
  render() {
    return (
      <Router>
        <Switch>
          <ScrollToTopRoute exact={true} path={"/"} component={Home} />
          <ScrollToTopRoute exact={true} path={"/SignUp"} component={SignUp} />
          <ScrollToTopRoute exact={true} path={"/Login"} component={Login} />
          <ScrollToTopRoute path="/Main" exact component={MainMenu} />
          <ScrollToTopRoute path="/signUp" exact component={SignUp} />
          <ScrollToTopRoute path="/Customer" exact component={Customer} />
 
          {/* <ScrollToTopRoute path="/Digital-marketing" component={DigitalMarketing} />
          <ScrollToTopRoute path="/Payment-processing" component={PaymentProcessing} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
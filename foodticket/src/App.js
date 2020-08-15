import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ScrollToTopRoute from "./ScrollToTopRoute";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";

import Customer from "./pages/Customer.js";
import MainMenu from "./pages/MainMenu/MainMenu.js";
import StoreReg from "./pages/StoreReg/StoreReg.js";
/*------ Pages-----*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      onLogin: this.onLogin,
      onLogout: this.onLogout,
    };
  }
  componentDidMount() {
    this.props.hideLoader();
  }

  onLogin = () => {
    this.setState({
      logged: true,
    });
  };

  inLogout = () => {
    this.setState({
      logged: false,
    });

    // TODO : sessionstorage내용 없애야함
  };

  render() {
    return (
      <Router>
        <Switch>
          <ScrollToTopRoute exact={true} path={"/"} component={Home} />
          <ScrollToTopRoute exact={true} path={"/SignUp"} component={SignUp} />
          <ScrollToTopRoute exact={true} path={"/Login"} component={Login} state={this.state} />
          <ScrollToTopRoute path="/Main" exact component={MainMenu} />
          <ScrollToTopRoute path="/Customer" exact component={Customer} />
          <ScrollToTopRoute pathh="/StoreReg" exact component={StoreReg} />

          {/* <ScrollToTopRoute path="/Digital-marketing" component={DigitalMarketing} />
          <ScrollToTopRoute path="/Payment-processing" component={PaymentProcessing} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;

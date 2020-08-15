import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ScrollToTopRoute from "./ScrollToTopRoute";
import homeHosting from "./pages/Home/HomeHosting";
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
    };
  }
  componentDidMount() {
    this.props.hideLoader();
  }

  onLogin = () => {
    this.state.setState({
      logged: true,
    });
  };

  onLogout = () => {
    this.state.setState({
      logged: false,
    });
  };

  render() {
    return (
      <Router a={this.state}>
        <Switch a={this.state}>
          // FIXME : 삼항연산자로 true - path 정상경로 false '로그인이 필요한 서비스입니다.' 로이동
          <ScrollToTopRoute exact={true} path={"/"} component={homeHosting} />
          <ScrollToTopRoute
            a={this.state}
            exact={true}
            path={"/SignUp"}
            component={this.state.logged ? homeHosting : SignUp}
          />
          <ScrollToTopRoute exact={true} path={"/Login"} component={Login} />
          <ScrollToTopRoute path="/Main" exact component={MainMenu} />
          <ScrollToTopRoute path="/Customer" exact component={Customer} />
          <ScrollToTopRoute pathh="/StoreReg" exact component={StoreReg} />
          {/* <ScrollToTopRoute component={NotFound} /> */}
          {/* <ScrollToTopRoute path="/Digital-marketing" component={DigitalMarketing} />
          <ScrollToTopRoute path="/Payment-processing" component={PaymentProcessing} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;

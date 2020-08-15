import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ScrollToTopRoute from "./ScrollToTopRoute";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";

<<<<<<< HEAD
import Customer from "./pages/Customer.js"
import MainMenu from "./pages/MainMenu/MainMenu.js";
import StoreReg from "./pages/StoreReg/StoreReg.js"
=======
import Customer from "./pages/Customer.js";
import MainMenu from "./pages/MainMenu/MainMenu.js";
import StoreReg from "./pages/StoreReg/StoreReg.js";
>>>>>>> ec5b8c4d2611e70c34e24d1b7107be5f003f0d99
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
<<<<<<< HEAD
          <ScrollToTopRoute path="/signUp" exact component={SignUp} />
          <ScrollToTopRoute path="/Customer" exact component={Customer} />
          <ScrollToTopRoute pathh="/StoreReg" exact component={StoreReg}/>
 
=======
          <ScrollToTopRoute path="/Customer" exact component={Customer} />
          <ScrollToTopRoute pathh="/StoreReg" exact component={StoreReg} />
          {/* <ScrollToTopRoute component={NotFound} /> */}

>>>>>>> ec5b8c4d2611e70c34e24d1b7107be5f003f0d99
          {/* <ScrollToTopRoute path="/Digital-marketing" component={DigitalMarketing} />
          <ScrollToTopRoute path="/Payment-processing" component={PaymentProcessing} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTopRoute from "./ScrollToTopRoute";
import homeHosting from "./pages/Home/HomeHosting";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";

import Customer from "./pages/Customer.js";
import MainMenu from "./pages/MainMenu/MainMenu.js";
import StoreReg from "./pages/StoreReg/StoreReg.js";
import RestaurantInfo from "./Components/info/RestaurantInfo.js";
import MapMarker from "./Components/map/MapMarker.js";
import Order from "./pages/Order/Order";
import NotFound from "./pages/404";
import Restaurant from "./pages/Restaurant/Restaurant.js";

import Pay from "./Components/Pay/pay.js";
import Approval from "./Components/Pay/approval";
/*------ Pages-----*/

// TODO : axios호출 시 jwt 같이 보내야 함. // server는 token 검증하는 로직 필요
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payAmount : 0
    }
    window.sessionStorage.setItem("logged", "false");
    if (window.sessionStorage.getItem("accessToken")) {
      // TODO : accessToken보고 로그인 만료시간 끝나지 않았으면 TRUE
      window.sessionStorage.setItem("logged", "true");
    }
  }

  componentDidMount() {
    this.props.hideLoader();
  }
  render() {
    const aa = "d";
    return (
      <Router>
        <Switch>
          <ScrollToTopRoute exact={true} path={"/"} component={homeHosting} />
          <ScrollToTopRoute exact={true} path={"/signUp"} component={SignUp} />
          <ScrollToTopRoute data={"a"} exact={true} path={"/login"} component={Login} />
          <ScrollToTopRoute exact={true} path="/Main" exact component={MainMenu} />
          <Route
            path="/Customer"
            render={(props) => <Customer text={{ data: "hi" }} {...props} />}
          />

          <Route
            path="/pay"
            render={(props) => <Pay payAmount={ this.state.payAmount } {...props} />}
          />

          <Route
            path="/Restaurant"
            render={(props) => <Restaurant onChangeState={ 
              function(amount) {
                this.setState({payAmount : amount});
              }.bind(this)
             } {...props} />}
          />
          
          <ScrollToTopRoute exact={true} path="/MapMarker" exact component={MapMarker} />
          <ScrollToTopRoute exact={true} path="/Restaurant" exact component={Restaurant} />
          <ScrollToTopRoute exact={true} path="/StoreReg" exact component={StoreReg} />
          <ScrollToTopRoute path="/order" component={Order} />
          <ScrollToTopRoute path="/approval" component={Approval} />
          <ScrollToTopRoute component={NotFound} />
          
          {/* <ScrollToTopRoute path="/Digital-marketing" component={DigitalMarketing} />
          <ScrollToTopRoute path="/Payment-processing" component={PaymentProcessing} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;

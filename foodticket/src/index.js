import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SignUp from "./pages/SignUp/SignUp";
import Customer from "./pages/Customer.js"
import MainMenu from "./pages/MainMenu/MainMenu.js";
import StoreReg from "./pages/StoreReg/StoreReg.js"
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import "./assets/themify-icon/themify-icons.css";
import "./assets/simple-line-icon/simple-line-icons.css";
import "./assets/font-awesome/css/all.css";
import "./assets/elagent/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/main.css";
import "./assets/responsive.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "popper.js";


const loader = document.querySelector("#preloader");

// if you want to show the loader when React loads data again
const showLoader = () => loader.classList.remove("loader--hide");

const hideLoader = () => loader.classList.add("loader--hide");

setTimeout(
  () =>
    // the show/hide functions are passed as props
    ReactDOM.render(
      <App hideLoader={hideLoader} showLoader={showLoader} />,
      document.getElementById("root")
    ),
  1000
//>>>>>>> e8d1625593e9bce81460587fad9106fcfe579c7b
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

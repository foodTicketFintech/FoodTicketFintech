import React from "react";
import Reveal from "react-reveal/Reveal/";

const foodBox = (foodName, restaurantSelect) => {
  //<React.Fragment>
  let i;
  let selectData = new Array();
  for (i = 0; i < foodName.length; i++) {
    if (foodName[i].rname === restaurantSelect) {
      selectData.push(foodName[i].fname);
    }
  }
};

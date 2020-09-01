import React, { Component } from "react";
import axios from "axios";

const resList = []


var  getRes;

class RestaurantInfo {
    constructor() {
        this.res();
        
    }

    res = async () =>{
        var rest
        rest = await axios({
                method: 'GET',
                url: 'http://localhost:4000/restaurant',
                data: {

                }
            });
            this.asdf(rest);
        }
    
        asdf(inputRest) {
            window.localStorage.setItem("resSize", inputRest.data.length);
            for (let i = 0; i < inputRest.data.length; i++) {
                window.localStorage.setItem(`mapId${i + 1}`, inputRest.data[i].id);
                window.localStorage.setItem(`mapName${i + 1}`, inputRest.data[i].name);
                window.localStorage.setItem(`mapPosition_x${i + 1}`, inputRest.data[i].position_x);
                window.localStorage.setItem(`mapPosition_y${i + 1}`, inputRest.data[i].position_y);
                window.localStorage.setItem(`mapRestaurant_address${i + 1}`, inputRest.data[i].restaurant_address);
            }


        }

    }

export default RestaurantInfo;

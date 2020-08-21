import React, { Component } from "react";
import axios from "axios";

// const express = require("express");
// const app = express();
// const cors = require('cors');
// // const corsOptions = {
// //     origin: "http://localhost:3000",
// //     credentials: true, // true로 하면 설정한 내용을 response 헤더 추가
// //   };
// app.use(cors());

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
            console.log("inputRest");
            console.log(inputRest.data.length);
            
            //console.log(this.test.data.length);
            window.localStorage.setItem("resSize", inputRest.data.length);
            for (let i = 0; i < inputRest.data.length; i++) {
                window.localStorage.setItem(`mapId${i + 1}`, inputRest.data[i].id);
                window.localStorage.setItem(`mapName${i + 1}`, inputRest.data[i].name);
                window.localStorage.setItem(`mapPosition_x${i + 1}`, inputRest.data[i].position_x);
                window.localStorage.setItem(`mapPosition_y${i + 1}`, inputRest.data[i].position_y);
                window.localStorage.setItem(`mapRestaurant_address${i + 1}`, inputRest.data[i].restaurant_address);
            }
            console.log("------------------")
            console.log(inputRest.data[0])


        }

        // dbTest = async () => {
        //     const data = await axios.get({
        //         method: "GET",
        //         url: "localhost:4000/restaurant",
        //         data: {
        //             id: this.state.id,
        //             name: this.state.name,
        //             positionX: this.state.positionX,
        //             positionY: this.state.positionY,
        //             address: this.state.address
        //         }
        //     })
        //     console.log("bbbb");
        // }

        // dbTest = async()  =>{
        //     const getRes = await axios.get('https://jsonplaceholder.typicode.com/posts')
        //     .then(Response =>{
        //         console.log(Response)
        //         this.setState({posts: Response.data})
        //     })
        //     .catch(error => {
        //         console.log(error)
        //         this.setState({errorMsg : 'Error retreiving data'})
        //     })
        // } 


    }





export default RestaurantInfo;

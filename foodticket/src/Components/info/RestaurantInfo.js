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

class RestaurantInfo extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            restaurant: [{
                id: '',
                name: '',
                positionX: '',
                positionY: '',
                address: '',
            }]
        };
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

    
    getRes = async()  =>{
       const getRes = await axios({
            method : 'GET',
            url : 'http://localhost:4000/restaurant',
            data : {
                
            }
        }
    )
    console.log(getRes.data)
    return getRes.data;
    };
    
    componentDidMount() {
        if (!this.state.data) {
            this.getRes().then(data => this.setState({data}))
                          .catch(err => { /*...handle the error...*/});
        }
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                <div>
                    list of posts
                    {this.state.id}
                    {
                        // posts.length ?
                        // posts.map(post => <div key={post.id}>{post.name}</div>) :
                        // null
                    }
                </div>
                
            </div>
                
        )
    }
}

export default RestaurantInfo ;
import React, { Component } from "react";
import Axios from "axios";
import qs from 'qs';

const jwt = require("jsonwebtoken");

class Approval extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partner_order_id : '0',
            partner_user_id : '0',
            res_id : 0,
            pg_token : '0',
        }
    }

    componentDidMount() {
        this.setData();
        this.sendAxiosApproval();
    }
    
    setData() {
        this.state.partner_order_id = window.location.search.split("&")[0].split('=')[1];
        this.state.partner_user_id = window.location.search.split("&")[1].split('=')[1];
        this.state.res_id = window.location.search.split("&")[2].split('=')[1];
        this.state.pg_token = window.location.search.split("&")[3].split('=')[1];
        console.log(this.state);
    }
    
    sendAxiosApproval = async() => {
        var _tid = window.localStorage.getItem("tid");

        const data = await Axios.post('https://kapi.kakao.com/v1/payment/approve',qs.stringify({
            cid : "TC0ONETIME",
            tid : _tid,
            partner_order_id :this.state.partner_order_id,
            partner_user_id : this.state.partner_user_id,
            pg_token : this.state.pg_token,

        }),{
            headers : {
                "Authorization" : "KakaoAK 4d47db4d9d5c7e0d6ad4391ad44f83df",
                'Content-Type': 'application/x-www-form-urlencoded'
              },
        }

        );
        console.log(data);
        alert("결제 완료");
        this.sendAxiosAmount(data);
    }

    sendAxiosAmount = async(data) => {
        var accessToken = window.sessionStorage.getItem("accessToken");
        var str = "foodticket";
        var decoded = jwt.verify(accessToken, str);
        var _customer_id = decoded.userId;

        const postBalance = await Axios.post("http://localhost:4000/customer/pay", {
            res_id : this.state.res_id,
            customer_id : _customer_id,
            balance : data.data.amount.total,
        })
        this.props.history.push("/");
    }
    render(){
        return (<div/>);
    }
}

export default Approval;
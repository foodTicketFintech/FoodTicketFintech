import React, { Component } from "react";
import Axios from "axios";

class Approval extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.sendAxios()
    }

    sendAxios = async() = {
        const data = awiat Axios.post('https://kapi.kakao.com/v1/payment/approve',{
            cid : "",
            tid : "결제 준비 api응답에 포함",
            partner_order_id : "파라미터로 넘겨받아야함",
            partner_user_id : "파라미터로 넘겨받아야함",
            pg_token : "pay qs로 넘겨받음",



        })

    }
}
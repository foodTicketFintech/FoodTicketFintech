import React, { Component } from "react";
import Axios from "axios";
import qs from 'qs';

class Approval extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.sendAxios()
    }

    sendAxios = async() => {
        const data = await Axios.post('https://kapi.kakao.com/v1/payment/approve',qs.stringify({
            cid : "TC0ONETIME",
            tid : "결제 준비 api응답에 포함",
            partner_order_id : "파라미터로 넘겨받아야함",
            partner_user_id : "파라미터로 넘겨받아야함",
            pg_token : "pay qs로 넘겨받음",

        }),{
            headers : {
                "Authorization" : "KakaoAK 4d47db4d9d5c7e0d6ad4391ad44f83df",
                'Content-Type': 'application/x-www-form-urlencoded'
              },
        }

        );

    }
}
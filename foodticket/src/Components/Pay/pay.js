import React, {Component} from 'react';
import axios from 'axios';
import qs from 'qs';
class Pay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resId : "0"
        }
    }

    componentDidMount(){
        this.sendAxiosReady();
    }

    sendAxiosReady = async() => {
        var amount = window.localStorage.getItem("amount");
        var _partner_order_id = 'o111'
        var _partner_user_id = 'u222'
        var resId = window.location.search.split('=')[1];

        console.log(this.props);
        var data = await axios.post("https://kapi.kakao.com/v1/payment/ready",qs.stringify({
                cid : 'TC0ONETIME',
                partner_order_id : _partner_order_id,
                partner_user_id : _partner_user_id,
                item_name : 'test',
                quantity : 1,
                total_amount : amount,
                tax_free_amount : 5,
                approval_url : "http://localhost:3000/approval?partner_order_id="+_partner_order_id+'&partner_user_id='+_partner_user_id
                    + '&res_id=' + resId,
                cancel_url : "http://localhost:3000/",
                fail_url : "http://localhost:3000/",
            }),{
                headers : {
                    "Authorization" : "KakaoAK 4d47db4d9d5c7e0d6ad4391ad44f83df",
                    'Content-Type': 'application/x-www-form-urlencoded'
                  },
            }
        );
        
        var rediectUrl = data.data.next_redirect_pc_url;
        window.localStorage.setItem("tid", data.data.tid);
        console.log(this.props, data);
        window.location.href = rediectUrl;
    }

    render() {
        return (
        <div>
            <div id="preloader">
            <div id="ctn-preloader" className="ctn-preloader">
                <div className="animation-preloader">
                <div className="spinner"></div>
                <div className="txt-loading">
                    <span data-text-preloader="F" className="letters-loading">
                    F
                    </span>
                    <span data-text-preloader="O" className="letters-loading">
                    O
                    </span>
                    <span data-text-preloader="O" className="letters-loading">
                    O
                    </span>
                    <span data-text-preloader="D" className="letters-loading">
                    D
                    </span>
                    <span data-text-preloader="T" className="letters-loading">
                    T
                    </span>
                    <span data-text-preloader="I" className="letters-loading">
                    I
                    </span>
                    <span data-text-preloader="C" className="letters-loading">
                    C
                    </span>
                    <span data-text-preloader="K" className="letters-loading">
                    K
                    </span>
                    <span data-text-preloader="E" className="letters-loading">
                    E
                    </span>
                    <span data-text-preloader="T" className="letters-loading">
                    T
                    </span>
                </div>
                <p className="text-center">결제중 입니다.</p>
                </div>
            </div>
            </div>
        </div>
        )
    }
}
export default Pay;
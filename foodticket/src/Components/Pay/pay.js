import React, {Component} from 'react';
import axios from 'axios';
import qs from 'qs';
class Pay extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        this.sendAxios();
    }

    sendAxios = async() => {
        var data = await axios.post("https://kapi.kakao.com/v1/payment/ready",qs.stringify({
                cid : 'TC0ONETIME',
                partner_order_id : '1341',
                partner_user_id : 'test123',
                item_name : 'test',
                quantity : 1,
                total_amount : 10000,
                tax_free_amount : 5,
                approval_url : "http://localhost:3000/pay",
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
        console.log(this.props.history, rediectUrl);
        window.location.href = rediectUrl;
        this.state = data.data;
    }

    render() {
        const data = this.state;
        return (
        <div>
            <a href={data.next_redirect_pc_url}></a>
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
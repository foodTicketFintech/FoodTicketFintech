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
                approval_url : "http://localhost:3000/",
                cancel_url : "http://localhost:3000/",
                fail_url : "http://localhost:3000/",
            }),{
                headers : {
                    "Authorization" : "KakaoAK 4d47db4d9d5c7e0d6ad4391ad44f83df",
                    'Content-Type': 'application/x-www-form-urlencoded'
                  },
            }
            
        );
        console.log(data);
    }

    render() {
        return (
        <div>
            <a>ssss</a>
        </div>
        )
    }
}
export default Pay;
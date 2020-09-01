import React from "react";
import axios from "axios";
const jwt = require("jsonwebtoken");
class CustomerInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name : 'hwi',
            email : 'asdf',
            data : [],
        }
    }

    verifyToken = async (token, str) => {
        var decoded;
        try {
            decoded = jwt.verify(token, str);
            
        } catch (err) {
            alert("올바른 secret키가 아닙니다.")
        }
        let emailValue = await this.setState({email : decoded.id});
        let dbValue = await this.dbTest();
    }
    
    componentDidMount(){
        var accessToken = window.sessionStorage.getItem("accessToken");
        var str = "foodticket";
        if(accessToken != null)
        this.verifyToken(accessToken, str);
    }

    dbTest = async () => {
        const data = await axios.get("http://localhost:4000/api/login/userInfo?email=" + this.state.email);
        this.setState({data : data.data});
    }
    
    render() {
        const {data} = this.state;
        return (
            <section className="service_details_area sec_pad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 pr_70">
                        <div className="job_info">
                            <div className="info_head">
                                <i className="ti-receipt"></i>
                                <h6 className="f_p f_600 f_size_18 t_color3">고객 정보</h6>
                            </div>
                            <div className="info_item">
                                <h6>name :</h6>
                                <p>{this.state.name}</p>
                            </div>
                            <div className="info_item">
                                <h6>email:</h6>
                                <p>{this.state.email}</p>
                            </div>
                            <div className="info_item">
                                <h6>Service Cost:</h6>
                                <p>{this.state.cost}</p>
                            </div>
                            <div className="info_item">
                                <h6>Quality:</h6>
                                <p>High</p>
                            </div>
                           
                        </div>
                    </div>
                    <a href="/customer" onClick={function(e){
                                    e.preventDefault();
                                    this.props.onChangePage();
                                }.bind(this)}>{this.props.data}</a>
                    <table className="table table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th >No </th>
                                <th >가게이름</th>
                                <th >위치</th>
                                <th >보유 식권</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((data, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{ind + 1}</td>
                                        <td>{data.name}</td>
                                        <td>{data.restaurant_address}</td>
                                        <td>{data.balance}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div className="col-lg-7">
                        <div className="details_content">
                            <div className="sec_title">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

export default CustomerInfo;
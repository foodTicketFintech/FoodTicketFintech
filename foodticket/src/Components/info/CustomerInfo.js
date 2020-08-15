import React from "react";
import axios from "axios";

class CustomerInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name : 'hwi',
            email : 'asdf',
            cost : 0,
        }
    }
    componentDidMount(){
        this.dbTest();
    }

    dbTest = async() => {
        const res = await axios.get("http://localhost:4000/api/test");
        console.log(res.data[0].email);
        this.setState({name : 'd', email : res.data[0].email,});
    }

    render() {
        return (
            <section className="service_details_area sec_pad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 pr_70">
                        <div className="job_info">
                            <div className="info_head">
                                <i className="ti-receipt"></i>
                                <h6 className="f_p f_600 f_size_18 t_color3">Unique Elements</h6>
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
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th >id </th>
                                <th >가게이름</th>
                                <th >보유 식권</th>
                                <th >위치</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
            </div>
        </section>
        )
    }
}

export default CustomerInfo;
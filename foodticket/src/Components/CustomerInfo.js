import React from "react";
import axios from "axios";

class CustomerInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            host : 'hwi',
            test : '',
        }
    }
    componentDidMount(){
        this.dbTest();
    }

    dbTest = async() => {
        const res = await axios.get("http://localhost:4000/api/test");
        console.log(res.data);
    }

    render() {
        return (
            <div className="customer">
                <h3>your data <p>{this.state.host} : {this.state.test}</p></h3>

            </div>
        )
    }
}

export default CustomerInfo;
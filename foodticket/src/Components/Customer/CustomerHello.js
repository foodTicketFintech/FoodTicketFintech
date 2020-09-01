import React from "react";
import axios from "axios";

class CustomerHello extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 1,
            email: "123@123.com",
            password: "123",
            name: "gnl",
            birth: "123",
            address: "456",
            position_x: "678",
            position_y: "1237890"
        }
    }
    componentDidMount(){
        this.dbTest();
    }

    dbTest = async() => {
        const res = await axios.get("http://localhost:4000/api/test");
    }

    render() {
        return (
            <div className="hello">
                <h3>안녕하세요 {this.state.name} 님. 반갑습니다.</h3>

            </div>
        )
    }
}

export default CustomerHello;
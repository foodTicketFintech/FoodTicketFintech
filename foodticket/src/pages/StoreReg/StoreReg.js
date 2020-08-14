import React from "react";
import axios from "axios";

class StoreReg extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            storeName: '',
            food1: '',
            food1price: '',
            food2: '',
            food2price: ''
        }
    }
    componentDidMount() {
        this.dbTest();
    }

    dbTest = async () => {
        const res = await axios.get("http://localhost:4000/api/test");
        console.log(res.data);
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
            })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.className] = e.target.value;
        this.setState(nextState);
    }

    addCustomer = () => {
        const url = '/api/customers';
        const formData = new FormData();
        formData.append('storeName', this.state.storeName);
        formData.append('food1', this.state.food1);
        formData.append('food1price', this.state.food1price);
        formData.append('food2', this.state.food2);
        formData.append('food2price', this.state.food2price);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return axios(url, formData, config);
    }

    render() {
        return (
            <div className="customer">
                <div>
                    <div className="wrapper">

                        <div className="wrapper-inline">
                            {/* Header area start */}
                            <header> {/* extra class no-background */}
                                <a className="go-back-link" href="javascript:history.back();"><i className="fa fa-arrow-left" /></a>
                                <h1 className="page-title">매장 등록</h1>
                            </header>
                            {/* Header area end */}
                            {/* Page content start */}
                            <main>
                                <div className="container">
                                    <div className="form-divider" />
                                    <div className="form-divider" />
                                    <div className="form-divider" />
                                    <div className="form-row-group with-icons">

                                        <form onSubmit={this.handleFormSubmit}>
                                            <input type="text" className="storeName" placeholder="매장이름" value={this.state.storeName} onChange={this.handleValueChange} /><br />
                                            
                                        </form>
                                        <form onSubmit={this.handleFormSubmit}>
                                            <input type="text" className="food1" placeholder="음식1" value={this.state.food1} onChange={this.handleValueChange} /><br />
                                        </form>
                                        <form onSubmit={this.handleFormSubmit}>
                                            <input type="text" className="food1price" placeholder="음식1가격" value={this.state.food1price} onChange={this.handleValueChange} /><br />
                                        </form>
                                        <form onSubmit={this.handleFormSubmit}>
                                            <input type="text" className="food2" placeholder="음식2" value={this.state.food2} onChange={this.handleValueChange} /><br />
                                        </form>
                                        <form onSubmit={this.handleFormSubmit}>
                                            <input type="text" className="food2price" placeholder="음식2가격" value={this.state.food2price} onChange={this.handleValueChange} /><br />
                                        </form>
                                    </div>
                                    <div>
                                        <button className="addBuutton">메뉴 추가</button>
                                    </div>
                                    <div className="form-divider" />
                                    <div className="form-row">
                                        <a href="#" className="button circle block orange">등록 완료</a>
                                    </div>
                                    <div className="form-row txt-center mt-15">
                                        Already have an account? <a href="login.html" data-loader="show">Login</a>
                                    </div>
                                </div>
                            </main>
                            {/* Page content end */}
                        </div>
                    </div>
                    {/*Page loader DOM Elements. Requared all pages*/}
                    <div className="sweet-loader">
                        <div className="box">
                            <div className="circle1" />
                            <div className="circle2" />
                            <div className="circle3" />
                        </div>
                    </div>
                    {/* JQuery library file. requared all pages */}
                    {/* Template global script file. requared all pages */}


                </div>
            </div>
        )
    }
}

export default StoreReg;
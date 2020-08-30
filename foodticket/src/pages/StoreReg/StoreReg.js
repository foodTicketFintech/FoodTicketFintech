import React, { Component } from "react";
import "./StoreReg.css";
import axios from "axios";

class StoreReg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storeName: "",
      food1: "",
      food1price: "",
      food2: "",
      food2price: "",
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.addCustomer().then((response) => {
    });
  };

  handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.className] = e.target.value;
    this.setState(nextState);
  };
  axiosResult = async () => {
    let bb = await axios({
      method: "post",
      url: "http://localhost:4000/store/Reg",
      data: {
        storeName: this.state.storeName,
        food1: this.state.food1,
        food1price: this.state.food1price,
        food2: this.state.food2,
        food2price: this.state.food2price,
      },
    });
  };

  componentDidMount() {
    // login하고 이용해야하는 서비스는 componentDidMount에 이부분 추가하면 됩니다!
    if (window.sessionStorage.getItem("logged") === "false") {
      this.props.history.push("/signup");
    }
  }

  render() {
    return (
      <div className="customer">
        <form onSubmit={this.onSubmit} style={{ padding: 10 }}>
          <div>
            <label htmlFor="user-id">매장 이름</label>
            <br />
            <div className="col-lg-12">
              <div className="form-group text_box">
                <input
                  name="store-name"
                  placeholder="매장 이름"
                  type="text"
                  required
                  onChange={(e) => this.onChangeId(e)}
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="user-name">음식1</label>
            <br />
            <div className="col-lg-12">
              <div className="form-group text_box">
                <input
                  name="food1"
                  placeholder="음식1"
                  type="text"
                  required
                  onChange={(e) => this.onChangeName(e)}
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="user-password">음식1가격</label>
            <br />
            <div className="col-lg-12">
              <div className="form-group text_box">
                <input
                  name="food1price"
                  placeholder="음식1가격"
                  type="text"
                  required
                  onChange={(e) => this.onChangePassword(e)}
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="user-password-check">음식2</label>
            <br />
            <div className="col-lg-12">
              <div className="form-group text_box">
                <input
                  name="food2"
                  placeholder="음식2"
                  type="text"
                  required
                  onChange={(e) => this.onChangePasswordChk(e)}
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="user-birth">음식2가격</label>
            <br />
            <div className="col-lg-12">
              <div className="form-group text_box">
                <input
                  name="food2price"
                  placeholder="음식2가격"
                  type="text"
                  required
                  onChange={(e) => this.onChangeBrith(e)}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default StoreReg;

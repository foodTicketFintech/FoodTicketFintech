import React, { Component } from "react";
import "./Login.css";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      password: "",
    };
  }
  componentDidMount() {}

  onChangeId = (e) => {
    this.setState({ id: e.target.value });
  };

  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  onSubmitLogin = async (e) => {
    e.preventDefault();
    console.log("onSubmitlogin 실행!");
    let axiosRes;
    let axiosResult = async () => {
      let b = await axios({
        method: "post",
        url: "http://localhost:4000/customer/login",
        data: {
          id: this.state.id,
          password: this.state.password,
        },
      });
      return b;
    };
    axiosRes = await axiosResult();
    console.log(axiosRes.data.token);
    console.log(window.localStorage);
    console.log(this.props);
    // accessToken cookie에 저장해야 한다.
    window.sessionStorage.setItem("accessToken", axiosRes.data.token);
  };
  onSubmitSignUp = async (e) => {
    e.preventDefault();
    // TODO : modal 하나 띄워주면 좋을듯 회의해보자
    this.props.history.push("/signup");
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit} style={{ padding: 10 }}>
          {/* ID input tag */}
          <div>
            <label htmlFor="user-id">아이디</label>
            <br />
            <div className="col-lg-12">
              <div className="form-group text_box">
                <input
                  name="user-id"
                  placeholder="ID"
                  type="text"
                  required
                  onChange={(e) => this.onChangeId(e)}
                />
              </div>
            </div>
          </div>

          {/* Name input tag */}
          <div>
            <label htmlFor="user-password">패스워드</label>
            <br />
            <div className="col-lg-12">
              <div className="form-group text_box">
                <input
                  name="user-password"
                  placeholder="Password"
                  type="password"
                  required
                  onChange={(e) => this.onChangePassword(e)}
                />
              </div>
            </div>
          </div>

          {/* TODO : 1. 로그인 버튼 / 2. 회원가입 버튼 */}
          <button type="submit" className="btn_three" onClick={(e) => this.onSubmitLogin(e)}>
            로그인
          </button>
          <button type="button" className="btn_three" onClick={(e) => this.onSubmitSignUp(e)}>
            회원 가입
          </button>
        </form>
      </>
    );
  }
}

export default Login;

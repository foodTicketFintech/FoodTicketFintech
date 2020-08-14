import React, { Component } from "react";
import "./Login.css";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
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
                <input name="user-id" placeholder="ID" type="text" required />
              </div>
            </div>
          </div>

          {/* Name input tag */}
          <div>
            <label htmlFor="user-password">패스워드</label>
            <br />
            <div className="col-lg-12">
              <div className="form-group text_box">
                <input name="user-password" placeholder="Password" type="password" required />
              </div>
            </div>
          </div>

          {/* TODO : 1. 로그인 버튼 / 2. 회원가입 버튼 */}
          <button type="submit" className="btn_three">
            로그인
          </button>
          <button type="submit" className="btn_three">
            회원 가입
          </button>
        </form>
      </>
    );
  }
}

export default Login;

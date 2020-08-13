/*global kakao */
import React, { Component } from "react";
import "./SignUp.css";
import axios from "axios";
/*
Customer table구조 

id (int) : 기본키
email (char) : ID 역할
password (char) : PASSWORD
name (char) : 사용자 이름
birth (char) : 생년월일
address (char) : 주소

*/

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      password: "",
      passwordCheck: "",
      birth: "",
      address: "",
      passwordError: false,
      termError: false,
      positionX: "",
      positionY: "",
    };
  }

  onSubmit = async (e) => {
    e.preventDefault();
    /**검증 로직 만들기
     * 1. 비밀번호와 비밀번호 체크가 다를 경우를 검증한다
     * 2. 약관 동의를 확인한다.
     */
    if (this.state.password !== this.state.passwordCheck) {
      return this.setState({ passwordError: true });
    }
    // if (!term) {
    //   return setTermError(true);
    // }
    console.log(this.state.id, this.state.name, this.state.password, this.state.passwordCheck);
    // Kakao Map API 사용 -> 좌표 저장
    let geocoder = new kakao.maps.services.Geocoder();
    let callback = (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        this.setState({ positionX: result[0].x });
        this.setState({ positionY: result[0].y });
        console.log(this.state);
        return;
      }
    };
    let a = await geocoder.addressSearch(this.state.address, callback);

    let axiosResult = await axios({
      method: "post",
      url: "http://localhost:4000/customer/join",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: {
        id: this.state.id,
        name: this.state.name,
        password: this.state.password,
        birth: this.state.birth,
        address: this.state.address,
        positionX: this.state.positionX,
        positionY: this.state.positionY,
      },
    });

    console.log(axiosResult);
    // TODO : 2. DB에 저장하는 부분 작성
  };

  // Coustom Hook 이전
  onChangeId = (e) => {
    this.setState({ id: e.target.value });
  };
  onChangeName = (e) => {
    this.setState({ name: e.target.value });
    // SVGComponentTransferFunctionElement(e.target.value);
  };
  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  onChangePasswordChk = (e) => {
    //비밀번호를 입력할때마다 password 를 검증하는 함수
    if (e.target.value !== this.state.password) {
      this.setState({ passwordError: true });
    } else {
      this.setState({ passwordError: false });
    }
    this.setState({ passwordCheck: e.target.value });
  };
  onChangeBrith = (e) => {
    this.setState({ birth: e.target.value });
  };

  onChangeAddress = (e) => {
    // setTermError(false);
    this.setState({ address: e.target.value });
  };

  //   onChangeTerm = (e) => {
  //     //체크박스 초기화
  //     setTermError(false);
  //     setTerm(e.target.checked);
  //   };
  componentDidMount() {}

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit} style={{ padding: 10 }}>
          {/* ID input tag */}
          <div>
            <label htmlFor="user-id">아이디</label>
            <br />
            <input name="user-id" required onChange={(e) => this.onChangeId(e)} />
          </div>

          {/* Name input tag */}
          <div>
            <label htmlFor="user-name">이름</label>
            <br />
            <input name="user-name" required onChange={(e) => this.onChangeName(e)} />
          </div>

          {/* PASSWORD input tag */}
          <div>
            <label htmlFor="user-password">비밀번호</label>
            <br />
            <input
              name="user-password"
              // type="password"
              required
              onChange={(e) => this.onChangePassword(e)}
            />
          </div>

          {/* PASSWORD_CHECK input tag */}
          <div>
            <label htmlFor="user-password-check">비밀번호체크</label>
            <br />
            <input
              name="user-password-check"
              // type="password"
              required
              onChange={(e) => this.onChangePasswordChk(e)}
            />
            {this.state.passwordError && (
              <div style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</div>
            )}
          </div>

          {/* birth tag */}
          <div>
            <label htmlFor="user-birth">생년월일</label>
            <br />
            <input name="user-birth" required onChange={(e) => this.onChangeBrith(e)} />
          </div>

          {/* address */}
          <div>
            <label htmlFor="user-address">주소</label>
            <br />
            <input name="user-address" required onChange={(e) => this.onChangeAddress(e)} />
          </div>
          {/* <div>
          <Checkbox name="user-term" value={term} onChange={onChangeTerm}>
            동의 합니까?
          </Checkbox>
          {termError && <div style={{ color: "red" }}>약관에 동의하셔야 합니다.</div>}
        </div> */}
          <div style={{ marginTop: 10 }}>
            <input type="submit" value="로그인" />
          </div>
        </form>
      </>
    );
  }
}

export default SignUp;

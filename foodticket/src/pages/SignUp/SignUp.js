/*global kakao */
import React, { useState } from "react";
import "./SignUp.css";
// import kakao from "//dapi.kakao.com/v2/maps/sdk.js?appkey=ac73d6837cb1a759883d1884b65be73c";
/*
Customer table구조 

id (int) : 기본키
email (char) : ID 역할
password (char) : PASSWORD
name (char) : 사용자 이름
birth (char) : 생년월일
address (char) : 주소

TODO : 주소 받으면 x좌표와 y좌표로 변환해주는 로직 필요함
position_x (char) : 주소 x좌표
position_y (char) : 주소 y좌표

*/

const SignUp = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [birth, setBirth] = useState("");
  const [address, setAddress] = useState("");
  //   const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    /**검증 로직 만들기
     * 1. 비밀번호와 비밀번호 체크가 다를 경우를 검증한다
     * 2. 약관 동의를 확인한다.
     */
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    // if (!term) {
    //   return setTermError(true);
    // }
    console.log({
      id,
      name,
      password,
      passwordCheck,
    });
    // TODO : 1. Kakao Map API 사용 -> 좌표 받아와야 함

    // TODO : 2. DB에 저장하는 부분 작성
  };

  // Coustom Hook 이전
  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangeName = (e) => {
    setName(e.target.value);
    // SVGComponentTransferFunctionElement(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangePasswordChk = (e) => {
    //비밀번호를 입력할때마다 password 를 검증하는 함수
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  };
  const onChangeBrith = (e) => {
    setBirth(e.target.value);
  };

  const onChangeAddress = (e) => {
    setTermError(false);
    setAddress(e.target.value);
  };

  //   const onChangeTerm = (e) => {
  //     //체크박스 초기화
  //     setTermError(false);
  //     setTerm(e.target.checked);
  //   };

  return (
    <>
      <form onSubmit={onSubmit} style={{ padding: 10 }}>
        {/* ID input tag */}
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <input name="user-id" value={id} required onChange={onChangeId} />
        </div>

        {/* Name input tag */}
        <div>
          <label htmlFor="user-name">이름</label>
          <br />
          <input name="user-name" value={name} required onChange={onChangeName} />
        </div>

        {/* PASSWORD input tag */}
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <input
            name="user-password"
            type="password"
            value={password}
            required
            onChange={onChangePassword}
          />
        </div>

        {/* PASSWORD_CHECK input tag */}
        <div>
          <label htmlFor="user-password-check">비밀번호체크</label>
          <br />
          <input
            name="user-password-check"
            type="password"
            value={passwordCheck}
            required
            onChange={onChangePasswordChk}
          />
          {passwordError && <div style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</div>}
        </div>

        {/* birth tag */}
        <div>
          <label htmlFor="user-birth">생년월일</label>
          <br />
          <input name="user-birth" type="birth" value={birth} required onChange={onChangeBrith} />
        </div>

        {/* address */}
        <div>
          <label htmlFor="user-address">주소</label>
          <br />
          <input
            name="user-address"
            type="address"
            value={address}
            required
            onChange={onChangeAddress}
          />
        </div>
        {/* <div>
          <Checkbox name="user-term" value={term} onChange={onChangeTerm}>
            동의 합니까?
          </Checkbox>
          {termError && <div style={{ color: "red" }}>약관에 동의하셔야 합니다.</div>}
        </div> */}
        <div style={{ marginTop: 10 }}>
          <input type="submit" value="로그인" action={onSubmit} />
        </div>
      </form>
    </>
  );
};

export default SignUp;

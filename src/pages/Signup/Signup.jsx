import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.scss';

const Signup = () => {
  const [formInput, setFormInput] = useState({
    userName: '',
    id: '',
    email: '',
    firstpassword: '',
    lastpassword: '',
    checkPassword: '패스워드 입력',
  });

  const navigate = useNavigate();

  console.log(formInput.userName);

  const handleInput = event => {
    const { name, value } = event.target;
    setFormInput({ ...formInput, [name]: value });
    // console.log(formInput.id);
    // console.log(formInput.email);
  };

  const isIdValid = formInput.id.length >= 4 && formInput.id.length < 16;
  const isPasswordValid = formInput.firstpassword.length >= 5;
  const isEmailValid = formInput.email.includes('@');
  const isSamePassword = formInput.firstpassword === formInput.lastpassword;
  const isFormValid =
    isIdValid && isEmailValid && isPasswordValid && isSamePassword;

  //원리는 : 저희가 사용자의 키를 받으면서 계속해서 화면을 재 렌더링 해주고 있음.
  // 렌더링 하면 컴포넌트 함수 전체가 한바퀴 돌겠죠?
  // OK?

  if (isSamePassword) {
    // 통과
  }

  if (!isPasswordValid) {
    // console.log('동일한 패스워드를 입력해주셔야 합니다.');
  }
  const validateSubmit = () => {
    if (isFormValid) {
      // const { userName, id, email, firstpassword, lastpassword } = formInput;
      // fetch('http://', {
      //   method: 'POST',
      //   body: JSON.stringify({
      //     userName,
      //     id,
      //     email,
      //     firstpassword,
      //     lastpassword,
      //   }),
      // })
      //   .then(response => response.json())
      //   .then(result => {
      //     if (result.MESSAGE === 'SUCCESS') {
      //       navigate('/main');
      //     } else {
      //       alert('다시 한 번 확인해주세요.');
      //     }
      //   });
      navigate('/main');
    }
  };

  const submitUserInfo = () => {
    // const { userName, id, email, firstpassword, lastpassword } = formInput;
    // fetch('http://', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     userName,
    //     id,
    //     email,
    //     firstpassword,
    //     lastpassword,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(result => {
    //     if (result.MESSAGE === 'SUCCESS') {
    //       navigate('/main');
    //     } else {
    //       alert('다시 한 번 확인해주세요.');
    //     }
    //   });
  };

  return (
    <div className="mainSignUpContainer">
      <div className="signUpLogo">
        <h1>Join</h1>
        <span>회원가입</span>
      </div>
      <div className="signUpContainer">
        <div className="signUpInfo">
          <div className="infoTitle">기본정보 입력</div>
          <div className="user">
            <label className="innerTitle">이름</label>
            <input type="text" name="userName" onChange={handleInput} />
          </div>
          <div className="userId">
            <label className="innerTitle">아이디</label>
            <div className="idInner">
              <input
                name="id"
                type="text"
                onChange={handleInput}
                value={formInput.id}
              />
              <span>(4자 이상)</span>
            </div>
          </div>
          <div className="user">
            <label className="innerTitle">이메일</label>
            <input type="text" name="email" onChange={handleInput} />
          </div>
          <div className="userPw">
            <label className="innerTitle">비밀번호</label>
            <div className="pwInner">
              <input
                name="firstpassword"
                type="password"
                onChange={handleInput}
                value={formInput.firstpassword}
              />
              <span>(5자 이상)</span>
            </div>
          </div>
          <div className="userPwCheck">
            <label className="innerTitle" name="lastpassword">
              비밀번호 확인
            </label>
            <input
              name="lastpassword"
              type="password"
              onChange={handleInput}
              value={formInput.lastPassword}
            />
          </div>
          <div className="buttonSetting">
            <button
              className={`btn ${isFormValid ? '' : 'invalid'}`}
              type="submit"
              onClick={validateSubmit}
              disabled={!isFormValid}
            >
              회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

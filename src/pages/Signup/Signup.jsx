import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from 'config';
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

  const handleInput = event => {
    const { name, value } = event.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const isIdValid = formInput.id.length >= 4 && formInput.id.length < 16;
  const isPasswordValid = formInput.firstpassword.length >= 8;
  const isEmailValid = formInput.email.includes('@');
  const isSamePassword = formInput.firstpassword === formInput.lastpassword;
  const isFormValid =
    isIdValid && isEmailValid && isPasswordValid && isSamePassword;

  const submitUserInfo = () => {
    const {
      userName: name,
      id: username,
      email,
      firstpassword: password,
    } = formInput;

    fetch(api.signup, {
      method: 'POST',
      body: JSON.stringify({ name, username, email, password }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'ALREADY_EXIST_USERNAME') {
          alert('아이디를 확인해 주세요');
        } else if (result.message === 'ALREADY_EXIST_EMAIL') {
          alert('이메일을 확인해 주세요');
        } else if (result.message === 'CREATE ACCOUNT SUCCESS') {
          alert('회원가입을 축하합니다');
          navigate('/');
        }
      });
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
          <div className="userInfo">
            <label className="innerTitle">아이디</label>
            <div className="userInner">
              <input
                name="id"
                type="text"
                onChange={handleInput}
                value={formInput.id}
              />
              <span>(4자~16자)</span>
            </div>
          </div>
          <div className="user">
            <label className="innerTitle">이메일</label>
            <input type="text" name="email" onChange={handleInput} />
            <span>(@ 포함)</span>
          </div>
          <div className="userInfo">
            <label className="innerTitle">비밀번호</label>
            <div className="userInner">
              <input
                name="firstpassword"
                type="password"
                onChange={handleInput}
                value={formInput.firstpassword}
              />
              <span>(8자 이상)</span>
            </div>
          </div>
          <div className="user">
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
              onClick={submitUserInfo}
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

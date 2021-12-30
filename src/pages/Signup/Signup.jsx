import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.scss';

const Signup = () => {
  const navigate = useNavigate();
  const [isFormValid, setIsFormValid] = useState(false);
  const [formInput, setFormInput] = useState({
    userName: '',
    id: '',
    firstpassword: '',
    lastpassword: '',
    checkPassword: '패스워드 입력',
  });

  console.log(setFormInput);

  const handleInput = event => {
    const { name, value } = event.target;
    setFormInput({ ...formInput, [name]: value });
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
          <div className="userName">
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
              <span>(영문소문자 / 숫자, 4~16자)</span>
            </div>
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
            <label
              className="innerTitle"
              // onChange={handleChange}
              value={formInput.lastPassword}
            >
              비밀번호 확인
            </label>
            <input name="lastpassword" type="password" />
          </div>
          <div className="buttonSetting">
            <button
              type="submit"
              // onClick={validateSubmit}
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

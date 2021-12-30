import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.scss';

const Signup = () => {
  const navigate = useNavigate();
  const [isFormValid, setIsFormValid] = useState(false);

  const [formInput, setFormInput] = useState({
    name: '',
    id: '',
    firstpassword: '',
    lastpassword: '',
    checkPassword: '패스워드 입력',
  });

  const handleInput = event => {
    const { name, value } = event.target;
    const { id, password } = formInput;

    setFormInput({ ...formInput, [name]: value });

    const isFormValid = checkLoginFormValid(formInput);
    setIsFormValid(!isFormValid);
  };

  const handleChange = e => {
    setFormInput({ [e.target.value]: e.target.value });

    if (e.target.name !== 'name') {
      setTimeout(this.handleCheck, 100);
    }
  };

  const handleCheck = () => {
    const { firstPassword, lastPassword } = setFormInput;
    if (firstPassword.length < 1 || lastPassword.lenght < 1) {
      this.setState({
        checkPassword: '패스워드 입력',
      });
    } else if (firstPassword === lastPassword) {
      this.setState({
        checkPassword: '일치',
      });
    } else {
      this.setState({
        checkPassword: '불일치',
      });
    }
  };

  const checkLoginFormValid = form => {
    return !(!form.id || !form.password);
  };

  const validateSubmit = () => {
    return validateId() && validatePassword();
  };

  const validateId = () => {
    const isValidId = formInput.id.indexOf('a-z0-9');

    if (!isValidId) {
      alert('유효한 아이디 형식이 아닙니다.');
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    const isValidPassword = formInput.password.lenght > 5;

    if (!isValidPassword) {
      alert('비밀번호는 5글자 이상 입력해주세요');
      return false;
    }
    return true;
  };

  const submitSignUpForm = () => {
    const isValid = validateSubmit();
    const { id, password } = formInput;

    if (isValid) {
      fetch(api.login, {
        method: 'POST',
        body: JSON.stringify({ id, password }),
      })
        .then(res => res.json())
        .then(data => {
          const { message, token } = data;
          if (message === 'invalid user input') {
            alert('아이디와 비밀번호를 확인해주세요');
            return;
          }

          if (massage === 'login success') {
            localStorage.setItem('user_token', token);
            goToMain();
          }
        });
    }
  };

  const goToMain = () => {
    navigate('/main');
  };

  // const isPassedId = userId.includes('a-z0-9') && 16 > userId.length > 4;
  // const isPassedPw = userPw.includes('!@#$%^&*()') && userPw.length > 4;

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
            <input type="text" />
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
                name="password"
                type="password"
                onChange={(handleInput, handleChange)}
                value={(formInput.pass, firstPassword)}
                onKeyDown={event => {
                  if (event.code === 'Enter') submitSignUpForm();
                }}
              />
              <span>(5자 이상)</span>
            </div>
          </div>
          <div className="userPwCheck">
            <label
              className="innerTitle"
              onChange={handleChange}
              value={lastPassword}
            >
              비밀번호 확인
            </label>
            <input type="password" />
          </div>
          <div className="buttonSetting">
            <button
              type="button"
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

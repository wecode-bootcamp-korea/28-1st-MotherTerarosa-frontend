import React, { useState } from 'react';
import './Signup.scss';

const Signup = () => {
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [userPwCheck, setUserPwCheck] = useState('');
  const [buttonOn, setButtonOn] = useState(false);

  const handleUserName = event => {
    setUserName(event.target.value);
    console.log(setUserName);
  };

  const handleUserId = event => {
    setUserId(event.target.value);
    console.log(setUserId);
  };

  const handleUserPw = event => {
    setUserPw(event.target.value);
    console.log(setUserPw);
  };

  const handleUserPwCheck = event => {
    setUserPwCheck(event.target.value);
    console.log(setUserPwCheck);
  };

  const isPassedId = () => {
    return userId.includes('a-z0-9') && 16 > userId.length > 4
      ? setButtonOn(true)
      : setButtonOn(false);
  };

  return (
    <section>
      <div className="container">
        <div className="mainSignUpContainer">
          <div className="signUpLogo">
            <h6>Join</h6>
            <span>회원가입</span>
          </div>
          <div className="signUpContainer">
            <div className="signUpInfo">
              <div className="infoTitle">기본정보 입력</div>
              <div className="userName">
                <div className="innerTitle">이름</div>
                <input type="text" onChange={handleUserName} />
              </div>
              <div className="userId">
                <div className="innerTitle">아이디</div>
                <div className="idInner">
                  <input
                    type="text"
                    onChange={handleUserId}
                    onKeyUp={isPassedId}
                  />
                  <span>(영문소문자 / 숫자, 4~16자)</span>
                </div>
              </div>
              <div className="userPw">
                <div className="innerTitle">비밀번호</div>
                <div className="pwInner">
                  <input type="password" onChange={handleUserPw} />
                  <span>(특수문자 1가지 이상, 5자 이상)</span>
                </div>
              </div>
              <div className="userPwCheck">
                <div className="innerTitle">비밀번호 확인</div>
                <input type="password" onChange={handleUserPwCheck} />
              </div>
              <div className="buttonSetting">
                <button className={buttonOn ? 'onBtn' : 'offBtn'} type="button">
                  회원가입
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;

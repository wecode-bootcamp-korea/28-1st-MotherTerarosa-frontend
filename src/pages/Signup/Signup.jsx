import React from 'react';
import './Signup.scss';

const Signup = () => {
  return (
    <section>
      <div className="container">
        <div className="mainSignUpContainer">
          <div className="signUpLogo">
            <h6>Join</h6>
            <h6>회원가입</h6>
          </div>
          <div className="signUpContainer">
            <div className="signUpInfo">
              <div className="infoTitle">기본정보 입력</div>
              <div className="userName">
                <div className="innerTitle">이름</div>
                <input type="text" placeholder="이름" />
              </div>
              <div className="userId">
                <div className="innerTitle">아이디</div>
                <input type="text" placeholder="아이디" />
              </div>
              <div className="userPw">
                <div className="innerTitle">비밀번호</div>
                <input type="text" placeholder="비밀번호" />
              </div>
              <div className="userPwCheck">
                <div className="innerTitle">비밀번호 확인</div>
                <input type="text" placeholder="비밀번호 확인" />
              </div>
              <button>회원가입</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;

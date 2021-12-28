import React from 'react';

const Login = () => {
  return (
    <section>
      <div className="container">
        <div className="mainLoginContainer">
          <div className="loginLogo">
            <h5>LOGIN</h5>
            <h6>로그인</h6>
          </div>
          <div className="innerLoginContainer">
            <div className="mainLogin">
              <h6>회원 조회</h6>
              <input type="text" placeholder="아이디">
                아이디
              </input>
              <input type="password" placeholder="비밀번호">
                비밀번호
              </input>
              <button>로그인</button>
              <div className="signup" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

import React from 'react';
import './Login.scss';

const Login = () => {
  return (
    <section className="loginMianContiainer">
      <div className="loginWrapper">
        <div className="loginLogo">
          <h1>Login</h1>
          <h2>로그인</h2>
        </div>
        <div className="loginBox">
          <div className="innerLoginBox">
            <h3> 회원 조회</h3>
            <div className="userInfo">
              <form>
                <label>
                  <input type="text" name="id" />
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

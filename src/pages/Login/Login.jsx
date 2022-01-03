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
          <div className="login">
            <span>회원 조회</span>
            <div className="userInfo">
              <form>
                <label>
                  <input type="text" name="id" placeholder="아이디" />
                </label>
                <label>
                  <input type="password" name="pw" placeholder="비밀번호" />
                </label>
              </form>
              <button type="button">로그인</button>
              <div className="SingupPageInfo">
                <p>아직 회원이 아니신가요?</p>
                <span>
                  테라로사에 가입하시면 더 많은 혜택을 누리실 수 있습니다.
                </span>
                <button type="button" id="signUp">
                  신규회원가입
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

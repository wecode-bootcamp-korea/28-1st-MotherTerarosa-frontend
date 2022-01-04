import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [formInput, setFormInput] = useState({
    id: '',
    pw: '',
  });

  const navigate = useNavigate();

  const handleInput = event => {
    const { name, value } = event.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleLogin = () => {
    fetch('', {
      method: 'POST',
      body: JSON.stringify({
        id,
        pw,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'INVALID EMAIL') {
          alert('존재하지 않는 아이디입니다');
        } else if (result.message === 'INVALID PASSWORD') {
          alert('비밀번호가 틀렸습니다');
        } else if (result.message === 'SUCCESS') {
          localStorage.setItem('token', result.access_token);
          alert('환영합니다!');
          navigate('/main');
        }
      });
  };

  return (
    <section className="loginMianContiainer">
      <div className="loginWrapper">
        <div className="loginLogo">
          <h1>Login</h1>
          <h2>로그인</h2>
          <div className="loginBox">
            <div className="login">
              <span className="loginSpan">회원 조회</span>
              <div className="userInfo">
                <form>
                  <label>
                    <input
                      type="text"
                      name="id"
                      placeholder="아이디"
                      onChange={handleInput}
                      value={formInput.id}
                    />
                    <input
                      type="password"
                      name="pw"
                      placeholder="비밀번호"
                      onChange={handleInput}
                      value={formInput.pw}
                    />
                  </label>
                </form>
                <button
                  className="loginBtn"
                  type="button"
                  onClick={handleLogin}
                >
                  로그인
                </button>
                <div className="signUpPageInfo">
                  <p>
                    아직 회원이 아니신가요?
                    <span className="signUpSpan">
                      테라로사에 가입하시면 더 많은 혜택을 누리실 수 있습니다.
                    </span>
                  </p>
                  <Link to="/signup">
                    <button className="signUpBtn" type="button" id="signUp">
                      신규회원가입
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

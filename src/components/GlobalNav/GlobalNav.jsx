import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './GlobalNav.scss';

function GlobalNav() {
  const [scrollPosition, setScrollPosition] = useState(false);

  const checkscrollYPosition = () => {
    (window.scrollY || document.documentElement.scrollTop) > 0
      ? setScrollPosition(true)
      : setScrollPosition(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', checkscrollYPosition);
  });

  return (
    <header className={`globalnav ${scrollPosition ? 'marginNav' : ''}`}>
      <div
        className={`commonNav ${scrollPosition ? 'miniNav' : 'originalNav'}`}
      >
        <Link to="/">
          <div className="logoWrapper">MOTHER TERAROSA</div>
        </Link>
        <Link to="/productlist">
          <div className="categoryWrapper">SHOP</div>
        </Link>
        <div className="infoWrapper">
          <ul className="personalInfoWrapper">
            <Link to="/login">로그인</Link>
            <Link to="#">주문/배송</Link>
            <Link to="#">장바구니</Link>
            <Link to="#">문의</Link>
          </ul>
          <ul className="moreInfoWrapper">
            <Link to="#" className="about">
              ABOUT
            </Link>
            <Link to="#" className="location">
              LOCATIONS
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default GlobalNav;

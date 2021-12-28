import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './GlobalNav.scss';

function GlobalNav() {
  const [scrollPosition, setScrolPosition] = useState(0);
  const updateScrollPosition = () => {
    setScrolPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScrollPosition);
  });
  return (
    <header className="GlobalNav">
      <div className={scrollPosition < 1 ? 'originalNav' : 'miniNav'}>
        <Link to="/">
          <div className="logoWrapper">
            <span>MOTHER TERAROSA</span>
          </div>
        </Link>
        <Link to="/shoplist/:category">
          <div className="categoryWrapper">
            <span>SHOP</span>
          </div>
        </Link>
        <div className="infoWrapper">
          <ul className="personalInfoWrapper">
            <Link to="/login">
              <li>로그인</li>
            </Link>
            <Link to="#">
              <li>주문/배송</li>
            </Link>
            <Link to="#">
              <li>장바구니</li>
            </Link>
            <Link to="#">
              <li>문의</li>
            </Link>
          </ul>
          <ul className="moreInfoWrapper">
            <Link to="#">
              <li>ABOUT</li>
            </Link>
            <Link to="#">
              <li>LOCATIONS</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="forJustPageTest" />
    </header>
  );
}

export default GlobalNav;

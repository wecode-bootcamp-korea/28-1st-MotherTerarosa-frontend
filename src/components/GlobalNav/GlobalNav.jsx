import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './GlobalNav.scss';

function GlobalNav() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScrollPosition = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
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
            <div>SHOP</div>
          </div>
        </Link>
        <div className="infoWrapper">
          <ul className="personalInfoWrapper">
            <Link to="/login">
              <li className="personalInfo">로그인</li>
            </Link>
            <Link to="#">
              <li className="personalInfo">주문/배송</li>
            </Link>
            <Link to="#">
              <li className="personalInfo">장바구니</li>
            </Link>
            <Link to="#">
              <li className="personalInfo">문의</li>
            </Link>
          </ul>
          <ul className="moreInfoWrapper">
            <Link to="#">
              <li className="about">ABOUT</li>
            </Link>
            <Link to="#">
              <li className="location">LOCATIONS</li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default GlobalNav;

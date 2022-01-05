import React from 'react';
import './Modal.scss';

function Modal() {
  return (
    <div className="Modal">
      <div className="modalContent">
        <strong className="modalTitle">$주문상세</strong>
        <div className="modalInfo">
          <div className="imageWrapper">
            <img src="https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e669cbcbe2de7f4969efc79ab353e0c19e8" />
          </div>
          <div className="description">
            <strong className="descriptionTitle">$상품명이이</strong>
            <p className="quantity">$3개</p>
            <p className="price">$65,000원</p>
          </div>
        </div>
        <div className="confirm">
          <button className="confirmButton" type="button">
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

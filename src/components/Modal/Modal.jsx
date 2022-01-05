import React from 'react';
import { printNumberWithComma } from 'utils/printNumberWithComma';
import './Modal.scss';

function Modal(props) {
  const { closeModal, quantity, name, image_url: image, price } = props;
  return (
    <div className="Modal">
      <div className="modalContent">
        <strong className="modalTitle">결제완료</strong>
        <div className="modalInfo">
          <div className="imageWrapper">
            <img src={image[0]} alt={`${name} 상품이미지`} />
          </div>
          <div className="description">
            <strong className="descriptionTitle">{name}</strong>
            <p className="quantity">{quantity}개</p>
            <p className="price">{printNumberWithComma(price * quantity)}원</p>
          </div>
        </div>
        <p className="userInfo">$userName 님 $point원 남았습니다.</p>
        <div className="confirm">
          <button className="confirmButton" type="button" onClick={closeModal}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

import React from 'react';
import Modal from '../Modal';
import { printNumberWithComma } from 'utils/printNumberWithComma';
import './OrderModal.scss';

function OrderModal(props) {
  const {
    closeModal,
    quantity,
    name,
    image_url: image,
    price,
    userName,
    point,
  } = props;

  return (
    <Modal>
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
      <p className="userInfo">
        {userName} 님 {printNumberWithComma(point + 0)}원 남았습니다.
      </p>
      <div className="confirm">
        <button className="confirmButton" type="button" onClick={closeModal}>
          확인
        </button>
      </div>
    </Modal>
  );
}

export default OrderModal;

import React from 'react';
import './Modal.scss';

function Modal({ children }) {
  return (
    <div className="Modal">
      <div className="modalContent">{children}</div>
    </div>
  );
}

export default Modal;

import React, { useState } from 'react';
import Modal from 'react-modal';
import './Modal.scss';

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setModalIsOpen(true)}>Modal Open</button>
      <Modal isOpen={true}>
        this is Modal content
        <button onClick={() => setModalIsOpen(false)}>Modal Open</button>
      </Modal>
    </>
  );
};

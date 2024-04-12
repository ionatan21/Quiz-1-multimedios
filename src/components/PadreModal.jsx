// ModalPadre.js
import React, { useState } from 'react';
import ModalHijo from './Modal';

const PadreModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const abrirModal = () => {
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
  };

  return (
    <div className='ContainerPadre'>
      <button onClick={abrirModal}>Abrir Modal</button>
      {modalVisible && <ModalHijo onClose={cerrarModal} />}
    </div>
  );
};

export default PadreModal;

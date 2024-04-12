// ModalHijo.js
import React from 'react';

const ModalHijo = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-contenido">
        <p>Bienvenidos al curso de multimedios</p>
        <button className="modal-cerrar" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default ModalHijo;

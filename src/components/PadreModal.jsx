import React, { useReducer } from 'react';
import ModalHijo from './Modal';

const initialState = {
  modalVisible: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ABRIR_MODAL':
      return { ...state, modalVisible: true };
    case 'CERRAR_MODAL':
      return { ...state, modalVisible: false };
    default:
      return state;
  }
};

const PadreModal = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const abrirModal = () => {
    dispatch({ type: 'ABRIR_MODAL' });
  };

  const cerrarModal = () => {
    dispatch({ type: 'CERRAR_MODAL' });
  };

  return (
    <div className='ContainerPadre'>
      <button onClick={abrirModal}>Abrir Modal</button>
      {state.modalVisible && <ModalHijo onClose={cerrarModal} />}
    </div>
  );
};

export default PadreModal;

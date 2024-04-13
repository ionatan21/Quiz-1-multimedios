import React, { useReducer } from "react";

const initialState = {
  valor1: 0,
  valor2: 0,
  resultado: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_VALOR1":
      return { ...state, valor1: parseInt(action.payload) };
    case "SET_VALOR2":
      return { ...state, valor2: parseInt(action.payload) };
    case "SUMAR":
      return { ...state, resultado: state.valor1 + state.valor2 };
    case "RESTAR":
      return { ...state, resultado: state.valor1 - state.valor2 };
    case "REINICIAR":
      return initialState;
    default:
      return state;
  }
};

const Contador = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const sumar = () => {
    dispatch({ type: "SUMAR" });
  };

  const restar = () => {
    dispatch({ type: "RESTAR" });
  };

  const reiniciar = () => {
    dispatch({ type: "REINICIAR" });
  };

  return (
    <div className="contador-container">
      <div className="input-container">
        <input
          type="number"
          value={state.valor1}
          onChange={(e) => dispatch({ type: "SET_VALOR1", payload: e.target.value })}
        />
        <input
          type="number"
          value={state.valor2}
          onChange={(e) => dispatch({ type: "SET_VALOR2", payload: e.target.value })}
        />
      </div>
      <div className="button-container">
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
        <button onClick={reiniciar}>Reiniciar</button>
      </div>
      <input
        className="resultado-input"
        type="number"
        value={state.resultado}
        readOnly
      />
    </div>
  );
};

export default Contador;
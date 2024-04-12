import React, { useState } from "react";

const Contador = () => {
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const sumar = () => {
    setResultado(parseInt(valor1) + parseInt(valor2));
  };

  const restar = () => {
    setResultado(parseInt(valor1) - parseInt(valor2));
  };

  const reiniciar = () => {
    setValor1(0);
    setValor2(0);
    setResultado(0);
  };
  return (
    <div className="contador-container">
      <div className="input-container">
        <input
          type="number"
          value={valor1}
          onChange={(e) => setValor1(e.target.value)}
        />
        <input
          type="number"
          value={valor2}
          onChange={(e) => setValor2(e.target.value)}
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
        value={resultado}
        readOnly
      />
    </div>
  );
};

export default Contador;

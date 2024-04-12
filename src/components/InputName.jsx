import React, { useState } from 'react';



const InputName = () => {

    const handleNameChange = (e) => {
        const newName = e.target.value;
        console.log(newName);
        if (newName === '') {
            setname("No definido");
          } else {
            setname(newName);
          }
      };

      

    const [name, setname] = useState("No definido")
    return (
        <div className="input-container">
        <div>Su nombre es: {name}</div>
        <input
          className="input-field"
          onChange={handleNameChange}
          type="text"
          placeholder="Digite su nombre"
        />
      </div>
    );
}

export default InputName;

import React, { useReducer } from "react";

const initialState = {
  likes: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'AGREGAR_LIKE':
      return { ...state, likes: state.likes + 1 };
    case 'QUITAR_LIKE':
      return { ...state, likes: state.likes > 0 ? state.likes - 1 : 0 };
    default:
      return state;
  }
};

const Likes = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleLike = () => {
    dispatch({ type: 'AGREGAR_LIKE' });
  };

  const handleDislike = () => {
    dispatch({ type: 'QUITAR_LIKE' });
  };

  return (
    <div className="likes-container">
      <h1>Cantidad de likes {state.likes}</h1>
      <button className="like-button" onClick={handleLike}>Me gusta</button>
      <button className="dislike-button" onClick={handleDislike}>No me gusta</button>
    </div>
  );
};

export default Likes;

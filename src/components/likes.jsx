import React, { useState } from "react";

const Likes = () => {
  const [likes, setLikes] = useState(0);

  const Newlike = () => {
    let actualLikes = likes;
    setLikes(actualLikes + 1);
  };

  const Dislike = () => {
    let actualLikes = likes;
    if (likes >= 1) {
      setLikes(actualLikes - 1);
    }
  };
  return (
    <div className="likes-container">
      <h1>Cantidad de likes {likes}</h1>
      <button className="like-button" onClick={Newlike}>Me gusta</button>
      <button className="dislike-button" onClick={Dislike}>No me gusta</button>
    </div>
  );
};

export default Likes;

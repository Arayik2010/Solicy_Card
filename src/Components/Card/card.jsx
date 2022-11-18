import React from "react";
import "./Card.css";

export const Card = (props) => {
  const { id, onRemove } = props;

  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <div>
      <div className="cards">
        <p>{id}</p>
        <button onClick={handleRemove}>x</button>
      </div>
    </div>
  );
};

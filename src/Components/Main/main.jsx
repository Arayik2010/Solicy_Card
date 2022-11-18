import React from "react";
import { useDispatch } from "react-redux";
import { useCards } from "../../store";
import { Card } from "../Card/Card";
import { deleteCardAction } from "../../store/action";
import "./Main.css";

const Main = () => {
  const cards = useCards();
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(deleteCardAction(id));
  };

  return (
    <div className="main">
      <div className="cards-block">
        {cards.map((card) => (
          <Card key={card} id={card} onRemove={handleRemove} />
        ))}
      </div>
    </div>
  );
};

export default Main;

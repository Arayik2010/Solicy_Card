import React from "react";
import { useDispatch } from "react-redux";
import { addCardAction, sortCardAction } from "../../store/action";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();

  const handleAddCard = () => {
    dispatch(addCardAction(Math.floor(Math.random() * 1000)));
  };

  const hadnleSortCard = () => {
    dispatch(sortCardAction());
  };

  return (
    <div className="header">
      <button className="add_card" onClick={handleAddCard}>
        Add card
      </button>
      <button className="sort_card" onClick={hadnleSortCard}>
        Sort card
      </button>
    </div>
  );
};
export default Header;

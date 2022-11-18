import { useSelector } from "react-redux";

const cardsSelector = (state) => state.cards;

export const useCards = () => useSelector(cardsSelector);

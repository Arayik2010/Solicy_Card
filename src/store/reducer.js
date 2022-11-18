import { ADD_CARD, DELETE_CARD, SORT_CARD } from "./action";

const initialState = {
  cards: [],
};

export const addCardReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_CARD: {
      return { ...state, cards: [...state.cards, payload] };
    }
    case SORT_CARD: {
      return {
        ...state,
        cards: state.cards.slice().sort((a, b) => a - b),
      };
    }
    case DELETE_CARD: {
      return {
        ...state,
        cards: state.cards.filter((item) => item !== payload),
      };
    }

    default:
      return state;
  }
};

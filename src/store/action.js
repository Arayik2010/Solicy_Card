export const ADD_CARD = "ADD_CARD";
export const SORT_CARD = "SORT_CARD";
export const DELETE_CARD = "DELETE_CARD";

export const addCardAction = (cardID) => {
  return {
    type: ADD_CARD,
    payload: cardID,
  };
};

export const sortCardAction = () => {
  return {
    type: SORT_CARD,
  };
};

export const deleteCardAction = (id) => {
  return {
    type: DELETE_CARD,
    payload: id,
  };
};

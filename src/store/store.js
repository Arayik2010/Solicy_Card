import { createStore } from "redux";
import { addCardReducer } from "./reducer";

export const store = createStore(addCardReducer);


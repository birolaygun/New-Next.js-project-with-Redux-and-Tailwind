import { createStore, combineReducers } from "redux";
import { createWrapper } from "next-redux-wrapper";

const STATE = {
  sayı: 5,
  ad: "birol",
};

const data = function reducer(state = STATE, action) {
  switch (action.type) {
    case "INC":
      return { ...state, sayı: state.sayı + action.payload };
    case "DEC":
      return { ...state, sayı: state.sayı - action.payload };
    default:
      return state;
  }
};

const combineReducer = combineReducers({
  data,
});

const initialStore = () => {
  return createStore(combineReducer);
};

export const wrapper = createWrapper(initialStore);

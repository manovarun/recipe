import { GET_RECIPES, SEARCH_RECIPES, SET_ERROR } from "../types";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RECIPES:
    case SEARCH_RECIPES:
      return { ...state, recipes: payload };
    case SET_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};

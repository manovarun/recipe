import React, { useReducer } from "react";
import RecipeContext from "./RecipeContext";
import RecipeReducer from "./RecipeReducer";
import { GET_RECIPES, SEARCH_RECIPES, SET_ERROR } from "../types";

const RecipeState = props => {
  const initialState = {
    recipes: [],
    error: null
  };

  const [state, dispatch] = useReducer(RecipeReducer, initialState);

  //Get Recipes
  const getRecipes = async () => {
    try {
      const response = await fetch(
        `https://api.edamam.com/search?q=chicken&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`
      );

      const rescipes = await response.json();

      dispatch({ type: GET_RECIPES, payload: rescipes.hits });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error.response.statusText });
    }
  };

  //Search Recipes
  const searchRecipes = async query => {
    try {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`
      );

      const rescipes = await response.json();

      dispatch({ type: SEARCH_RECIPES, payload: rescipes.hits });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error.response.statusText });
    }
  };

  return (
    <RecipeContext.Provider
      value={{ recipes: state.recipes, getRecipes, searchRecipes }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeState;

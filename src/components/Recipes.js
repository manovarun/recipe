import React, { useEffect, useContext } from "react";
import Recipe from "./Recipe";
import RecipeContext from "../context/RecipeContext";

const Recipes = () => {
  const recipeContext = useContext(RecipeContext);
  const { recipes, getRecipes } = recipeContext;

  useEffect(() => {
    getRecipes();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="recipes">
      {recipes.map((recipe, index) => (
        <Recipe key={index} {...recipe} />
      ))}
    </div>
  );
};

export default Recipes;

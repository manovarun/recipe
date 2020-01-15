import React from "react";
import "./App.css";
import RecipeState from "./context/RecipeState";
import SearchRecipes from "./components/SearchRecipes";
import Recipes from "./components/Recipes";
import Header from "./components/Header";

const App = () => {
  return (
    <RecipeState>
      <div className="App">
        <Header />
        <SearchRecipes />
        <Recipes />
      </div>
    </RecipeState>
  );
};

export default App;

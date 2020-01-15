import React, { useContext, useState } from "react";
import RecipeContext from "../context/RecipeContext";

const SearchRecipes = () => {
  const recipeContext = useContext(RecipeContext);
  const { searchRecipes } = recipeContext;

  const [search, setSearch] = useState("");

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    if (search === "") {
      alert("Please enter to search...");
    } else {
      searchRecipes(search);
    }
  };

  return (
    <form className="search-form" onSubmit={getSearch}>
      <input
        type="text"
        className="search-bar"
        value={search}
        onChange={updateSearch}
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchRecipes;

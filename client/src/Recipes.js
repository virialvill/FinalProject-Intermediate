import React from "react";
import Recipe from "./components/museum/Recipe";
import FormCreateRecipe from "./FormCreateRecipe";


function Recipes({ recipes, loggedin, addRecipe }) {
  return (
    <summary>
      {loggedin && <FormCreateRecipe addRecipe={addRecipe} />}
      {recipes.map((recipe) => (
        <Recipe key={recipe._id} recipe={recipe} />
      ))}
    </summary>
  );
}

export default Recipes;

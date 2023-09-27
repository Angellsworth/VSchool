import React from "react";
import Recipe from "./Recipe.js";
// import { UserContext } from "../context/UserProvider.js";
// import { useContext } from "react";

export default function RecipeList(props) {
  const { recipes } = props;
  // const { deletedRecipe, editRecipe } = useContext(UserContext);

  // Check if recipes is an array, and if not, return an empty div
  if (!Array.isArray(recipes)) {
    return <div className="recipe-list">No recipes available</div>;
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <Recipe
          key={recipe._id} // Use a unique key (e.g., recipe._id) as the key prop
          title={recipe.title}
          ingredients={recipe.ingredients.join(", ")} // Convert array to a comma-separated string
          instructions={recipe.instructions}
          cookingTime={recipe.cookingTime}
          imgUrl={recipe.imgUrl}
          _id={recipe._id}
        />
      ))}
    </div>
  );
}

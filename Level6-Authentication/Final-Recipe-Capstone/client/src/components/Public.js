import React, { useContext, useEffect } from "react";
import RecipeList from "./RecipeList.js";
// import Recipe from "./Recipe.js";
import { UserContext } from "../context/UserProvider.js";

export default function Public() {
  const {
    user: { username },
    getAllRecipes,
    // recipes,
    allRecipes,
    getAllComments,
  } = useContext(UserContext);

  useEffect(() => {
    getAllRecipes();
    getAllComments();
  }, []);

  // console.log(allRecipes);
  return (
    <div className="public">
      <h1>All Submitted Recipes</h1>
      <RecipeList recipes={allRecipes} />
    </div>
  );
}

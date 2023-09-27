import React, { useContext, useEffect } from "react";
import RecipeForm from "./RecipeForm.js";
import RecipeList from "./RecipeList.js";
import { UserContext } from "../context/UserProvider.js";

export default function Profile() {
  const {
    user: { username }, //, _id
    addRecipe,
    recipes,
    getUserRecipes,
    getAllComments,
  } = useContext(UserContext);

  useEffect(() => {
    getUserRecipes();
    getAllComments();
  }, []);

  return (
    <div className="profile">
      <h1>Welcome {username}!</h1>
      <h3>Post a favorite family recipe</h3>
      <br />
      <RecipeForm submit={addRecipe} btnText="Add Recipe" />
      <br />
      <h3>Your Posted Recipes</h3>
      <RecipeList recipes={recipes} />
    </div>
  );
}

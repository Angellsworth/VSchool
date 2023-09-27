import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import RecipeForm from "./RecipeForm";
import { UserContext } from "../context/UserProvider";

export default function Recipe(props) {
  const {
    title,
    ingredients,
    instructions,
    cookingTime,
    imgUrl,
    _id,
    // deletedRecipe,
    // editRecipe,
  } = props;
  console.log(props);

  const { deletedRecipe, editRecipe } = useContext(UserContext);
  const [editToggle, setEditToggle] = useState(false);
  let location = useLocation();

  return (
    <div className="recipeContainer">
      {!editToggle ? (
        <>
          <h1 className="recipeTitle">{title}</h1>
          <img
            src={imgUrl}
            alt="recipe pic"
            className="recipeImage"
            width={350}
          />
          <div className="ingredientListContainer">
            <label htmlFor="Ingredients">Ingredients:</label>
            <h3 className="ingredientList">{ingredients}</h3>
          </div>
          <label htmlFor="Instructions">Instructions:</label>
          <p className="recipeInstructions">{instructions}</p>
          <label htmlFor="CookingTime">Cooking Time:</label>
          <p>{cookingTime} minutes</p>
          {location.pathname !== "/public" && (
            <>
              <button className="delete-btn" onClick={() => deletedRecipe(_id)}>
                Delete
              </button>
              <button
                className="edit-btn"
                onClick={() => setEditToggle((prevToggle) => !prevToggle)}
              >
                Edit
              </button>
            </>
          )}
          {/* <p>posted by: {username}</p> */}
        </>
      ) : (
        <>
          <RecipeForm
            title={title}
            ingredients={ingredients}
            instructions={instructions}
            cookingTime={cookingTime}
            img={imgUrl}
            _id={_id}
            btnText="Submit Editted Recipe"
            submit={editRecipe}
          />
          <button onClick={() => setEditToggle((prevToggle) => !prevToggle)}>
            Close
          </button>
        </>
      )}

      <br></br>
    </div>
  );
}

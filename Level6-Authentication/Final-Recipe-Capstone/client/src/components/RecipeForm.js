import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";

export default function RecipeForm(props) {
  const initInputs = {
    title: props.title || "",
    ingredients: [],
    description: props.description || "",
    cookingTime: 0,
    imgUrl: props.img || "",
  };
  const { _id, submit } = props;
  const { getUserRecipes, editRecipe } = useContext(UserContext);
  const [inputs, setInputs] = useState(initInputs);
  // const { addRecipe } = props;

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }

  function handleIngredientChange(e, index) {
    const { value } = e.target;
    const updatedIngredients = [...inputs.ingredients];
    updatedIngredients[index] = value;

    setInputs((prevInputs) => ({
      ...prevInputs,
      ingredients: updatedIngredients,
    }));
  }

  function addIngredient() {
    setInputs({ ...inputs, ingredients: [...inputs.ingredients, ""] });
  }

  function handleSubmit(e) {
    e.preventDefault();
    submit(inputs, _id);
    setInputs(initInputs);
    getUserRecipes();
  }
  const { title, instructions, cookingTime, imgUrl } = inputs;
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleChange}
        placeholder="Recipe Name"
      />
      {inputs.ingredients.map((ingredient, index) => (
        <input
          key={index} // Add a unique key based on the index
          type="text"
          name={`ingredients[${index}]`}
          value={ingredient}
          onChange={(e) => handleIngredientChange(e, index)}
          placeholder="Ingredient"
        />
      ))}

      <button onClick={addIngredient} type="button" className="ingredientBtn">
        Add Ingredient
      </button>

      <input
        type="text"
        name="instructions"
        value={instructions}
        onChange={handleChange}
        placeholder="Instructions for Recipe"
      />
      <input
        type="number"
        name="cookingTime"
        value={cookingTime}
        onChange={handleChange}
        placeholder="Total minutes"
      />
      <input
        type="text"
        name="imgUrl"
        value={imgUrl}
        onChange={handleChange}
        placeholder="Image Url"
      />
      <button>{props.btnText}</button>
    </form>
  );
}

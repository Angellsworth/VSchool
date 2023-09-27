import { useState } from 'react';
import PropTypes from 'prop-types';



const initInputs = {
  title: '',
  ingredients: [],
  instructions: '',
  cookingTime: 0,
  imgUrl: '',
  // user: ,
};



function RecipeForm(props) {
  const [inputs, setInputs] = useState(initInputs);
  const { addRecipe } = props;

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }
  //***Check this with instructor */
  function handleIngredientChange(e, index) {
    const { value } = e.target; 
    const updatedIngredients = [...inputs.ingredients];
    updatedIngredients[index] = value;
  
    setInputs((prevInputs) => ({
      ...prevInputs,
      ingredients: updatedIngredients,
    }));
  }
  //******* */
  function addIngredient() {
    setInputs({...inputs, ingredients: [...inputs.ingredients, '']})
  }

  function handleSubmit(e) {
    e.preventDefault();
    addRecipe(inputs);
    setInputs(initInputs); //clears inputs
    alert('Recipe has been created')
  }

  const { title, instructions, cookingTime, imgUrl } = inputs; //ingredients,

  return (
    <>
    <h2>Create Recipe</h2>
    <form className="recipeFormInputContainer"onSubmit={handleSubmit}>
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

      <button onClick={addIngredient} type="button">Add Ingredient</button>
      <input
        type="text"
        name="instructions"
        value={instructions}
        onChange={handleChange}
        placeholder="Instructions"
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
        placeholder="Recipe Photo"
      />
      <button className="recipeFormBtn" type="submit">Create Recipe</button>
      
    </form>
    </>
    
  );
}

// Define PropTypes for the RecipeForm component
RecipeForm.propTypes = {
  addRecipe: PropTypes.func.isRequired,
};

export default RecipeForm;

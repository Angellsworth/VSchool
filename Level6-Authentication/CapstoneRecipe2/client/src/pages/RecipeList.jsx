import PropTypes from "prop-types"; // Import PropTypes
import Recipe from "./Recipe";

export default function RecipeList(props) {
  const { recipes, profileButt } = props;

  // Check if recipes is defined and is an array before mapping
  if (!recipes || !Array.isArray(recipes) || recipes.length === 0) {
    return <div className="recipe-list">No recipes added</div>;
  }
console.log(recipes)
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <Recipe
          key={recipe._id} // Use a unique key (e.g., recipe._id) as the key prop
          title={recipe.title}
          ingredients={recipe?.ingredients} // Convert array to a comma-separated string
          // username={recipe?.user.username}
          instructions={recipe.instructions}
          imgUrl={recipe.imgUrl}
          _id={recipe._id}
          profileButt={profileButt}
        />
    
      ))}
    </div>
  );
}

// Define PropTypes for the RecipeList component
RecipeList.propTypes = {
  recipes: PropTypes.array, // Make the prop optional since you're checking for its existence
  profileButt: PropTypes.bool, // Add this line to validate profileButt
};

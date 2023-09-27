import  { useContext, useEffect } from "react";
import RecipeList from "./RecipeList.jsx";
// import Recipe from "./Recipe.jsx";
import { UserContext } from "../context/userProvider";

export default function Public() {
  const {
    // user: { username },
    getAllRecipes,
    allRecipes,
    // getAllComments,
  } = useContext(UserContext);

  useEffect(() => {
    getAllRecipes();
    // getAllComments();
  }, []);

  

  // console.log(allIssues);
  return (
    <div className="public">
      <h1>Home</h1>
      
        <RecipeList recipes={allRecipes} 
        />
      
      
    </div>
  );
}
// import { useContext, useEffect } from "react"
// import RecipeForm from "./RecipeForm"
// import RecipeList from "./RecipeList.jsx"
// // import Recipe from "./Recipe"
// import { UserContext } from "../context/userProvider.jsx"

// const Profile = () => {
//   const { 
//     user: { 
//       username 
//     }, 
//     addRecipe, 
//     recipes,
//     getUserRecipes
//   } = useContext(UserContext)

//   //add this to public page also
//   useEffect(() => {
//     getUserRecipes()
// }, [])

//   return (
//     <div className="profilePage">
//       <h1>Welcome { username }</h1>
//       <RecipeForm addRecipe={addRecipe} />
//       <h3>Your Saved Recipes</h3>
//       <RecipeList recipes={recipes}/>

//     </div>
//   )
// }

// export default Profile

import { useContext, useEffect } from "react"
import RecipeForm from "./RecipeForm"
import RecipeList from "./RecipeList.jsx"
import { UserContext } from "../context/userProvider.jsx"

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Profile = () => {
  const { 
    user: { 
    username,
    savedRecipes
    }, 
    addRecipe, 
    getUserRecipes
  } = useContext(UserContext)

  useEffect(() => {
    getUserRecipes()
  }, [])

  return (
    <div className="profilePage">
      <h1>Welcome {capitalizeFirstLetter(username)}</h1>
      <RecipeForm addRecipe={addRecipe} />
      <h3>Your Saved Recipes</h3>
      <RecipeList recipes={savedRecipes} profileButt={true}/>

    </div>
  )
}

export default Profile

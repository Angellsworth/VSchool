import PropTypes from "prop-types"; // Import PropTypes
import {useContext} from 'react'
import { UserContext } from "../context/userProvider"; 
// import axios from "axios";


export default function Recipe(props) {
  const { 
    title, 
    ingredients, 
    instructions, 
    imgUrl, 
    _id,
    username
  } = props; 

  const {deletedRecipe} = useContext(UserContext) //, editRecipe
// console.log(username)
  return (
    <div className="recipeContainer">
      <h1>{title}</h1>
      <h3>{ingredients}</h3>
      <p>{instructions}</p>
      <img className="recipeImage" src={imgUrl} alt={imgUrl} width={50} />
      
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
      
      <p>posted by: {username}</p> 
      
      
    </div>
  );
}

// Define PropTypes for the Recipe component
Recipe.propTypes = {
  title: PropTypes.string,
  ingredients: PropTypes.string,
  instructions: PropTypes.string,
  imgUrl: PropTypes.string,
  _id: PropTypes.string,
  profileButt: PropTypes.bool, 
  user: PropTypes.object,
  username: PropTypes.string
  // deletedRecipe: PropTypes.func, 
  // editRecipe: PropTypes.func,
};

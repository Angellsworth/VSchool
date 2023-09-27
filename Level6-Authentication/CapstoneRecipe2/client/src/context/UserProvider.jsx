import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types'; // Import PropTypes

const UserContext = React.createContext();
const userAxios = axios.create();

userAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default function UserProvider(props) {
  const initState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "",
    errMsg: ""
  };

  const [userState, setUserState] = useState(initState);
  const [allRecipes, setAllRecipes] = useState([]);

  //Signup Function
  function signup(credentials) {
    axios
      .post("/api/auth/signup", credentials)
      .then(res => {
        const { user, token } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setUserState((prevUserState) => ({
          ...prevUserState,
          user,
          token,
        }));
      })
      .catch(err => handleAuthErr(err.response.data.errMsg))
  }

  //Login
  function login(credentials){
    axios
      .post("/api/auth/login", credentials)
      .then(res => {
        const { user, token } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        getUserRecipes()
        setUserState((prevUserState) => ({
          ...prevUserState,
          user,
          token,
        }));
      })
      .catch(err => handleAuthErr(err.response.data.errMsg))
  }

  //Logout
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUserState({
      user: {},
      token: "",
      issues: [],
    });
  }

  function handleAuthErr(errMsg){
    setUserState(prevState => ({
      ...prevState,
      errMsg
    }))
  }

  function resetAuthErr(){
    setUserState(prevState => ({
      ...prevState,
      errMsg: ""
    }))
  }

  function getUserRecipes(){
    userAxios.get("/api/main/recipe/user")
    .then(res => {
      console.log(res)
      setUserState(prev=>{
// console.log(prev.user.savedRecipes)
        return {
          ...prev,
          user: {
            ...prev.user,
            savedRecipes: res.data
          }
        }
      })
    })
    .catch(err => console.log(err.response.data.errMsg))
  }
  //save Recipe
async function saveRecipe(recipeId) {
    try {
      const res = await userAxios.put('/api/main/recipe', {recipeId, userId: userState.user._id})
      console.log(res.data.recipe)
      // setUserState(prev => ({...prev, savedRecipes : [...prev.savedRecipes, res.data.recipe]}))
      setUserState(prev=>{

        return {
          ...prev,
          user: {
            ...prev.user,
            savedRecipes: [...prev.user.savedRecipes, res.data.recipe]
          }
        }
      })
    } catch (err) {
      console.error(err)
    }
  }

  //Add Recipe
  function addRecipe(newRecipe){
    console.log(newRecipe)
    userAxios
    .post("/api/main/recipe", newRecipe)
    .then((res) => {
      // getAllRecipes();
      setUserState((prevState) => ({
        ...prevState,
        savedRecipes: [...prevState.savedRecipes, res.data],
      }));
    })
    .catch((err) => console.log(err.response.data.errMsg));

  }

  function getAllRecipes() {
    userAxios
      .get("/api/main/recipe")
      .then((res) => setAllRecipes(res.data))
      .catch((err) => console.error(err));
  }

//delete Recipe
  function deletedRecipe(recipeId){ 
    userAxios
    .delete(`/api/main/recipe/$(recipeId)`)
    .then(() => //I took res out because there was an warning error
      setUserState(prevState => ({
      ...prevState,
      recipes: prevState.recipes.filter(recipe => recipe._id !== recipeId)
    }))
    ).catch(err => console.log(err))
  }

  //edit Recipe
  function editRecipe(updates, recipeId) {
    userAxios
      .put(`api/main/recipe/${recipeId}`, updates)
      .then(() => { //took res out because of a warning
        // console.log("inside editissue func context", res.data);
        getAllRecipes();
      })
      .catch((err) => console.log(err));
  }
 


  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout,
        addRecipe,
        resetAuthErr,
        getUserRecipes,
        allRecipes,
        getAllRecipes,
        saveRecipe,
        deletedRecipe,
        editRecipe
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

// Add PropTypes validation for props.children
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UserProvider, UserContext };


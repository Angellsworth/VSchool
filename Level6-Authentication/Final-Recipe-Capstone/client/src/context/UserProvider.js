import React, { useState } from "react";
import axios from "axios";

export const UserContext = React.createContext();

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
    recipes: [],
    errMsg: "",
  };

  const commentState = {
    comments: [],
    errMsg: "",
  };

  const [userState, setUserState] = useState(initState);
  const [allRecipes, setAllRecipes] = useState([]);
  const [comments, setComments] = useState(commentState);
  const [allComments, setAllComments] = useState([]);

  //Signup Function
  function signup(credentials) {
    axios
      .post("/auth/signup", credentials)
      .then((res) => {
        const { user, token } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setUserState((prevUserState) => ({
          ...prevUserState,
          user,
          token,
        }));
      })
      .catch((err) => handleAuthErr(err.response.data.errMsg));
  }

  //Login
  function login(credentials) {
    axios
      .post("/auth/login", credentials)
      .then((res) => {
        const { user, token } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setUserState((prevUserState) => ({
          ...prevUserState,
          user,
          token,
        }));
      })

      .catch((err) => handleAuthErr(err.response.data.errMsg));
  }

  //Logout
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUserState({
      user: {},
      token: "",
      recipes: [],
    });
  }

  function getUserRecipes() {
    // console.log(userState);
    // console.log(JSON.parse(localStorage.getItem("user")) || {});
    userAxios
      .get("/api/recipe/user")
      .then((res) => {
        // console.log(res);
        setUserState((prevState) => ({
          ...prevState,
          recipes: res.data,
        }));
        setAllRecipes(res.data);
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  //Add Recipe
  function addRecipe(newRecipe) {
    // console.log(newRecipe);
    userAxios
      .post("/api/recipe", newRecipe)
      .then((res) => {
        getAllRecipes();

        setUserState((prevState) => ({
          ...prevState,
          recipes: [...prevState.recipes, res.data],
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  //delete Recipe
  function deletedRecipe(recipeId) {
    userAxios
      .delete(`/api/recipe/${recipeId}`)
      .then((res) =>
        setUserState((prevState) => ({
          ...prevState,
          recipes: prevState.recipes.filter(
            (recipe) => recipe._id !== recipeId
          ),
        }))
      )
      .catch((err) => console.log(err));
    // return getUserRecipes()
  }

  //edit Recipe
  function editRecipe(updates, recipeId) {
    userAxios
      .put(`api/recipe/${recipeId}`, updates)
      .then((res) => {
        // console.log("inside editrecipe func context", res.data);
        getAllRecipes();
      })
      .catch((err) => console.log(err));
  }

  function getAllRecipes() {
    userAxios
      .get("/api/recipe")
      .then((res) => setAllRecipes(res.data))
      .catch((err) => console.error(err));
  }

  function handleAuthErr(errMsg) {
    setUserState((prevState) => ({
      ...prevState,
      errMsg,
    }));
  }

  //gets rid of error message sets back to empty string
  function resetAuthErr() {
    setUserState((prevState) => ({
      ...prevState,
      errMsg: "",
    }));
  }

  function likes(recipeId) {
    userAxios.put(`/api/recipe/vote/${recipeId}`).then((res) => {
      console.log(recipeId);
      console.log(res.data);
      setAllRecipes((prevRecipes) => {
        return prevRecipes.map((recipe) =>
          recipeId !== recipe._id ? recipe : res.data
        );
      });
      setUserState((prevRecipes) => ({
        ...prevRecipes,
        recipes: prevRecipes.recipes.map((recipe) =>
          recipeId !== recipe._id ? recipe : res.data
        ),
      }));
    });
  }

  function dislikes(recipeId) {
    userAxios.put(`/api/recipe/downVote/${recipeId}`).then((res) => {
      setAllRecipes((prevRecipes) => {
        return prevRecipes.map((recipe) =>
          recipeId !== recipe._id ? recipe : res.data
        );
      });
      setUserState((prevRecipes) => ({
        ...prevRecipes,
        recipes: prevRecipes.recipes.map((recipe) =>
          recipeId !== recipe._id ? recipe : res.data
        ),
      }));
    });
  }

  function addNewComment(newComment, recipeId) {
    console.log(newComment, recipeId);
    userAxios
      .post(`/api/comment/${recipeId}`, newComment)
      .then((res) => {
        console.log(res.data);
        // getAllRecipes();
        setComments((prevState) => ({
          ...prevState,
          comments: [prevState.comments, res.data],
        }));
      })

      .catch((err) => console.log(err.response.data.errMsg));
    return getAllComments();
  }

  function getAllComments() {
    userAxios
      .get("/api/comment")
      .then((res) => setAllComments(res.data))
      .catch((err) => console.log(err));
  }
  return (
    <UserContext.Provider //add values to this
      value={{
        ...userState,
        signup,
        login,
        logout,
        addRecipe,
        deletedRecipe,
        editRecipe,
        resetAuthErr,
        allRecipes,
        getAllRecipes,
        getUserRecipes,
        handleAuthErr,
        likes,
        dislikes,
        userState,
        addNewComment,
        allComments,
        getAllComments,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

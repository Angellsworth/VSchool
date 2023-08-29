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
    issues: [],
    errMsg: "",
  };

  const commentState = {
    comments: [],
    errMsg: "",
  };

  const [userState, setUserState] = useState(initState);
  const [allIssues, setAllIssues] = useState([]);
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
      issues: [],
    });
  }

  function getUserIssues() {
    // console.log(userState);
    // console.log(JSON.parse(localStorage.getItem("user")) || {});
    userAxios
      .get("/api/issue/user")
      .then((res) => {
        // console.log(res);
        setUserState((prevState) => ({
          ...prevState,
          issues: res.data,
        }));
        setAllIssues(res.data);
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  //Add Issue
  function addIssue(newIssue) {
    // console.log(newIssue);
    userAxios
      .post("/api/issue", newIssue)
      .then((res) => {
        getAllIssues();

        setUserState((prevState) => ({
          ...prevState,
          issues: [...prevState.issues, res.data],
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function deletedIssue(issueId) {
    userAxios
      .delete(`/api/issue/${issueId}`)
      .then((res) =>
        setUserState((prevState) => ({
          ...prevState,
          issues: prevState.issues.filter((issue) => issue._id !== issueId),
        }))
      )
      .catch((err) => console.log(err));
    // return getUserIssues()
  }

  function editIssue(updates, issueId) {
    userAxios
      .put(`api/issue/${issueId}`, updates)
      .then((res) => {
        // console.log("inside editissue func context", res.data);
        getAllIssues();
      })
      .catch((err) => console.log(err));
  }

  function getAllIssues() {
    userAxios
      .get("/api/issue")
      .then((res) => setAllIssues(res.data))
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

  function likes(issueId) {
    userAxios.put(`/api/issue/vote/${issueId}`).then((res) => {
      console.log(issueId);
      console.log(res.data);
      setAllIssues((prevIssues) => {
        return prevIssues.map((issue) =>
          issueId !== issue._id ? issue : res.data
        );
      });
      setUserState((prevIssues) => ({
        ...prevIssues,
        issues: prevIssues.issues.map((issue) =>
          issueId !== issue._id ? issue : res.data
        ),
      }));
    });
  }

  function dislikes(issueId) {
    userAxios.put(`/api/issue/downVote/${issueId}`).then((res) => {
      setAllIssues((prevIssues) => {
        return prevIssues.map((issue) =>
          issueId !== issue._id ? issue : res.data
        );
      });
      setUserState((prevIssues) => ({
        ...prevIssues,
        issues: prevIssues.issues.map((issue) =>
          issueId !== issue._id ? issue : res.data
        ),
      }));
    });
  }
  // console.log("issues");
  // console.log(issues);

  // function addNewComment(newComment, issueId) {
  //   userAxios
  //     .post("/api/comment", newComment)
  //     .then((res) => {
  //       getAllComments();
  //       setUserState((prevState) => ({
  //         ...prevState,
  //         comments: [...prevState.comments, res.data],
  //       }));
  //     })
  //     .catch((err) => console.log(err.response.data.errMsg));
  // }
  // // ADD A COMMENT
  function addNewComment(newComment, issueId) {
    console.log(newComment, issueId);
    userAxios
      .post(`/api/comment/${issueId}`, newComment)
      .then((res) => {
        console.log(res.data);
        // getAllIssues();
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
        addIssue,
        deletedIssue,
        editIssue,
        resetAuthErr,
        allIssues,
        getAllIssues,
        getUserIssues,
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

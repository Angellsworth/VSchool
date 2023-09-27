import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const { logout, token } = props; // token gives you conditional views so it only shows up when you login
  return (
    <>
      <div className="navbar">
        <Link className="links" to="/profile">
          Your Recipes
        </Link>
        <Link className="links" to="/savedRecipes">
          Your Recipes
        </Link>
        <Link className="links" to="/public">
          All Recipes
        </Link>
        <button className="logoutButton" onClick={logout}>
          Logout
        </button>
      </div>
    </>
  );
}

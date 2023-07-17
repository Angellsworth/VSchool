import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const { logout, token } = props; // token gives you conditional views so it only shows up when you login
  return (
    <div className="navbarContainer">
      <h1 className="navbarTitle">RockTheVote</h1>
      <Link className="links" to="/profile">
        Profile
      </Link>
      <Link className="links" to="/public">
        Public
      </Link>
      <button className="logoutButton" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

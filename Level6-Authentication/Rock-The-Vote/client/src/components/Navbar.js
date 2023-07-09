import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const { logout, token } = props; // token gives you conditional views so it only shows up when you login
  return (
    <div className="navbar">
      <Link to="/profile">Profile</Link>
      <Link to="/public">Public</Link>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

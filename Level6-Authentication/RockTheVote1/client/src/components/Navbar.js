import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const { logout } = props;
  return (
    <div className="navbar">
      <Link className="linkTitle" to="/profile">
        Profile
      </Link>
      <Link className="linkTitle" to="/public">
        Public
      </Link>
      <button className="logoutBtn" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

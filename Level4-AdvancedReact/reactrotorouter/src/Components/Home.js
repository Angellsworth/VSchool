import React from "react";
// import useNavigate hook to redirect
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  return (
    <main className="mainSection">
      <h1>Here on the Home Page</h1>
      <h2>I give you a brief look at what we do</h2>
      {/* use Navigate with buttons */}
      <button onClick={() => navigate("/about")}> Go to About Page</button>
      <button onClick={() => navigate(-1)}> Go Back 1</button>
      <button onClick={() => navigate(1)}> Go Forward 1</button>
    </main>
  );
}

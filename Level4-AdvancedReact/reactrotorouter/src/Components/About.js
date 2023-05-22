import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  return (
    <main className="mainSection">
      <h1>About Page</h1>
      <p>
        Here is where I tell you all about the generations of plumbers in my
        family.
      </p>
      <button onClick={() => navigate("/services")}>Services</button>
      <button onClick={() => navigate(-1)}>Go Back 1</button>
      <button onClick={() => navigate(1)}>Go Forward 1</button>
    </main>
  );
}

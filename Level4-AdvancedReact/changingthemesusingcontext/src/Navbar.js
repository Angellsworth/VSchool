import React, { useContext } from "react";
// step 3 consuming context
import { ThemeContext } from "./themeContext";

function Navbar(props) {
  //pass in whole context
  const { color } = useContext(ThemeContext);

  return (
    // use template literals to change context wrap in curly braces
    <header className={`navbar-${color}-theme`}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </header>
  );
}

export default Navbar;

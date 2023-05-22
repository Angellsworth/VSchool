import React, { useContext } from "react";
// step 3 consume context by importing useContext and ThemeContext
import { ThemeContext } from "./themeContext";

function Button(props) {
  // pass in whole context
  const { color, toggleTheme } = useContext(ThemeContext);
  const { size, toggleSize } = useContext(ThemeContext);

  return (
    <div className="dropdown">
      {/* change to using template literals wrapped in curly braces */}
      <button className={`button-${color}-theme`}>
        You are currently {color} mode
      </button>
      <div className={`dropdown-${color}-theme`}>
        <a onClick={toggleTheme} href="#">
          Change me to the opposite of {color}
        </a>
        <button className={`button-${size}-theme`}>
          You are currently {size} size
        </button>
        <a onClick={toggleSize} href="#">
          Change my size
        </a>
      </div>
    </div>
  );
}

export default Button;

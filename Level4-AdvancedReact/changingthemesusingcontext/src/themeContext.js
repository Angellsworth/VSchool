import React, { useState } from "react";

// Step 1 create context
const ThemeContext = React.createContext();

function ThemeContextProvider(props) {
  const [color, setColor] = useState("dark");
  const [size, setSize] = useState("normal");

  //
  const toggleTheme = () => {
    setColor((prevColor) => (prevColor === "dark" ? "light" : "dark"));
  };

  const toggleSize = () => {
    setSize((prevSize) => (prevSize === "normal" ? "big" : "normal"));
  };

  return (
    // step 2 provide context and wrap components
    // add value to the context with value use double curly braces to pass in state and function
    <ThemeContext.Provider
      // passing in javascript object
      value={{
        color: color,
        size: size,
        toggleTheme: toggleTheme,
        toggleSize: toggleSize,
      }}
    >
      {/* any children that are wrapped in themecontext will recieve props */}
      {props.children}
    </ThemeContext.Provider>
  );
}
// step one export
// if more than 1 export, drop default and add curly braces around exports
export { ThemeContext, ThemeContextProvider };

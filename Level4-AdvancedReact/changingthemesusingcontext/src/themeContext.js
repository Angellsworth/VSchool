import React, {useState} from "react"

const ThemeContext = React.createContext()

function ThemeContextProvider(props) {

const [color, setColor] = useState("dark")
const [size, setSize] = useState("normal")

    const toggleTheme = () => {
    setColor(prevColor => prevColor === "dark" ? "light" : "dark")
    }

    const toggleSize = () => {
        setSize(prevSize => prevSize === "normal" ? "big" : "normal")
    }

    return(
        <ThemeContext.Provider 
            value={{
            color: color,
            size: size,
            toggleTheme: toggleTheme,
            toggleSize: toggleSize
          }}>
              {props.children}
          </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider}
import React, {useContext} from "react"
import {ThemeContext} from "./themeContext";
import Button from "./Button"

function Main(props) {

const {color} = useContext(ThemeContext)
const {size} = useContext(ThemeContext)

    return (
        
            <section className={`main-${color}-theme`}> 
                <div className="quote"><q>Color is my daylong obsession, joy, and torment. – Claude Monet</q> 
                </div>  
                
                <Button />
            </section>
       
        
    )
}

export default Main;
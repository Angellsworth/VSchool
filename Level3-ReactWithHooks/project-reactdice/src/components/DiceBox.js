import React from "react"
import Die from "./Die"

export default function DiceBox() {
    const [numbersArray, setNumbers] = React.useState([1, 2, 3, 4, 5])
    const dice = numbersArray.map(number => <Die number={number} />)
    

    function getRandomNumber() {
        const randomNumbers = Math.floor(Math.random()*6)
        return randomNumbers
    }

    function rollTheDice() {
        const mapDice = numbersArray.map(number => getRandomNumber())
        setNumbers(mapDice)
    }
     

    return(
        <div>
            <div className="diceContainer">
                {dice}
            </div>    
            <button onClick={rollTheDice}>Shake Dice</button>
        </div>
        
        
    )
}
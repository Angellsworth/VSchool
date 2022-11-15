import React from "react"
import Square from "./Square"
import audioFile from "../Assets/01 - I Don't Feel Like Dancin' (Radio Edit).mp3"


export default function Squares() {

    const [colorsArray, setColors] = React.useState(['white', 'white', 'white', 'white'])
    const allSquares = colorsArray.map(color => <Square color={color} />)
    
    const [isPlaying,setIsPlaying] = React.useState(false);
    const [audio] = React.useState(new Audio(audioFile));
  
    function smallTimeDj() {
      setColors(prevColors => {
        if(prevColors[0] === "white") {
          return ['black', 'black', 'black', 'black']
        } else {
          return ['white', 'white', 'white', 'white']
        }
      })
    }
  
    function partyDJ() {
      setColors(prevColors => {
        return ['purple', 'purple', prevColors[2], prevColors[3]]
      })
    }
  
    function professionalDJLeft() {
      setColors(prevColors => {
        return [prevColors[0], prevColors[1], 'blue', prevColors[3]]
      })
    }
  
    function professionalDJRight() {
      setColors(prevColors => {
        return [prevColors[0], prevColors[1], prevColors[2], 'blue']
      })
    }
  
    function bigTimeDJ1() {
      setColors(prevColors => {
        return ['pink', prevColors[1], prevColors[2], prevColors[3]]
      })
    }
  
    function bigTimeDJ2() {
      setColors(prevColors => {
        return [prevColors[0], 'red', prevColors[2], prevColors[3]]
      })
    }
  
    function bigTimeDJ3() {
      setColors(prevColors => {
        return [prevColors[0], prevColors[1], 'orange', prevColors[3]]
      })
    }
  
    function bigTimeDJ4() {
      setColors(prevColors => {
        return [prevColors[0], prevColors[1], prevColors[2], 'yellow']
      })
    }

    // let isPlaying = false;
    // let audio = new Audio(audioFile)
    function playPause() {
        if (isPlaying) {
        audio.pause();
        } else {
        audio.play();
        }
        setIsPlaying(!isPlaying);
    }
    
    return(

        <div>
            <div className="gridContainer">
            {allSquares}
        </div>
            <div className="magicButton">
                <button onClick={smallTimeDj}>Small DJ</button>
                <button onClick={partyDJ}>Party Dj</button>
                <button onClick={professionalDJLeft}>Left DJ</button>
                <button onClick={professionalDJRight}>Right DJ</button>
                <button onClick={bigTimeDJ1}>Big DJ One</button>
                <button onClick={bigTimeDJ2}>Big DJ Two</button>
                <button onClick={bigTimeDJ3}>Big DJ Three</button>
                <button onClick={bigTimeDJ4}>Big DJ Four</button> 


                    <button id="ASong" className="songButton" onClick={playPause}>
                        Music
                    </button>
            </div>
        </div>
        

        
    )         
}
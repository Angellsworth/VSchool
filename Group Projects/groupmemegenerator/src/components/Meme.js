import React, { useState, useEffect } from "react"
import Buttons from "./Buttons"
import axios from "axios"

export default function Meme() {
//  created state to track Top-Bottom texts and current meme
//  created state array to track our saved user created memes 
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
        key: '',
        isDeleted: "False"
    })
    console.log(meme)
    const [allMemes, setAllMemes] = useState([])


//  our useEffect function to make out api call
    
    useEffect(() => {
        console.log("useffect triggered")
        axios.get('https://api.imgflip.com/get_memes')
        
        .then(res => {console.log(res.data.data.memes) 
            setAllMemes(res.data.data.memes)})
        .catch(error => console.log(error))
        
      }, []);

      const [saveMeme, setSaveMeme] = useState([])

      function handleSubmit (e) {
          e.preventDefault()
           //meme.topText + meme.bottomText + meme.randomImage + `,`
          setSaveMeme(prevSaveMeme => [...prevSaveMeme, meme])
          setMeme({topText: "",
          bottomText: "",
          randomImage: meme.randomImage
          })
          console.log(saveMeme + `yo`)
      }

//  getMemeImage function to grab our random meme

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        const index = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url,
            index
        }))
        
    }

// handleChange function to add text

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
     //map over array before rendering buttons component
    
    const savedMeme = saveMeme.map((uMeme, index) => (
        <Buttons  
            fish={index} 
            id={index} 
            data={uMeme} 
            userState={saveMeme} 
            setSaveMeme={setSaveMeme}
        />
    ))

// render buttons below last Div element before the Main element
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt=""/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            <button onClick={handleSubmit}>SAVE MY MEME</button>
            {savedMeme}
        </main>
    )
}
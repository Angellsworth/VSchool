import React from "react"


export default function Meme(props) {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name,value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text" 
                    placeholder="Top Text" 
                    className="formInput"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}

                />
                <input 
                    type="text" 
                    placeholder="Bottom Text" 
                    className="formInput"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />

                <button 
                    className="formButton" 
                    onClick={getMemeImage} 
                    > 
                    Get a new image 🖼 
                </button>

            </div>

            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>

        </main>
        
    )
}

// difference between Props and State

// Props- refers to properties being passed into a component in order for it to work correctly, 
// similar to how a function receives parameters: "from above." A component receiving props is not allowed to 
// modify those props. (They are IMMUTABLE) 

// State- refers to values that are managed by the Component, similar to variables declared inside a 
// function. Any time you have changing values that should be saved/displayed, you'll likely be using state

// Quiz - 

// 1. how would you describe the concept of "state"?

//         A way for React to remember saved values from within a component.
//         This is similar to declaring variables from within a component,
//         with a few added bonuses (which we'll get to later)

// 2. When would you want to use props instead of state?

//         Anytime you want to pass data into a component so that
//         component can determine what will get displayed on the
//         screen.

// 3. When would you want to use state instead of props?

//         Anytime you want a component to maintain some values from
//         within the component. (And "remember" those values even
//         when React re-renders the component)

// 4. What does "immutable" mean? 

//        Immutable means unchanging

//     Are props immutable? 

//         Props are immutable.

//     Is state immutable?

//         State is mutable or changeable.
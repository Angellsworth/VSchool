import React, { useState } from "react"

export default function Buttons(props){
    console.log(props.data)
    console.log(props.fish)
    console.log(props.data.isDeleted)
    const [visible, setVisible] = useState(!true)
    const [goAway, setGoAway] = useState(true)
    const [memeInputs, setMemeInputs] = useState({
        topText: props.data.topText,
        bottomText: props.data.bottomText
    })

    const editMe = () => {
        setVisible((prev) => !prev);   
    }
// donno if this fully worky lol id a lil sus
    const updateMemeItem = (id, updatedItem) => {
        console.log(`*****IN BUTT COMPONENT*****`)
        console.log(`updateMemeItem function has been called`)
        props.setSaveMeme(prevsaveMeme => {
           return prevsaveMeme.map((item, index)=> {
                if (index === id) {
                    return updatedItem
                }
                else {
                    return item
                }
             
            })
            
        })
        
    }
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setMemeInputs(prevState=>{
            return {
                ...prevState,
                [name]:value
                
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('form has been submitted')
        updateMemeItem(props.id, memeInputs)
    }

    const deleteMe = () => {
        console.log('go away')
        setGoAway((prev) => !prev)  
    }

    return (
        <div >
            {goAway ?
                <div>
                    {visible ?
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="topText"
                                value={memeInputs.topText}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="bottomText"
                                value={memeInputs.bottomText}
                                onChange={handleChange}
                            />
                        </form>
                    :
                    <>
                    <img src={props.data.randomImage} className="bmeme--image" alt=""/>
                    <h2 className="bmeme--text top">{props.data.topText}</h2>
                    <h2 className="bmeme--text bottom">{props.data.bottomText}</h2>
                    </>
                    }

                    <button onClick={editMe}>{visible ? "Close" : 'Edit'}</button>
            
                    <button onClick={deleteMe}>DELETE</button>
                    
                </div>
                :
                <>
                </>
            }
        </div>
    )
}
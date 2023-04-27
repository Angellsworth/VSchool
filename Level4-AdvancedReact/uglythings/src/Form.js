import React, {useState, useContext} from "react"
import { Context } from "./Context"
import axios from "axios"


function Form(props) {
    const {postThings} = useContext(Context)
    const[uglyThing, setUglyThing] = useState({title: "", description: "",imgUrl: ""})

    function handleChange(e){
        console.log("handlechange works!")
        const {title, description, imgUrl} = e.target
        setUglyThing(prevThing => {
            return {
                ...prevThing,
                [e.target.name]: e.target.value
            }
        })
    }
    console.log(uglyThing)
    function handleSubmit(e) {
        e.preventDefault()
        console.log("handleSubmit Works!")
        postThings(uglyThing)
        setUglyThing({title: "", description: "",imgUrl: ""})
    }


   
    return (
        <main className="formContainer"> 
            <form className="form" onSubmit={handleSubmit}> 
            <input 
                        placeholder="Title" 
                        type="text"
                        name="title"
                        className="formInput"
                        value={uglyThing.title}
                        onChange={handleChange}
                    />
                    <input 
                        placeholder="Description" 
                        type="text" 
                        name="description"
                        className="formInput"
                        value={uglyThing.description}
                        onChange={handleChange}
                    />
                    <input 
                        placeholder="URL" 
                        type="text" 
                        name="imgUrl"
                        className="formInput"
                        value={uglyThing.imgUrl}
                        onChange={handleChange}
                    />
            
                <button 
                    className="formButton">Add Ugly Image</button> 
            </form> 
        </main>);
}

export default Form;
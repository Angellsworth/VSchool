import React, {useState} from "react"

function Form(props) {  
    const [addName, setAddName] = useState("")

    const handleChange = (e) => {
        setAddName( prev =>({...prev,[e.target.name]: e.target.value}))
    } 
e
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addToList(addName)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="First Name"
                name="firstName"
                value={addName.firstName}
                onChange={handleChange}
            />
            <input 
                placeholder="Last Name"
                name="lastName"
                value={addName.lastName}
                onChange={handleChange}
            />

            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;
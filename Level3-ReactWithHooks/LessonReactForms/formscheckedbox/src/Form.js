import React from "react"

export default function Form() {

    /*Make it an object to handle more than one thing*/
    const [formData, setFormData] = React.useState({
        firstName: "", 
        lastName: "", 
        email: "", 
        comments: "",
        isFriendly: true
    })
    
        console.log(formData)

    function handleChange(event) {

        const {name, value, type, checked} = event.target

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    
    
    return (
        <form>

            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />

            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />

            <input
                type="text"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />

            <textarea
                type="text"
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
                value={formData.comments}
            />

            <input 
                type="checkbox"
                id="isFriendly"
                checked={formData.isFriendly}
                name="isFriendly"
                onChange={handleChange}
            
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />

        </form>
    )
}
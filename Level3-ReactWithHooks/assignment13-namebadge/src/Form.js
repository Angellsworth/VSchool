import React, { useState } from "react"
import Badge from "./Badge"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phone: "",
            favoriteFood: "",
            aboutYourself: "",
        }  
    )

    const [badgeArray, setBadgeArray] = React.useState([ ])

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
        }
     })       
    }

    function handleSubmit(event) {
        event.preventDefault()
        
        setBadgeArray(prevBadgeArray => {
            return [...prevBadgeArray, 
                {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    phone: formData.phone,
                    email: formData.email,
                    placeOfBirth: formData.placeOfBirth,
                    favoriteFood: formData.favoriteFood,
                    aboutYourself: formData.aboutYourself
                }]
        })
    }

    const badgeElements = badgeArray.map((badge,index) => {
        return <Badge key = {index} {...badge} />
    })
    return(
        <div >
            <form className="form" 
                    onSubmit={handleSubmit}>
                
                        <input 
                            type= "text"
                            minLength= {3}
                            placeholder= "First Name"
                            name= "firstName"
                            value= {formData.firstName}
                            onChange= {handleChange}
                            required
                        />
                        <input 
                            type= "text"
                            minLength= {3}
                            placeholder= "Last Name"
                            name= "lastName"
                            value= {formData.lastName}
                            onChange= {handleChange}
                            required
                        />
                        <input 
                            type= "text"
                            minLength= {3}
                            placeholder= "Email"
                            name= "email"
                            value= {formData.email}
                            onChange= {handleChange}
                            required
                        />
                        <input 
                            type= "text"
                            minLength= {3}
                            placeholder= "Place of Birth"
                            name= "placeOfBirth"
                            value= {formData.placeOfBirth}
                            onChange= {handleChange}
                            required
                        />
                       
                        <input 
                            type= "number"
                            minLength= {3}
                            placeholder= "Phone"
                            name= "phone"
                            value= {formData.phone}
                            onChange= {handleChange}
                            required
                        />
                        <input 
                            type= "text"
                            minLength= {3}
                            placeholder= "Favorite Food"
                            name= "favoriteFood"
                            value= {formData.favoriteFood}
                            onChange= {handleChange}
                            required
                        />
                        <textarea 
                            className = "aboutYourself" 
                            type = "text" 
                            minLength= {3}
                            placeholder="Tell us about yourself" 
                            name= "aboutYourself"
                            value= {formData.aboutYourself}
                            onChange= {handleChange}
                            required
                        />

                        <button>Submit</button>
            </form>

            <ul>{badgeElements}</ul>
            


        </div>
    )
}
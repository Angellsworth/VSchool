//form is for adding new list items
import React, {useState} from 'react';

function Form(props) {

    const [postInputs, setPostInputs] = useState({ 
        title: "",
        description: ""
    })

    const handleChange = (e) => { 
        const {name, value} = e.target
        setPostInputs(prevState=>{
            return ({
                ...prevState,
                [name]:value
            })
        })
    }

    const handleSubmit = (e) => { 
        e.preventDefault()
        props.submit(postInputs)
        setPostInputs({ 
            title: "",
            description: ""
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder='Title'
                    name="title"
                    value={postInputs.title}
                    onChange={handleChange}
                />
                <input 
                    placeholder='Description'
                    name="description"
                    value={postInputs.description}
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Form;
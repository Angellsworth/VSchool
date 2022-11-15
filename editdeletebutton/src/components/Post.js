import React, {useState} from 'react';

function Post(props) {

    const [showForm, setShowForm] = useState(false)

    const [postInputs, setPostInputs] = useState({ 
        //instead of having the placeholder be empty with "" use props to fill with current updated value 
        title: props.title,
        description: props.description
    })

    const toggleShowForm = () => { 
        setShowForm(prev=>!prev)
    }

    const handleChange = (e) => { 
        const {name, value} = e.target
        setPostInputs(prevState=>{
            return ({
                //must spread to preserve both values
                ...prevState,
                [name]:value
            })
        })
    }
//here is where updateBlogItem is used
    const handleSubmit = (e) => { 
        e.preventDefault()
        console.log("form was submitted and these are the values: ")
        console.log(postInputs)
        props.updateBlogItem(props.id, postInputs)
    }

    return (
        <div className="blog-post">
            {showForm ? 
                <form onSubmit={handleSubmit}>
                    <input 
                        name="title"
                        value={postInputs.title}
                        onChange={handleChange}
                    />
                    <input 
                        name="description"
                        value={postInputs.description}
                        onChange={handleChange}
                    />
                    {/* if button is inside form you don't need to specify type unless you have more one button */}
                    <button>Submit</button>
                </form>
            :
            <>
                {/* pulling from state */}
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </>
            }
            <button onClick={toggleShowForm}>{showForm ? "Close" : "Edit"}</button>
        </div>
    );
}

export default Post;
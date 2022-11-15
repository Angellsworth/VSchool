import React from 'react';
import Form from './components/Form';
import Post from './components/Post';

function App(props) {
              //meme, setMeme
    const [blogPosts, setBlogPosts] = React.useState([
        {
            title: "Title 1", 
            description: "Description 1"
        },
        {
            title: "Title 2", 
            description: "Description 2"
        },
        {
            title: "Title 3", 
            description: "Description 3"
        }
    ])
//handleSubmit will call this function then update state in blogPosts state
//updateBlogItem manipulates state of app component [blogPosts, setBlogPosts] above
    const updateBlogItem = (id, updatedItem) => { 
        setBlogPosts(prevBlogPosts => { 
            return prevBlogPosts.map((item, index)=> { 
                if (index === id) { 
                    return updatedItem
                }
                else {
                    return item
                }
            })
        })
    }
//helper component to add new item with form.js
    const addNewItem = (newItem) => {
        setBlogPosts(prev=>[...prev, newItem])
    }
//pass down updateBlogItem function as a prop so Post.js can use it
    const list = blogPosts.map((post, index) => {
    return <Post 
        key={index+post.title} 
        title={post.title} 
        description={post.description}
        updateBlogItem={updateBlogItem}
        id={index}
    />})

    return (
        <div>
            <h2>Add New Blog Post</h2>
            <Form submit={addNewItem}/>
            <h2>List of Blog Posts</h2>
            {list}
        </div>
        )
    ;
}

export default App;
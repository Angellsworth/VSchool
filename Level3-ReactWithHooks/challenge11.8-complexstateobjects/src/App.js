import React from "react"
import './App.css';
import Star from "./Star"


function App() {
  // Parent Component
  const [contact, setContact] = React.useState({
    firstName: "Jane",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true
  })
  // toggle function is in Parent Component
  function toggleFavorite() {
    setContact(prevContact => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite
      }
    })
  }
  return (
    <main>
      <article className="card">
        <img src={require (`./images/user.png`)}  className="card--image"/>
        <div className="card--info">
                    {/*Star is Child Component of Parent Component not a Dom element*/}
                    {/* handleClick makes it so we can passes from Parent to Child */}
                    <Star isFilled={contact.isFavorite} handleClick={toggleFavorite}/>


                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>

                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
      </article>
      
    </main>
  );
}

export default App;

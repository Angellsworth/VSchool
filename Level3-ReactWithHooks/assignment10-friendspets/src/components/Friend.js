import React from 'react';
import Pet from "../components/Pet"

export default function Friend(props) {
  // const image = `../Images/${props.coverImg}`
  const friendPets = props.pets.map(pet => {
    console.log(props, "props")
    return (
      <Pet 
        name = {pet.name}
        breed = {pet.breed}
      />
    )
  })
    return (

      <div className="friendDiv">

<img src={require (`../Images/${props.coverImg}`)} className='cardImage' />
        
        <h3 className="friendName">This is my friend {props.name} he is {props.age} years old. 
                                  Here is a list of {props.name}'s pets.</h3>
        {friendPets}

      </div>
    );
  }
  
  
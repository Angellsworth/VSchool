import React from 'react';

export default function Pet(props) {


    return (
      <div className="petDiv">
        <h3 className="petName"><span class="dotPet"></span>{props.name}, who is a {props.breed}. </h3>
        
      </div>
    );
  }
  
  
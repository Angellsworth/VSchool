import React from 'react';
import data from "../data"
import Friend from "../components/Friend"
// import Pet from "../components/Pet"

export default function FriendList() {

  const myFriends = data.map(friend => {
    return (
      <div className="friendCard">
          <Friend 
            // name={friend.name}
            // age = {friend.age}
            // coverImg = {friend.coverImg}
            // pets = {friend.pets}

           {...friend}
          />
          <br/>
      </div> 
    )
  })  
  
  return(
    <div>
    <div className="nav">
      <h1 className="friendTitle">F
                     <span class="dotRed"></span>
                                  r
                    <span class="dotBlue"></span>
                                  i
                    <span class="dotYellow"></span>
                                  e
                    <span class="dotRed"></span>
                                  n
                    <span class="dotBlue"></span>
                                  d
                    <span class="dotYellow"></span>
                                  s </h1>
        <h2 className="friendTitle2">...and their pets</h2>
    </div>
    {myFriends}
    </div>
  )
}
  
  
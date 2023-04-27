import React, { useState, useContext, useEffect } from "react";
import { Context } from "./Context.js";
import UglySingleCard from "./UglySingleCard";

function UglyCardList() {
  const { uglyArray, getThings } = useContext(Context);

  useEffect(() => {
    getThings();
  }, []);

  console.log(uglyArray);

  return (
    <div className="cardContainer">
      <div className="cardList">
        <h1>Behold the Ugly</h1>
      </div>
      {uglyArray.map((card, key) => {
        return <UglySingleCard card={card} key={key} />;
      })}
    </div>
  );
}

export default UglyCardList;

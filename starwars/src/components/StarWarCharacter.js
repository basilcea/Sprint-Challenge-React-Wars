import React from "react";
import "./StarWars.css";

const StarWarCharacter = ({
  name,
  gender,
  height,
  mass,
  eyeColor,
  hairColor,
  skinColor,
  url
}) => {
  return (
    <div className="character">
      <h2>{name}</h2>
      <div className="character-details">
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Mass: {mass}</p>
        <p>Eye Color: {eyeColor}</p>
        <p>Hair Color: {hairColor}</p>
        <p>Skin Color: {skinColor}</p>
        {/*<p><a href ={url} alt =''>More About {name} </a></p>*/}
      </div>
    </div>
  );
};
export default StarWarCharacter;

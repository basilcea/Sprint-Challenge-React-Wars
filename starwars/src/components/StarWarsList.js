import React from "react";
import Characters from "./StarWarCharacter";
import "./StarWars.css";

const StarWarsList = ({ list  , nextPage , previousPage}) => {
  return (
    <div className="characterList">
      <h1>Star Wars Characters</h1>
      {list.map(todo => (
        <Characters
          key={todo.url}
          name={todo.name}
          gender={todo.gender}
          height={todo.height}
          mass={todo.mass}
          eyeColor={todo.eye_color}
          hairColor={todo.hair_color}
          skinColor={todo.skin_color}
          url={todo.url}
        />
      ))}
      <div>
      <button onClick={() =>previousPage}>Previous</button>
      <button onClick={() =>nextPage}>Next</button>
      </div>
    </div>
  );
};
export default StarWarsList;

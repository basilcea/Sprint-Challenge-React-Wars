import React from "react";
import Characters from "./StarWarCharacter";
import "./StarWars.css";

const StarWarsList = ({ list  , nextPage , previousPage,next ,previous}) => {
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
      { previous ? <button onClick={() =>previousPage(previous)}>Previous</button> : null}
      {next ? <button onClick={() =>nextPage(next)}>Next</button> :null}
      </div>
    </div>
  );
};
export default StarWarsList;

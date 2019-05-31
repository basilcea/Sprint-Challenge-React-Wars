import React from 'react';
import Characters from './StarWarCharacter';
import './StarWars.css';

const StarWarsList = ({list} ) => {
    return(
        <div className ='characterList'>
            <h1>Star Wars Characters</h1>
            {list.map(todo => <Characters key={todo.url} 
                name={todo.name}
                gender={todo.gender} 
                height ={todo.height}
                mass={todo.mass}
                eyeColor ={todo.eye_color}
                hairColor ={todo.hair_color}
                skinColor ={todo.skin_olor}
                url ={todo.url} /> )}
        </div>
    )


}
export default StarWarsList;
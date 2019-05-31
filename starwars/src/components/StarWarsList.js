import React from 'react';
import Characters from './StarWarCharacter';

const StarWarsList = ({list} ) => {
    return(
        <div>
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
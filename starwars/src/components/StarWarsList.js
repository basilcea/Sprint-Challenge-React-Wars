import React from 'react';
import Characters from './StarWarCharacter';

const StarWarsList = ({List ,name ,gender, height ,mass , eyeColor, hairColor ,skinColor , url} ) => {
    return(
        <div>
            {List.map(todo => <Characters key={todo.url} 
                name={name}
                gender={gender} 
                height ={height}
                mass={mass}
                eyeColor ={eyeColor}
                hairColor ={hairColor}
                skinColor ={skinColor}
                url ={url} /> )}
        </div>
    )


}
export default StarWarsList;
import React from 'react';

const StarWarCharacter = ({name ,gender,height ,mass , eyeColor, hairColor ,skinColor , url}) =>{
    return (
        <div>
            <h2>Name:{name}</h2>
            <div>
                <p>Gender: {gender}</p>
                <p>Height: {height}</p>
                <p>Mass: {mass}</p>
                <p>Eye Color: {eyeColor}</p>
                <p>Hair Color: {hairColor}</p>
                <p>Skin Color: {skinColor}</p>
                <p><a href ={url} alt =''>Learn More about {name} </a></p>
            </div>
        </div>
    )
}
export default StarWarCharacter;
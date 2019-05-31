import React from 'react';

const StarWarCharacter = (props) =>{
    return (
        <div>
            <h2>Name:{props.name}</h2>
            <div>
                <p>Gender: {props.gender}</p>
                <p>Height: {props.height}</p>
                <p>Mass: {props.mass}</p>
                <p>Eye Color: {props.eyeColor}</p>
                <p>Hair Color: {props.hairColor}</p>
                <p>Skin Color: {props.skinColor}</p>
                <p><a href ={props.url} alt =''>Learn More about {props.name} </a></p>
            </div>
        </div>
    )
}
export default StarWarCharacter;
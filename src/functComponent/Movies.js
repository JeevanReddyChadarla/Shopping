import React from 'react';
import './styles.css'
function Movies(props){
    return(
        <div className='movie-card'>
        <img src={props.banner}/>
        <br />
        <label>Likes: {props.likes} <br /> Name: {props.name} <br /> Hero: {props.hero}</label>
        </div>
    )
}

export default Movies;
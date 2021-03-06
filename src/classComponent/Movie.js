import React, {Component} from 'react';
import './styles.css'
class Movie extends Component{
    render(){
        return(
            <div className='class-movie-card'>
            <img src={this.props.banner} />
            <br />
            <label>Likes: {this.props.likes}  <br />Name: {this.props.name} <br /> Hero: {this.props.hero}</label>
            </div>
        )
        }
}

export default Movie;
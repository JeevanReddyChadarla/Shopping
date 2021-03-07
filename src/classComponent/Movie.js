import React, {Component} from 'react';
import Movies from '../functComponent/Movies';
import './styles.css'
import movies from './movies'
class Movie extends Component{

    state= {...movies}

    getMovies = (movie) => {
        return <Movies name={movie.name} likes={movie.likes} banner={movie.banner} />
    }

    render(){
        return(
            <div className='movies-section'>
            {/* {this.getMovies(this.state.avengers.name, this.state.avengers.likes, this.state.avengers.banner)} */}
            {/* {this.getMovies(this.state.heist.name, this.state.heist.likes, this.state.heist.banner)} */}
            {this.getMovies(this.state.avengers)}
            {this.getMovies(this.state.heist)}
            {this.getMovies(this.state.crimes)}
            </div>
        )
        }
}

export default Movie;
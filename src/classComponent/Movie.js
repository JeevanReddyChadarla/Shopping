import React, {Component} from 'react';
import Movies from '../functComponent/Movies';
import './styles.css'
class Movie extends Component{
    render(){
        return(
            <div className='movies-section'>
            <Movies 
                name='Avengers' 
                likes='320k' 
                banner='https://images-na.ssl-images-amazon.com/images/I/81ExhpBEbHL._SY445_.jpg' 
                hero='Robert Jr' 
            />
            <Movies 
                name='Heist'
                likes='880k'
                banner='https://media1.popsugar-assets.com/files/thumbor/nenOyZ9yShhaU723TiDgOhRAUfQ/560x0:2000x1440/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/07/31/789/n/44498184/f1e7dd4c5f245b63376cd6.99549863_/i/money-heist-season-5-cast.jpg'
                hero='Professor'
            />
            <Movies 
                name='Friends'
                likes='10M'
                banner= 'https://pyxis.nymag.com/v1/imgs/7b8/293/c01025df7559d43ad3ef939ec23f02eee8-30-friends-gossip-tk.rsquare.w1200.jpg'
                hero='Joe Tribyani'
            />
            </div>
        )
        }
}

export default Movie;
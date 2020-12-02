import React, { Component } from 'react';
import './card.css'

class Card extends Component {
    
    render() { 
        return (
         <div id="card">
            <div id="head">
                <h1>{this.props.name}</h1>{/* 
                <h3>Lorem ipsum dolor sit.</h3> */}
                <img src={`https://robohash.org/set_set4/13${this.props.id}.162.116.133.png`} alt="#"/>
            </div>   
         </div> );
    }
}
 
export default Card 
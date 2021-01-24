import React, { Component } from 'react';
import './Rating.css';

export default class Rating extends Component {
   render() {
      return (
         <div>
            <h2>Rating: {this.props.rating}</h2>
         </div>
      )
   };
};

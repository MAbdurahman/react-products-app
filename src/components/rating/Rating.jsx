import React, { Component } from 'react';
import { IconContext } from "react-icons";
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';
import './Rating.css';

export default class Rating extends Component {
   constructor(props) {
      super(props);
      this.state = {rating: this.props.rating};
   }

   render() {
      return (
         <IconContext.Provider value={{ className: 'react-icons-star' }}>
            <div>
               <h2>Rating: {this.state.rating}</h2>
               {this.state.rating >= 1 ? (
                  <IoIosStar />
               ) : (
                     <IoIosStarOutline />
                  )}
               {this.state.rating >= 2 ? (
                  <IoIosStar />
               ) : (
                     <IoIosStarOutline />
                  )}
               {this.state.rating >= 3 ? (
                  <IoIosStar />
               ) : (
                     <IoIosStarOutline />
                  )}
               {this.state.rating >= 4 ? (
                  <IoIosStar />
               ) : (
                     <IoIosStarOutline />
                  )}
               {this.state.rating >= 5 ? (
                  <IoIosStar />
               ) : (
                     <IoIosStarOutline />
                  )}
            </div>
         </IconContext.Provider>

      )
   };
};

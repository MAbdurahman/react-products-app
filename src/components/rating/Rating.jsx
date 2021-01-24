import React, { Component } from 'react';
import { IconContext } from "react-icons";
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';
import './Rating.css';

export default class Rating extends Component {

   render() {
      return (
         <IconContext.Provider value={{ className: 'react-icons-star' }}>
            <div>
               <h2>Rating: {this.props.rating}</h2>
               {this.props.rating >= 1 ? (
                  <IoIosStar />
               ) : (
                     <IoIosStarOutline />
                  )}
               {this.props.rating >= 2 ? (
                  <IoIosStar />
               ) : (
                     <IoIosStarOutline />
                  )}
               {this.props.rating >= 3 ? (
                  <IoIosStar />
               ) : (
                     <IoIosStarOutline />
                  )}
               {this.props.rating >= 4 ? (
                  <IoIosStar />
               ) : (
                     <IoIosStarOutline />
                  )}
               {this.props.rating >= 5 ? (
                  <IoIosStar />
               ) : (
                     <IoIosStarOutline />
                  )}
            </div>
         </IconContext.Provider>

      )
   };
};

import React, { Component } from 'react';
import { IconContext } from "react-icons";
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';
import './Rating.css';

const styles = {
   starStyle: {
      // color: '#255C99'
      color: '#BF4E30',
      fontSize: '1.5rem'
   }
}

export default class Rating extends Component {
   constructor(props) {
      super(props);
      this.state = { 
         rating: this.props.rating,
         numOfReviews: this.props.numOfReviews
      };
   }


   handleClick(ratingValue) {
      this.setState({ rating: ratingValue });
   }

   render() {
      return (
         // <IconContext.Provider value={{ className: 'react-icons-star' }}>
         <div >
            {/* <h2>Rating: {this.state.rating}</h2> */}
            {this.state.rating >= 1 ? (
               <IoIosStar style={styles.starStyle} onClick={this.handleClick.bind(this, 1)} />
            ) : (
                  <IoIosStarOutline style={styles.starStyle} onClick={this.handleClick.bind(this, 1)} />
               )}
            {this.state.rating >= 2 ? (
               <IoIosStar style={styles.starStyle} onClick={this.handleClick.bind(this, 2)} />
            ) : (
                  <IoIosStarOutline style={styles.starStyle} onClick={this.handleClick.bind(this, 2)} />
               )}
            {this.state.rating >= 3 ? (
               <IoIosStar style={styles.starStyle} onClick={this.handleClick.bind(this, 3)} />
            ) : (
                  <IoIosStarOutline style={styles.starStyle} onClick={this.handleClick.bind(this, 3)} />
               )}
            {this.state.rating >= 4 ? (
               <IoIosStar style={styles.starStyle} onClick={this.handleClick.bind(this, 4)} />
            ) : (
                  <IoIosStarOutline style={styles.starStyle} onClick={this.handleClick.bind(this, 4)} />
               )}
            {this.state.rating >= 5 ? (
               <IoIosStar style={styles.starStyle} onClick={this.handleClick.bind(this, 5)} />
            ) : (
                  <IoIosStarOutline style={styles.starStyle} onClick={this.handleClick.bind(this, 5)} />
               )}
               &nbsp;&nbsp;<span className='review'>reviews&nbsp;{this.props.numOfReviews}</span>
         </div>
         // </IconContext.Provider>

      )
   };
};

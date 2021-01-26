import React, { Component } from 'react';
import { Container, Media } from 'react-bootstrap';
import Rating from '../rating/Rating';
import './Product.css';

export default class Product extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <Container>
            <Media>
               <img
                  width={128}
                  height={128}
                  className='mr-3'
                  src={this.props.data.imageUrl}
                  alt='Image'
               />
               <Media.Body>
                  <h5>{this.props.data.productName}</h5>
                  {this.props.data.releasedDate}
                  <Rating
                     rating={this.props.data.rating}
                     numOfReviews={this.props.data.numOfReviews}
                  />
                  <p>
                     {this.props.data.description}
                  </p>
               </Media.Body>
            </Media>
         </Container>
      );
   };
};

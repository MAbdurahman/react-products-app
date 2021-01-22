import React, { Component } from 'react';
import './Products.css';

export default class Products extends Component {
   render() {
      const products = ['Learning React', 'Pro React', 'Beginning React'];
      const listProducts = products.map(product =>
         <li key={product.toString()}>{product}</li>
      );
      return (
         <div>
            <ul>{listProducts}</ul>
         </div>
      )
   };
};
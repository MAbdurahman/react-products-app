import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import Products from './components/products/Products';
import Rating from './components/rating/Rating';

export default class App extends Component {
  formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  render() {
    const user = {
      firstName: 'Mahdi',
      lastName: 'Abdurrahman'
    }
    const isValid = false;

    return (
      <div className='App'>
        <h1>react-products-app</h1>
        <Products />
        <h2>Hello, {this.formatName(user)}</h2>
        <Button variant='primary' disabled={!isValid} >Default</Button>
        <Rating rating='1' />
        <Rating rating='2' />
        <Rating rating='3' />
        <Rating rating='4' />
        <Rating rating='5' />
      </div>
    )
  }
};

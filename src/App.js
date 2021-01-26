import React, { Component } from 'react';
import Products from './components/products/Products';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div>
        <h1 className='heading'>React-Products-App</h1>
        <Products />
      </div>
    )
  }
};

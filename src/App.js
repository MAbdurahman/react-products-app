import React, { Component } from 'react';
import Products from './components/products/Products';
import JumboTronComponent from './components/jumbotron/JumboTronComponent';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div className='align-center'>
        <h1 className='heading'>React-Products-App</h1>
        <JumboTronComponent />
        <Products />
      </div>
    )
  }
};

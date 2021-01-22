import React, { Component } from 'react';
import './App.css';
import Products from './components/Products';

export default class App extends Component {
  formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  render() {
    const user = {
      firstName: 'Mahdi',
      lastName: 'Abdurrahman'
    }
    return (
      <div className='App'>
        <h1>react-products-app</h1>
        <Products />
        <h2>Hello, {this.formatName(user)}</h2>
      </div>
    )
  }
};

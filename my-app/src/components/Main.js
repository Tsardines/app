import React, { Component } from 'react';

import Left from './Left.js';
import Right from './Right.js';

import '../App.css';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <h1>Main</h1>

        <Left />
        <Right />

    </div>

    );
  }
}

export default Main;

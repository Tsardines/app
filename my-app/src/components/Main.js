import React, { Component } from 'react';

import Left from './Left.js';


class Main extends Component {
  render() {
    return (
      <div className="Main">
        <h1>Main</h1>

      <div className="Left">
        <Left />
      </div>

    </div>

    );
  }
}

export default Main;

import React, { Component } from 'react';

import Info from './Info.js';

import './Right.css';

// import { Box, Container } from 'bloomer';

import Cells from './Cells.js';

class Right extends Component {
  render() {
    return (
      <div className="right">
        <h1>Right</h1>

        <Info />

      </div>

    )
  }
}


export default Right;

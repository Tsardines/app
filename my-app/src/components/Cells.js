import React, { Component } from 'react';
// import { Box, Container } from 'bloomer';

import './Left.css';

class Cells extends Component {
  render() {
    return (
      <div className="cells">
        <h1>Cells</h1>

        <div className="box">box</div>
        <div className="box">box</div>
        <div className="box">box</div>
        <div className="box">box</div>

      </div>
    )
  }
}


export default Cells;

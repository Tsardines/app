import React, { Component } from 'react';

import Main from './components/Main.js';
import './App.css';

const data = require('../src/FakeOrg.json')
for (var i = 0; i < data.length; i++) {
  let obj = data[i];
  console.log("Name: " + obj.name );
}

// .then(res => res.json())
// .then(data => console.log(data))

class App extends Component {

  render() {
    return (
      <div className="App">

        <Main />
        

      </div>
    );
  }
}

export default App;

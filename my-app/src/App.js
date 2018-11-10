import React, { Component } from 'react';

import Main from './components/Main.js';

import './App.css';

// const API_KEY = "fc597bbea3829ac59096de076ebff2a8ada85fa5";
// GiantBomb API

const API_KEY = "31gJzTauAdE8SL1ylx6WQ5DMfemY7F4kyx4Ztezb";
// NASA Pic of the Day API

class App extends Component {
  constructor(props) {
    super(props)
  console.log('howdy!')
}

  render() {
    return (
      <div className="App">

        <Main />



      </div>
    );
  }
}

export default App;

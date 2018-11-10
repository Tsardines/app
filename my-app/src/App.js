import React, { Component } from 'react';

import Main from './components/Main.js';
import Info from './components/Info.js';

import './App.css';

// const API_KEY = "fc597bbea3829ac59096de076ebff2a8ada85fa5";
// GiantBomb API

const API_KEY = "31gJzTauAdE8SL1ylx6WQ5DMfemY7F4kyx4Ztezb";
// NASA Pic of the Day API

class App extends Component {

  state = {
    copyright: undefined,
    date: undefined
  }

  getInfo = async (e) => {
    e.preventDefault();

  const api_call = await
  fetch(`https://api.nasa.gov/planetary/apod?api_key=31gJzTauAdE8SL1ylx6WQ5DMfemY7F4kyx4Ztezb`);
  const data = await api_call.json();

}


  render() {
    return (
      <div className="App">

        <Main />

        <div className="Info">
          <Info
            copyright={this.state.copyright}
            date={this.state.date}
            />
        </div>

      </div>
    );
  }
}

export default App;

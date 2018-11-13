import React, { Component } from 'react';

import Main from './components/Main.js';
import './App.css';

// const data = require('../src/FakeOrg.json')
// for (var i = 0; i < data.length; i++) {
//   let obj = data[i];
//   console.log("Name: " + obj.name );
// }


class App extends Component {
  constructor() {
    super();

    this.state = {
      'items': []
    }
  }

  componentDidMount() {
    this.getItems();
  }

  getItems() {
    fetch("./src/FakeOrg.json")
    // .then(res => res.text())          
    // .then(text => console.log(text))
    .then(res => {
      if(res.status === 200) return res.json();
      else return { error: 'there was an error' }
    }).then(items => {
      if(items.error) { /* handle error */ }
      else {
        this.setState({ items })
      }
    });
  }

  render() {
    return (
      <div className="App">

        <Main />

        <ul>
          {this.state.items.map(function(item, index) {
            return (
              <div>
                <h1>{item.name}</h1>
                <p>{item.title}</p>
              </div>
            )
          }
          )}
        </ul>

      </div>
    )
  }
}

export default App;

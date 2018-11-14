import React, { Component } from 'react';

import PeopleList from './components/PeopleList.js';
import DetailView from './components/DetailView.js';
import People from './People';

// import Main from './components/Main.js';
import './App.css';

// var data = require('json!../data/data.json');


class App extends Component {
  constructor() {
    super();
    
    this.state = {
      people: {}
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    fetch("https://api.myjson.com/bins/1h7z16")
    // https://jsonplaceholder.typicode.com/posts
    .then(res => res.json())
    .then(data => {
      const people = new People(data);
      this.setState({ people });
    })
    .catch(err => console.log(err));
  }


  render() {

    return (
      <div className="App">

      <h1>Fetching</h1>

        <PeopleList handleOnClick={this.handleOnClick} />
        <DetailView people={this.state.people} />
   
      </div>    
    );
  }
}

export default App;

// <div className="user-box">
    // <ul key={item.name}>
                //   <li><strong>Name:</strong> {item.name}</li>
                //   <li><strong>Title:</strong> {item.title}</li>
                //   <li><strong>Email:</strong> {item.email}</li>
                //   <li><strong>Office:</strong> {item.office}</li>
                // </ul>

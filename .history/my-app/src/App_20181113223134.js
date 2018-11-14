import React, { Component } from 'react';

// import Main from './components/Main.js';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      items: []
    };
    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {
    fetch('https://api.myjson.com/bins/1h7z16')
    .then(res => res.json())
    .then(data => {
      this.setState({ items: data });
    });
  }


  render() {

    const { items } = this.state;

    return (
      <div className="App">

      <h1>Fetching</h1>


        { items.map(item => {
            return (
              <div className="people">
                <ul key={item.name}>
                  <li><strong>Name:</strong> {item.name}</li>
                  <li><strong>Title:</strong> {item.title}</li>
                  <li><strong>Email:</strong> {item.email}</li>
                  <li><strong>Office:</strong> {item.office}</li>
                  <li><strong>Office:</strong> {item.manager}</li>
                </ul>
              </div>
            );
        })}        
      </div>
    );
  }
}

export default App;


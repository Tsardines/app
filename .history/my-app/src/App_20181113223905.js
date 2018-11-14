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
                <p>{item.name}</p>
                <p>{item.title}</p>
                <p>{item.email}</p>
                <p>{item.office}</p>
                <p>{item.manager[0]}</p>
              </div>
      
            );
        })}        
      </div>
    );
  }
}

export default App;


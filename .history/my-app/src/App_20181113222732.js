import React, { Component } from 'react';

// import Main from './components/Main.js';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: []
    };
    // this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentDidMount() {
    fetch('https://api.myjson.com/bins/1h7z16')
    .then(res => res.json())
    .then(data => {
      this.setState({ data });
    });
  }


  render() {

    const { data } = this.state;

    return (
      <div className="App">

      <h1>Fetching</h1>


        <div className="people">
            { data.map(item => {
              return (
                <p><strong>Name:</strong> {item.name}</p>
                <p><strong>Title:</strong> {item.title}</p>
                <p><strong>Email:</strong> {item.email}</p>
                <p><strong>Office:</strong> {item.office}</p>
                <p><strong>Office:</strong> {item.manager}</p>
              );
            })}        
        </div>
      </div>
    );
  }
}

export default App;

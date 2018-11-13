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
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
      this.setState({ items: data });
    });
  }


  render() {

    const { items } = this.state;

    return (
      <div className = "App">

      <h1>Fetching</h1>

        { items.map(item => {
            return (
              <ul key={item.title}>
                <li>{item.title}</li>
              </ul>
            );
        })}        
      </div>
    );
  }
}

export default App;

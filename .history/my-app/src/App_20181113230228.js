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
    fetch('https://api.myjson.com/bins/houf6')
    .then(res => res.json())
    .then(data => {
      this.setState({ items: data });
    });
  }


  render() {

    const { items } = this.state;

    return (
      <div className="App">

      <h1>Our People</h1>


        { items.map((item, num) => {
            return (
              <div className="people">
                <p key={num}>{item.elems}</p>              
              <div className="elem"></div>
                <p key={num}>{item.name}</p>
                <p key={num}>{item.title}</p>
                <p key={num}>{item.email}</p>
                <p key={num}>{item.office}</p>
                {/* <p>{item.manager}</p> */}
              </div>
      
            );
        })}        
      </div>
    );
  }
}

export default App;


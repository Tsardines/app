import React, { Component } from 'react';

import Footer from './components/Footer.js';
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
    fetch('https://api.myjson.com/bins/vz2rm')
    .then(res => res.json())
    .then(data => {
      this.setState({ items: data });
    });
  }


  render() {

    const { items } = this.state;

    return (
      <div className="App">

      <span className="our-people"><h1>Our People</h1></span>
      <span className="intro"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, quos, ipsa animi ducimus repudiandae facilis totam ipsam tenetur libero recusandae nostrum similique optio, explicabo illo veniam alias.</p></span>

          { items.map((item, num) => {
              return (

                <div className="people">

                  <div className="elem">
                    <p key={num}>{item.elems}</p>   
                  </div>     
                
                    <p key={num}><strong>{item.name}</strong></p>
                    <p key={num}><small>{item.title}</small></p>             

                  <div className="hidden">
                    <p key={num}>{item.email}</p>
                    <p key={num}><strong>Office: </strong>{item.office}</p>
                  </div> 

                </div>   
                             
              ); 

            })}

            <Footer />   

      </div>
    );
  }
}


export default App;


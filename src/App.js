import React, { Component } from 'react';
import './App.css';
import Carousel from './Carousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>react-image-gallery</h2>
        </div>
        <Carousel />
      </div>
    );
  }
}

export default App;

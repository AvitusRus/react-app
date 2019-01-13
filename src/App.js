import React, { Component } from 'react';
import testRender02 from './testRender02.svg';
import originalSvg from './originalSvg.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>This original svg</p>
          <img src={originalSvg} className="App-logo" alt="logo" />
          <p>This converted svg</p>
          <img src={testRender02} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default App;

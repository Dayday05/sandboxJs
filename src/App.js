import React, { Component } from 'react';
import './App.css';
import HeaderBar from './components/HeaderBar';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
        <HeaderBar />
        </header>
      </div>
    );
  }
}

export default App;

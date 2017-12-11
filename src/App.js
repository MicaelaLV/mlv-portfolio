import React, { Component } from 'react';
import './styles/App.css';

// components
import Landing from './components/landing';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Landing/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './styles/App.css';

// components
import Landing from './components/landing';
import AnimatedMenu from './components/menu';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Landing/>
        <AnimatedMenu/>
      </div>
    );
  }
}

export default App;

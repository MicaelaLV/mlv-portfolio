import React, { Component } from 'react';
import { BrowserRouter as Router,
          Route,
          Link, 
          Switch } from 'react-router-dom';

import './styles/App.css';

// components
import AnimatedMenu from './components/menu';
import Home from './components/home';
import Skills from './components/skills';
import Portfolio from './components/portfolio';
import About from './components/about';
import Contacts from './components/contacts';
  
class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
          <AnimatedMenu/>
          <Switch>
            <Route exact path="/home" render={() => <Home/>}/>
            <Route path="/skills" component={Skills}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/about" component={About}/>
            <Route path="/contacts" component={Contacts}/>
          </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

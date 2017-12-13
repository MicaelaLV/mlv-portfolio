import React, { Component } from 'react';
import { BrowserRouter as Router,
          Route,
<<<<<<< HEAD
=======
          Link, 
>>>>>>> fd6196293b4058ca395a1e9aa150bcb7ccac0901
          Switch } from 'react-router-dom';

import './styles/App.css';

// components
import AnimatedMenu from './components/menu';
<<<<<<< HEAD
import Home from './components/home';
=======

// import Home from './components/home';
>>>>>>> fd6196293b4058ca395a1e9aa150bcb7ccac0901
import Skills from './components/skills';
import Portfolio from './components/portfolio';
import About from './components/about';
import Contacts from './components/contacts';
  
class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
<<<<<<< HEAD
          <div>
          <AnimatedMenu/>
          <Switch>
            <Route exact path="/home" render={() => <Home/>}/>
=======
          <Switch>
            <AnimatedMenu/>

            <Route path="/home" component={Home}/>
>>>>>>> fd6196293b4058ca395a1e9aa150bcb7ccac0901
            <Route path="/skills" component={Skills}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/about" component={About}/>
            <Route path="/contacts" component={Contacts}/>
          </Switch>
<<<<<<< HEAD
          </div>
=======
>>>>>>> fd6196293b4058ca395a1e9aa150bcb7ccac0901
        </Router>
      </div>
    );
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

export default App;

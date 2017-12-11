import React from 'react';
import '../styles/menu.css';
import { bubble as Menu } from 'react-burger-menu'

class AnimatedMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu width={ '20%' } isOpen={ false }>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    )
  }
}

export default AnimatedMenu;
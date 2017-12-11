import React from 'react';
import '../styles/menu.css';
import { bubble as Menu } from 'react-burger-menu'

class AnimatedMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu width={ '14%' } isOpen={ false }>
        <a id="home" className="menu-item" href="/">Hello</a>
        <a id="skills" className="menu-item" href="/skills">Skills</a>
        <a id="portfolio" className="menu-item" href="/portfolio">Portfolio</a>
        <a id="about" className="menu-item" href="/about">About me</a>
        <a id="contact" className="menu-item" href="/contact">Get in Touch</a>
      </Menu>
    )
  }
}

export default AnimatedMenu;
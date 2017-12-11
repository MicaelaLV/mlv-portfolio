import React from 'react';
import '../styles/menu.css';
import { bubble as Menu } from 'react-burger-menu'

class AnimatedMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu width={ '14%' } isOpen={ false } customBurgerIcon={ <img src="../images/burger.png" alt="burger-icon"/> } >
        <a className="menu-item mic" href="/"> 
          <img src="../images/mic-icon.png" alt="mic logo" className="mic"/>
        </a>
        <a id="home" className="menu-item" href="/">Hello</a>
        <a id="skills" className="menu-item" href="/skills">Skills</a>
        <a id="portfolio" className="menu-item" href="/portfolio">Portfolio</a>
        <a id="about" className="menu-item" href="/about">About me</a>
        <a id="contact" className="menu-item" href="/contact">Contacts</a>
        <a id="copywrite" className="copy" href="/"> @ MLV 2017</a>
      </Menu>
    )
  }
}

export default AnimatedMenu;
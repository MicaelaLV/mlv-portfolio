import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/menu.css';
import { bubble as Menu } from 'react-burger-menu'

class AnimatedMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu width={ '14%' } isOpen={ false } customBurgerIcon={ <img src="../images/burger.png" alt="burger-icon"/> } >
            <ul>
            <li className="menu-item mic"> 
              <img src="../images/mic-icon.png" alt="mic logo" className="mic"/>
            </li>
            <li id="home" className="menu-item">
              <Link to="/home">Hello</Link>
            </li>
            <li id="skills" className="menu-item">
              <Link to="/skills">Skills</Link>
            </li>
            <li id="portfolio" className="menu-item">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li id="about" className="menu-item">
              <Link to="/about">About me</Link>
            </li>
            <li id="contact" className="menu-item">
              <Link to="/contacts" className="link">Contacts</Link>
            </li>
            <li id="copywrite" className="copy"> @ MLV 2017</li>
            </ul>
          </Menu>
    )
  }
}

export default AnimatedMenu;
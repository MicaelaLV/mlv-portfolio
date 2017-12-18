import React from 'react';

const Portfolio = () => (
  <div className="section-container"> 
    <div className="portfolio-container">
      <h2> Portfolio </h2>
    </div>
    <div className="sub-heading">
      <p> projects <i className="em em---1"></i> | web apps <i className="em em-computer"></i>| paraphernalia <i className="em em-alien"></i></p>
    </div>
    <div className="projects-show">
      <div className="project-container">
        <a href="https://micaelalv.github.io/space-game/"><img src="../images/alien-attack.png" className="alien attack game logo"/></a>
        <p> My First Game App </p>
      </div>
      <div className="project-container">
        <a href="https://homiefoodapp.herokuapp.com/"><img src="../images/homie.png" className="homie logo"/></a>
        <p> Food Delivery App </p>
      </div>
      <div className="project-container">
        <a href="#"><img src="../images/screen-time.png" className="screen time logo"/></a>
        <p> Screen Time App for Families</p>
      </div>
    </div>
  </div>
)

export default Portfolio;
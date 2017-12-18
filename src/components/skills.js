import React from 'react';
import Slider from './carousel';


const Skills = () => (
  <div className="section-container"> 
    <div className="skills-container">
      <h2 className="title"> skills </h2>
    </div>
    <div className="sub-heading">
    <p>the tools <i className="em em-apple"></i>| 
              frameworks <i className="em em-eyes"></i>| 
              libraries <i className="em em-bar_chart"></i>| 
              languages <i className="em em-earth_africa"></i> I love
    </p>
    </div>
    <Slider/>
  </div>
)

export default Skills;
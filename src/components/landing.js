import React from 'react';
import '../styles/landing.css';

class Landing extends React.Component {
  render( ) {
    return (
      <section className="landing">
        <div className="personal-icon-container">
          <img src="../images/mic-icon.png" className="my-icon" alt="personal-icon"/>
        </div>
        <div className="description-container">
        <h2 class="hello"> hello! </h2>
        <p className="introduction"> 
          i'm 
          <span className="name">Micaela</span>
        </p>
        <p className="description"> 
          <i className="em em-8ball"></i>
          Front-end Developer
          <i className="em em-female-astronaut"></i>
          <br/>
          Animation Lover  
          <i className="em em-sparkling_heart"></i>| 
          Learner 
          <i className="em em-book"></i>| 
          Music Addict  
          <i className="em em-headphones"></i>
          <br/>
        </p>
        </div>
        <div className="social-links-container">
          <a href="https://www.linkedin.com/in/micaelavillani/" className="social-logo">
            <img src="../images/linkedin.png" alt="linkedin"/> 
          </a>
          <a href="https://github.com/MicaelaLV" className="social-logo">
            <img src="../images/github.png"  alt="linkedin"/> 
          </a>
          <a href="https://www.instagram.com/thexperimentaldev/" className="social-logo">
            <img src="../images/instagram.png"  alt="linkedin"/> 
          </a>
        </div>
      </section>
    )
  }
}

export default Landing;

/* <h2>
      <img src="./images/mic-icon.png" class="my-icon" alt="personal-icon"/>
    </h2>
    <p> 
      <span class="presentation"> hello, I'm 
        <span class="name">Micaela</span>,
      </span><br/>
      <span class="first-row">
        <i class="em em-8ball"></i>
        Front-end Developer<i class="em em-female-astronaut"></i>
      </span><br/>
      Animation Lover <i class="em em-sparkling_heart"></i>| 
      Learner <i class="em em-book"></i>| 
      Music Addict <i class="em em-headphones"></i></br>
      learn more <i class="em em-point_down"></i>| check my socials             
    </p>
    <div class="social-links-container">
      <a href="https://www.linkedin.com/in/micaelavillani/" target="_blank" class="social-logo">
        <img src="./images/linkedin.png" alt="linkedin">
      </a>
      <a href="https://github.com/MicaelaLV" target="_blank" class="social-logo">
        <img src="./images/github.png"  alt="linkedin">
      </a>
      <a href="https://www.instagram.com/thexperimentaldev/" target="_blank" class="social-logo">
        <img src="./images/instagram.png"  alt="linkedin">
      </a>
    </div> */
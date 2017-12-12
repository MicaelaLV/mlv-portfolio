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
        <p className="introduction"> 
          Hello, i'm 
          <span className="name">Micaela</span>!
        </p>
        <p className="description"> 
          <i className="em em-8ball"></i>
          <span className="first-row-description"> Front-end Developer </span>
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
          <a href="mailto:villani.micaela@gmail.com?Subject=Hello%20again" className="social-logo">
              <img src="../images/mail.png" alt="e-mail"/> 
            </a>
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

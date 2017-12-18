import React from 'react';
import '../styles/home.css';


const Contacts = () => (
  <div className="section-container"> 
    <div className="contacts-container">
      <h2> Get in Touch </h2>
    </div>
    <div className="sub-heading">
      <p> You can find me here: </p>
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
        <p>Thanks for stopping by</p>
  </div>
)

export default Contacts;
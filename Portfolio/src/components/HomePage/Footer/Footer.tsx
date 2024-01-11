import './Footer.css';
import github from '../../../assets/github_logo.png';
import linkedin from '../../../assets/linkedin_logo.png';
import React from 'react';


const Footer = () => {
  return (
    <div className='footer_container'>
      <small>© 2023 François Braman. Tous droits réservés.</small>
      <div className='footer_item'>
        <a href="https://github.com/FrancoisBraman" target='blank'>
          <img src={github} alt="github_logo" />
        </a>
        <a href="https://www.linkedin.com/in/fran%C3%A7ois-braman-a99766245/" target='blank'>
          <img src={linkedin} alt="linkedin_logo" />
        </a>
      </div>
    </div>

  )
};

export default Footer
import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import '../Styles/footer.scss';

import logo from '../Assets/logo.png';

const Footer = () => {
     
  return (
    <footer>      
      <div className='content'>
        <div className='first'>
          <div className="logo">
            <img src={ logo } alt="" />
          </div>
          <h2>Aftab</h2>
        </div>

        <div>
          <h4>Follow Me</h4>
          <div>
            <i><a href="https://www.linkedin.com/in/meeru-ameer-aftab-888010235/" target="blank"><AiFillLinkedin /></a></i>
            <i><a href="https://github.com/aftabmeeru" target="blank"><AiFillGithub /></a></i>
          </div>
        </div>
      </div>
      <p>&copy; all rights reserved</p>
    </footer>
  )
  
}

export default Footer;
import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
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
            <i><a href="https://www.linkedin.com/in/aftab-meeru-948115242" target="blank"><AiFillLinkedin /></a></i>
            <i><a href="https://github.com/aftabm07" target="blank"><AiFillGithub /></a></i>
            <i><a href="https://instagram.com/aftab01257" target="blank"><AiFillInstagram /></a></i>
          </div>
        </div>
      </div>
        <p>&copy;all right reserved</p>
    </footer>
  )
  
}

export default Footer;
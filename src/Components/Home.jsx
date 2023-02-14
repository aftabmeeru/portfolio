import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import logoImg from '../Assets/logo.png';
import { FaHtml5, FaCss3, FaSass, FaJs, FaBootstrap, FaReact, FaCircle } from 'react-icons/fa';

const Home = () => {
    
  return (
    <>

      <div className="home" id="home">
        <div className='home-1'>
          <h1>Meeru <br />Ameer Aftab</h1>
          <h5>Web-developer</h5>
          <p>I'm a font-end web-developer, and I'm very passionate and dedicated to my work.</p>

          <div className="links">
            <div>
              <li><a href="https://www.linkedin.com/in/aftab-meeru-948115242" target="blank"><AiFillLinkedin /></a></li>
              <li><a href="https://github.com/aftabm07" target="blank"><AiFillGithub /></a></li>
              <li><a href="https://instagram.com/aftab01257" target="blank"><AiFillInstagram /></a></li>
            </div>
          </div>
        </div>
        <div className='home-2'>
          <div className="logo">
            <img src={logoImg} alt="" />
          </div>
        </div>
      </div>

      <div id="about" className="about">
        <div className="about-con">
        <h2>About Me</h2>
        <div className="content">
          <p>I'm a Front-End Web Developer with skills in HTML-5 , CSS-3 & SASS , JAVASCRIPT , BOOTSTRAP , REACT JS and building a responsive webpages , and currently finding a position in an organisation where I can be an asset for that organisation .</p>
          <div>
            <h2>Here are a few Highlights</h2>
            <p><span><FaCircle /></span> Front-end Web Development</p>
            <p><span><FaCircle /></span> Single Page Application</p>
            <p><span><FaCircle /></span> Responsive Design</p>
          </div>
        </div>
        </div>
      </div>

      <div id="skills" className="skills">
        <div className="skills-con">
          <h2>My Skills</h2>
          <div className="content">
            <div className="icons">
              <div className='html' style={{animationDelay: ".1s"}}><FaHtml5 /></div>
              <div className='css' style={{animationDelay: ".1s"}}><FaCss3 /></div>
              <div className='js' style={{animationDelay: ".1s"}}><FaJs /></div>
              <div className='sass' style={{animationDelay: ".1s"}}><FaSass /></div>
              <div className='bstrap' style={{animationDelay: ".1s"}}><FaBootstrap /></div>
              <div className='react' style={{animationDelay: ".1s"}}><FaReact /></div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
  
}

export default Home;
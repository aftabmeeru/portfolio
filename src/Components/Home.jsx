import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FaHtml5, FaCss3, FaSass, FaJs, FaBootstrap, FaReact, FaWordpress } from 'react-icons/fa';
import { GrMysql } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

import { projectsData } from './projects-data';

import logoImg from '../Assets/logo.png';

const Home = () => {

  const [ text ] = useTypewriter({
    words: ['Front-end Developer', 'WordPress Developer', 'Web Designer'],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 20
  });
    
  return (
    <>
      <div className="home" id="home">
        <div className='home-1'>
          <h1 className='my-name'>Meeru <br /><span>Ameer Aftab</span></h1>
          <h5>Im a <span>{ text }<Cursor /></span></h5>
          <p>I'm a font-end web-developer, and I'm very passionate and dedicated to my work.</p>

          <div className="links">
            <div>
              <li><a href="https://www.linkedin.com/in/meeru-ameer-aftab-888010235/" target="blank"><AiFillLinkedin /></a></li>
              <li><a href="https://github.com/aftabmeeru" target="blank"><AiFillGithub /></a></li>
            </div>
          </div>
        </div>
        <div className='home-2'>
          <div className="img-container">
            <div className="image">
              <div className="logo">
                <img src={logoImg} alt="logo" />
            </div>
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="about">
        <div className="about-con">
          <h2>About Me</h2>
          <div className="content">
            <div className="img-container">
              <div className="image">
                <div className="logo">
                  <img src={logoImg} alt="logo" />
              </div>
              </div>
            </div>
            <div className="who-iam">
              <div className="front-end developer">
                <div className="icon react"><FaReact /></div>
                <div className="content">
                  <h3>Frontend Developer</h3>
                  <p>I'm a front-end developer with experience in building responsive and optimized sites</p>
                </div>
              </div>
              <div className="wordpress developer">
                <div className="icon wordpress"><FaWordpress /></div>
                <div className="content">
                  <h3>Wordpress Developer</h3>
                  <p>I'm a wordpress developer with experience in building websites using elementor plugin</p>
                </div>
              </div>
              <div className="designer developer">
                <div className="icon design"><CgWebsite /></div>
                <div className="content">
                  <h3>Web Designer</h3>
                  <p>I'm a web designer with experience in building attractive sites with css, css3 and sass</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="skills" className="skills">
        <div className="skills-con">
          <h2>My Skills</h2>
          <div className="content">
            <div className="icons">
              <div className='react' style={{animationDelay: ".1s"}}><FaReact /></div>
              <div className='js' style={{animationDelay: ".1s"}}><FaJs /></div>
              <div className='wordpress' style={{animationDelay: ".1s"}}><FaWordpress /></div>
              <div className='mysql' style={{animationDelay: ".1s"}}><GrMysql /></div>
              <div className='html' style={{animationDelay: ".1s"}}><FaHtml5 /></div>
              <div className='css' style={{animationDelay: ".1s"}}><FaCss3 /></div>
              <div className='bootstrap' style={{animationDelay: ".1s"}}><FaBootstrap /></div>
              <div className='sass' style={{animationDelay: ".1s"}}><FaSass /></div>
            </div>
          </div>
        </div>
      </div>

      <div id="projects" className="projects">
        <div className="projects-con">
          <h2 className=''>My Projects</h2>
          <div className="content">
            {
              projectsData.map((project, index) => (
                <div className="project" key={ index }>
                  <div className="img">
                    <img src={ project.image } alt="ecommerce" />
                  </div>
                  <div className="desc">
                    <h2>{ project.name }</h2>
                    <p>{ project.desc }</p>
                  </div>
                  <div className="lang">
                    <span className='react'>React</span>
                    <span className='sass'>Sass</span>
                  </div>
                  <div className="buttons">
                    <button><span>Demo</span></button>
                    <a href='https://github.com/aftabmeeru/portfolio' target='blank'><span>Source</span></a>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

    </>
  )
  
}

export default Home;
import React from 'react'
import './about.css'
import ME from '../../assets/me-ai.webp'
import {FiAward} from "react-icons/fi"
// import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className = "container about__container" >
        <div className = "about__me ">
          <div className = "about__me-image">
            <img src={ME} alt = "About"/>
          </div>
        </div>
        <div className = "about__content">
          <div className="about__cards">
            <a href="https://www.linkedin.com/in/akshatpawar/" className='about__card'>
              <FiAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ year of self learning</small>
            </a>

            {/* <a className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>0</small>
            </a> */}

            <a href="https://github.com/akshatpawar?tab=repositories" className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>8</small>
            </a>
          </div>

          <p>Hey, I'm Akshat — a self-taught web developer and final-year undergraduate at SRM Institute of Science and Technology, Chennai (Class of 2025). I’m passionate about building impactful web applications and constantly exploring new technologies across domains like full-stack development and AI/ML. Over the past few years, I’ve worked on a variety of projects, ranging from interactive portfolios to object detection systems.

I’m currently open to exciting full-time opportunities where I can contribute, learn, and grow as a developer. Let’s connect!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div >
      </div>
    </section>
  )
}

export default About
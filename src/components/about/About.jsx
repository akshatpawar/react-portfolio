import React from 'react'
import './about.css'
import ME from '../../assets/me-ai.webp'
import { FiAward } from "react-icons/fi"
// import {FiUsers} from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"
import { projectData } from '../portfolio/Portfolio'

const About = () => {
  return (
    <section id='about'>
      <h2 className="preserve-h5">Get To Know</h2>
      <h3 className="preserve-h2">About Me</h3>

      <div className="container about__container" >
        <div className="about__me ">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <a href="https://www.linkedin.com/in/akshatpawar/" className='about__card'>
              <FiAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ year of self learning</small>
            </a>

            {/* <a className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>0</small>
            </a> */}

            <a href="https://github.com/akshatpawar?tab=repositories" className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>{projectData.length}</small>
            </a>
          </div>

          <p>
            Hey, I'm Akshat Pawar. I build things for the web, think too hard
            about how to make them better, and have a habit of exploring whatever
            catches my curiosity.
            <br />
            I'm a fresher with hands-on experience in React and a growing passion
            for GenAI and LLM tooling. I have a creative side that shows up in
            how I approach design, problems, and projects. I don't just want to
            build what's expected, I want to find a better way to build it.
            <br />
            I'm eager to learn fast, take on real challenges, and work on things
            that actually matter. If you're building something interesting, I'm
            interested.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div >
      </div>
    </section>
  )
}

export default About
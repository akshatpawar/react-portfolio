import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg'
import {FiAward} from "react-icons/fi"
import {FiUsers} from "react-icons/fi"
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
            <a className='about__card'>
              <FiAward className='about__icon'/>
              <h5>Experience</h5>
              <small>6+ months self learning</small>
            </a>

            <a className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>0</small>
            </a>

            <a href="https://github.com/akshatpawar?tab=repositories" className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              {/* <small>10</small> */}
            </a>
          </div>

          <p>Hey I'm Akshat, a self taught web developer. I'm a 2nd year undergrad student at SRM Institute of Science and Technology, Chennai. I'm a passionate learner who's always willing to learn and work across technologies and domains. I love to explore new technologies. I'm looking for opportunities to work on projects and learn new technologies. Feel free to contact me.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div >
      </div>
    </section>
  )
}

export default About
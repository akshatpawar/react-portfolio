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
      <h5>Get To Know</h5>
      <h2>About Me</h2>

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
            Hi, I’m Akshat Pawar. I’m passionate about creating meaningful digital experiences and turning ideas into real-world projects. I love optimizing workflows, creating intuitive user experiences, and learning new tools that push the boundaries of technology.
            <br />
            When I’m not coding, I enjoy staying updated with the latest tech trends, experimenting with side projects, and finding creative ways to solve problems. I’m always eager to take on new challenges and collaborate on projects that make an impact.
            <br />
            I’m always looking to collaborate on exciting projects and contribute to solutions that make an impact.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div >
      </div>
    </section>
  )
}

export default About
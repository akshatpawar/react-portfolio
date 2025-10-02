import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">

        {/* Frontend Skills */}
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div className='skill-details'><h4>HTML5</h4>
                <div className="skill-level"><div className="skill-level-fill experienced"></div></div></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div className='skill-details'><h4>CSS3 / SCSS</h4>
                <div className="skill-level"><div className="skill-level-fill experienced"></div></div></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div className='skill-details'><h4>JavaScript (ES6+)</h4>
                <div className="skill-level"><div className="skill-level-fill experienced"></div></div></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div className='skill-details'><h4>ReactJS</h4>
                <div className="skill-level"><div className="skill-level-fill experienced"></div></div></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div className='skill-details'><h4>Material-UI</h4>
                <div className="skill-level"><div className="skill-level-fill intermediate"></div></div></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div className='skill-details'><h4>Bootstrap</h4>
                <div className="skill-level"><div className="skill-level-fill intermediate"></div></div></div>
            </article>
          </div>
        </div>

        {/* Backend Skills */}
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div className='skill-details'><h4>Node.js</h4>
                <div className="skill-level"><div className="skill-level-fill experienced"></div></div></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div className='skill-details'><h4>Express.js</h4>
                <div className="skill-level"><div className="skill-level-fill experienced"></div></div></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div className='skill-details'><h4>REST APIs</h4>
                <div className="skill-level"><div className="skill-level-fill experienced"></div></div></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div className='skill-details'><h4>WebRTC</h4>
                <div className="skill-level"><div className="skill-level-fill intermediate"></div></div></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div className='skill-details'><h4>Socket.IO</h4>
                <div className="skill-level"><div className="skill-level-fill intermediate"></div></div></div>
            </article>
          </div>
        </div>

        {/* Database & Cloud */}
        <div className="experience_database">
          <h3>Database & Cloud</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div className='skill-details'><h4>SQL</h4>
                <div className="skill-level"><div className="skill-level-fill intermediate"></div></div></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div className='skill-details'><h4>MongoDB</h4>
                <div className="skill-level"><div className="skill-level-fill intermediate"></div></div></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div className='skill-details'><h4>Cloud (Vercel, Render, OCI)</h4>
                <div className="skill-level"><div className="skill-level-fill intermediate"></div></div></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div className='skill-details'><h4>Linux</h4>
                <div className="skill-level"><div className="skill-level-fill intermediate"></div></div></div>
            </article>
          </div>
        </div>

        {/* Tools & Other */}
        <div className="experience_tools">
          <h3>Tools & Other Technologies</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div className='skill-details'><h4>Git & GitHub</h4>
                <div className="skill-level"><div className="skill-level-fill experienced"></div></div></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div className='skill-details'><h4>Postman</h4>
                <div className="skill-level"><div className="skill-level-fill intermediate"></div></div></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div className='skill-details'><h4>Agile / Scrum</h4>
                <div className="skill-level"><div className="skill-level-fill familiar"></div></div></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div className='skill-details'><h4>Figma</h4>
                <div className="skill-level"><div className="skill-level-fill familiar"></div></div></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div className='skill-details'><h4>Photoshop / Canva</h4>
                <div className="skill-level"><div className="skill-level-fill intermediate"></div></div></div>
            </article>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Experience
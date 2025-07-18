import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className= "experience_frontend">
          <h3>Frontend Development</h3>
          <div className= "experience_content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div><h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div><h4>CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div><h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div><h4>ReactJS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_lang">
        <h3>Programming</h3>
          <div className= "experience_content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div><h4>Java</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div><h4>Python</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div><h4>C++</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div><h4>C</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>

        {/* <div className="experience_other">
        <h3>Other Skills</h3>
          <div className= "experience_content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div><h4>Canva</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div><h4>Figma</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div><h4>Photoshop</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div><h4>Python</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Experience
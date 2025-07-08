import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/project1.png'
import IMG2 from '../../assets/project2.jpg'
import IMG3 from '../../assets/project3.jpg'
import IMG4 from '../../assets/project4.png'
import IMG5 from '../../assets/project5.png'
import IMG6 from '../../assets/project6.png'
import IMG7 from '../../assets/projectMM.png'
import IMG8 from '../../assets/projectOD.png'

const data = [
  {
    id: 1,
    img: IMG8,
    title: 'Marine Life Object Detection (YOLOv9)',
    github: 'https://github.com/akshatpawar/yolov9-marine-life-detection',
    demo: 'https://ieeexplore.ieee.org/document/10847536'
  },
  {
    id: 2,
    img: IMG7,
    title: 'MiniMind AI Search Engine',
    github: 'https://github.com/akshatpawar/minimind-ai-search',
    demo: 'https://minimind-ai-search.vercel.app/'
  },
  {
    id: 3,
    img: IMG1,
    title: 'Valorant Info Website',
    github: 'https://github.com/akshatpawar/valorant-info',
    demo: 'https://akshatpawar.github.io/valorant-info/'
  },
  {
    id: 4,
    img: IMG2,
    title: 'Linktree Website',
    github: 'https://github.com/akshatpawar/linktree',
    demo: 'https://akshatpawar.github.io/linktree/'
  },
  {
    id: 5,
    img: IMG3,
    title: 'Basic HTML CSS Portfolio',
    github: 'https://github.com/akshatpawar/akshatpawaar.github.io',
    demo: 'https://akshatpawar.github.io'
  },
  {
    id: 6,
    img: IMG4,
    title: 'BMI Calculator JS',
    github: 'https://github.com/akshatpawar/BMI-Calculator-JS',
    demo: 'https://akshatpawar.github.io/BMI-Calculator-JS/'
  },
  {
    id: 7,
    img: IMG5,
    title: 'Dino Game JS',
    github: 'https://github.com/akshatpawar/dino-js-game',
    demo: 'https://akshatpawar.github.io/dino-js-game/'
  },
  {
    id: 8,
    img: IMG6,
    title: 'Contact Manager',
    github: 'https://github.com/akshatpawar/contact-app',
    demo: 'https://contact-manager-19.vercel.app/'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, img, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={img} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
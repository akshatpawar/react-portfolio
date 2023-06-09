import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/project1.png'
import IMG2 from '../../assets/project2.jpg'
import IMG3 from '../../assets/project3.jpg'

const data = [
  {
    id: 1,
    img: IMG1,
    title: 'Valorant Info Website',
    github: 'https://github.com/akshatpawar/valorant-info',
    demo: 'https://akshatpawar.github.io/valorant-info/'
  },
  {
    id: 2,
    img: IMG2,
    title: 'Linktree Website',
    github: 'https://github.com/akshatpawar/linktree',
    demo: 'https://akshatpawar.github.io/linktree/'
  },
  {
    id: 1,
    img: IMG3,
    title: 'Basic HTML CSS Portfolio',
    github: 'https://github.com/akshatpawar/akshatpawaar.github.io',
    demo: 'https://akshatpawar.github.io'
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
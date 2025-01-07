import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/car.png'
import IMG2 from '../../assets/api5.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Car Selling Plateform',
    github: 'https://github.com/Fefe3434/car_hub',
    // demo: 'http://dribble.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Articles API',
    github: 'https://github.com/Fefe3434/node_api_articles',
    // demo: 'http://dribble.com'
  },

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
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
import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/car-img-2.png'
import IMG4 from '../../assets/car.png'
import IMG2 from '../../assets/api5.png'
import IMG3 from '../../assets/chat-room-img.png'
import IMG5 from '../../assets/ecommerce-app.png'


const data = [

  {
    id: 1,
    image: IMG1,
    title: 'Car Selling Plateform-FrontEnd',
    github: ['https://github.com/Fefe3434/car_hub_frontend']
    // demo: 'http://dribble.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Car Selling Plateform-BackEnd',
    github: ['https://github.com/Fefe3434/car_hub']
    // demo: 'http://dribble.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Articles API',
    github: 'https://github.com/Fefe3434/node_api_articles',
    // demo: 'http://dribble.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Ecommerce App - MERN',
    github: 'https://github.com/Fefe3434/shopping-mern',
    // demo: 'http://dribble.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Chat App',
    github: 'https://github.com/Fefe3434/chat-room-react-node.js',
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
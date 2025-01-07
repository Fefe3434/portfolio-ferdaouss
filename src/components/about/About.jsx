import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about_content'>
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>3+ years experience</small>
            </article>

            {/*<article className='about_card'>
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>20+ Clients Worldwide</small>
            </article>*/}

            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>10+ completed projects</small>
            </article>
          </div>

          <p>
          I specialize in creating elegant, user-friendly web applications with a focus on performance and scalability. My passion for solving complex problems drives me to deliver high-quality digital experiences. If you're looking for a reliable and efficient partner for your next project, you are in the right place !
          </p>

          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
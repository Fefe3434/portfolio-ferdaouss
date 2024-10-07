import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar_anonymous.png'
import AVTR2 from '../../assets/avatar_anonymous.png'
import AVTR3 from '../../assets/avatar_anonymous.png'
import AVTR4 from '../../assets/avatar_anonymous.png'

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Asmaa E., CEO of EdenTreasures',
    review: 'Working with Ferdaouss has been an absolute pleasure. She brought an unmatched level of professionalism and creativity to every project. Her ability to understand complex requirements and deliver high-quality solutions is impressive. She played a crucial role in our product development team, consistently meeting deadlines while maintaining attention to detail. We are truly grateful for her contributions to our team and would highly recommend her to any future employers.'
  },
  {
    avatar: AVTR2,
    name: 'Sebastien C., Chief Developper',
    review: 'Ferdaouss demonstrated exceptional skill in software development, particularly in database management and API integration. She not only met our high standards but often exceeded them, implementing efficient and scalable solutions. Her collaborative approach and dedication to continuous improvement have been an asset to our team. She would be an outstanding addition to any organization.'
  },
  {
    avatar: AVTR3,
    name: 'Kouider A., Conusltant at UN',
    review: 'I hired Ferdaouss to develop a custom inventory management system for my small retail business, and I couldn\'t be happier with the outcome. She took the time to understand my needs and delivered a solution that simplified my daily operations. Her professionalism, responsiveness, and technical knowledge were evident throughout the entire process. The system has saved me countless hours each week, and I can\'t thank her enough!'
  },
  // {
  //   avatar: AVTR4,
  //   name: 'Lara',
  //   review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt nihil aliquid omnis consectetur labore! Hic, doloremque? Architecto, in laudantium, velit necessitatibus eveniet illo incidunt facilis possimus, voluptates unde soluta.'
  // },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client_avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client_name'>{name}</h5>
                <small className='client_review'>
                  {review}
                </small>

              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
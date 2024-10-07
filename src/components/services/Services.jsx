import React from 'react';
import './services.css'
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services_container'>
        <article className='services'>
          <div className='services_head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Creating intuitive and visually appealing user interfaces that enhance user experience.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Conducting user research and testing to refine designs.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Prototyping and wireframing to communicate design ideas effectively.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Designing mobile-friendly and responsive layouts.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Ensuring brand consistency and cohesive visual style across the project.</p>
            </li>
          </ul>
        </article>

        <article className='services'>
          <div className='services_head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Full-stack web development using technologies like Angular, React, and Python.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Building responsive and SEO-friendly websites.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Integration of third-party APIs to extend website functionality.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Customizing eCommerce solutions tailored to client needs.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Continuous support, maintenance, and performance optimization for deployed projects.</p>
            </li>
          </ul>
        </article>

        <article className='services'>
          <div className='services_head'>
            <h3>Stock Management Software Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Developing custom stock management solutions.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Implementing features for stock level alerts, purchase orders, and supplier management.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Building solutions for real-time data synchronization across multiple warehouses or stores.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Providing maintenance and updates to ensure smooth operation of stock management systems.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Providing data visualizations that assist in identifying trends and optimizing inventory processes.</p>
            </li>
          </ul>
        </article>

        <article className='services'>
          <div className='services_head'>
            <h3>Inventory System Design</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Designing intuitive user interfaces for inventory management systems.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Developing dashboards for real-time tracking of stock levels.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Creating user-friendly navigation for efficient data entry and access.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Ensuring that all aspects of the design that is meticulously aligned with the company s unique operational needs.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Automating repetitive tasks in inventory handling to reduce manual workload.</p>
            </li>
          </ul>
        </article>


        <article className='services'>
          <div className='services_head'>
            <h3>Content Creation</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Developing engaging and SEO-optimized content for websites and blogs.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Ensuring that all content is consistently aligned with the company's brand voice and overarching goals. This involves carefully crafting every piece of communication so it reflects the brand's identity</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Working with graphic designers to produce visual content that enhances the user journey.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Crafting technical documentation for applications.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Creating marketing content including landing pages, email campaigns, and newsletters.</p>
            </li>
          </ul>
        </article>

        <article className='services'>
          <div className='services_head'>
            <h3>Database Design & Management</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Designing scalable databases for new software solutions.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Creating logical and physical data models to ensure efficient storage, retrieval, and integrity of data.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Offering database migration services to help clients move data between systems.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>optimizing database queries and indexes to enhance performance and reduce load times.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Normalizing the database to eliminate redundancy and ensure efficient data retrieval while adjusting denormalized structures.</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  );
};

export default Services;

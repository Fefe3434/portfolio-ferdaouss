import React, { useState, useEffect } from 'react';
import './nav.css';
import { IoMdHome } from 'react-icons/io';
import { LuUser2 } from 'react-icons/lu';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { TbMessage } from 'react-icons/tb';
import { FaBriefcase } from 'react-icons/fa'; 

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    
    const handleScroll = () => {
      let current = '#';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = `#${section.id}`;
        }
      });
      
      setActiveNav(current);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <IoMdHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <LuUser2 />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <RiServiceLine />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <FaBriefcase />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <TbMessage />
      </a>
    </nav>
  );
};

export default Nav;

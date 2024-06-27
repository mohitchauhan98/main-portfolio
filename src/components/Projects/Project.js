import React from 'react'
import Swiperr from './Swiper/Swiperr'
import './Project.css'

const Project = () => {
  return (
    <div className='skills-container'>
      <div className='skills-box'>
        <div className='s-header'>
          <div><span className='skill-text'>Projects</span></div>
            <span className='banner-description'>I have worked on a wide range of projects.Here are some of my projects.</span>
        </div>
        <div className='swiperr-main-box'><Swiperr /></div>
      </div>
    </div>
  )
}

export default Project
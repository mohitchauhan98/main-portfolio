import React from 'react'
import './Banner.css'
import { Bio } from "../../data/constants";
import Typewriter from 'typewriter-effect';
import { FaLocationArrow } from "react-icons/fa";
import BannerRight from './BannerRight/BannerRight';


const Banner = () => {
  return (
    <div className='banner-container'>
        <div>
            <div className='banner-left'>
                <span className = 'banner-left-name'>Hi, I'am {Bio.name}</span>
                    <span className='banner-typewriter'>
                        <Typewriter options={{
                            strings: Bio.roles,
                            autoStart: true,
                            loop: true
                        }}/>
                    </span>
                <span className='banner-description'>{Bio.description}</span>
            </div>
            <a href = {Bio.resume} target = "_blank" rel="noreferrer" className='banner-left-button'>
                <span className='banner-anchor'>Check Resume</span>
                <span className='banner-left-icon'><FaLocationArrow /></span>
            </a>
        </div>
        {/* <BannerRight /> */}
    </div>
  )
}

export default Banner;

//clipPath : polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%)
import React, { useEffect, useState } from 'react';
import './Navbar.css'
import { useTheme } from '../ThemeContext/ThemeContext';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {Link} from 'react-scroll'

gsap.registerPlugin(ScrollTrigger)

const Navbar = () => {
    const [activeLink , setActiveLink] = useState(false)
    const { isDarkMode , toggleTheme } = useTheme()

    const handleClick = (link) => {
        setActiveLink(link)
    }

    useEffect(() => {
        const showNav = gsap.from('.navbar', {
            yPercent: -100,
            paused : true,
            duration: 0.2,
        }).progress(1)

        ScrollTrigger.create({
            start: "top top",
            end : "max",
            onUpdate: (self) => {
                self.direction === -1 ? showNav.play() : showNav.reverse()
            }
        })
    }, [])

    
    return (
    <div className='navbar'>
        <div className='navbar-inside'>
            <div><span className='nav-text'>Mohit</span></div>
            <div className='navbar-second'>
                <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className={`nav-link ${activeLink === 'home' ? 'active' : '' }`} onClick={() => handleClick('home')}>About</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className={`nav-link ${activeLink === 'about' ? 'active' : '' }`} onClick={() => handleClick('about')}>Skills</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className={`nav-link ${activeLink === 'skills' ? 'active' : '' }`} onClick={() => handleClick('skills')}>Experience</Link>
                <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-50} duration={500} className={`nav-link ${activeLink === 'portfolio' ? 'active' : '' }`} onClick={() => handleClick('portfolio')}>Projects</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className={`nav-link ${activeLink === 'contact' ? 'active' : '' }`} onClick={() => handleClick('contact')}>Contact</Link>
                <div onClick={toggleTheme} className='navbar-icon'>
                    {isDarkMode ? <LightModeIcon /> : <DarkModeIcon className='dark-icon'/>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar


{/* <a href = '#home' className={`nav-link ${activeLink === 'home' ? 'active' : '' }`} onClick={() => handleClick('home')}>About</a>
                <a href = '#about' className={`nav-link ${activeLink === 'about' ? 'active' : '' }`} onClick={() => handleClick('about')}>Skills</a>
                <a href = '#skills' className={`nav-link ${activeLink === 'skills' ? 'active' : '' }`} onClick={() => handleClick('skills')}>Experience</a>
                <a href = '#portfolio' className={`nav-link ${activeLink === 'portfolio' ? 'active' : '' }`} onClick={() => handleClick('portfolio')}>Projects</a>
                <a href = '#contact' className={`nav-link ${activeLink === 'contact' ? 'active' : '' }`} onClick={() => handleClick('contact')}>Contact</a> */}
import './Experience.css'
import Timeline from './Timeline/Timeline'

const Experience = () => {
  return (
    <div className='skills-container'>
      <div className='skills-box'>
        <div className='s-header'>
          <div><span className='skill-text'>Experience</span></div>
            <span className='banner-description'>My work experience as a software developer and working on different companies and projects.</span>
        </div>
        <div><Timeline /></div>
      </div>
    </div>
  )
}

export default Experience
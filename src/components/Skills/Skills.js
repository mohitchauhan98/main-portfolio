import './Skills.css'
import SkillSection from './SkillSection/SkillSection';

const Skills = () => {
    const skills = [
        {name : 'HTML' , percentage : 90},
        {name : 'CSS' , percentage : 85},
        {name : 'JavaScript' , percentage : 65},
        {name : 'React' , percentage : 75},

    ]

    const backendSkills = [
        { name: 'Node.js', percentage: 55 },
        { name: 'Express.js', percentage: 50 },
        { name: 'MongoDB', percentage: 55 },
        { name: 'Mongoose', percentage: 55 },
    ];

    const toolsUsed = [
        { name: 'Git', percentage: 90 },
        { name: 'Webpack', percentage: 85 },
        { name: 'Redux', percentage: 80 },
        { name: 'Firebase', percentage: 80 },
    ];

  return (
    <div className='skills-container'>
        <div className='skills-box'>
            <div className='s-header'>
                <div><span className='skill-text'>Skills</span></div>
                <span className='banner-description'>Here are some of my skills on which I have been working on for the past 2 years</span>
            </div>
            <div className='skill-section'>
                <SkillSection title="Frontend Developer" experience={2} skills={skills} />
                <SkillSection title="Backend Developer" experience={2} skills={backendSkills} />
                <SkillSection title="Tools Used" experience={2} skills={toolsUsed} />
            </div>
        </div>
    </div>
  )
}

export default Skills;
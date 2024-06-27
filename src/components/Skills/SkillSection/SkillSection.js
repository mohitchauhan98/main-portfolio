import React, { useState } from 'react';
import './SkillSection.css'
import { GoTriangleUp } from 'react-icons/go';
import { TbBraces } from "react-icons/tb";

const SkillSection = ({ title, experience, skills }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <>
            <div className='left-block'>
                <div className="skill-set">
                    <div className='left-block-header'>
                        <span className='icon-skill'><TbBraces /></span>
                        <div className='text-frontend'>
                            <h1>{title}</h1>
                            <span>More than {experience} years</span>
                        </div>
                        <div className={`accordian ${open ? "open" : ''}`} onClick={handleOpen}>
                            <span className='icon-skill'><GoTriangleUp /></span>
                        </div>
                    </div>
                </div>
                <div className={`accordian-content ${open ? "visible" : ""}`}>
                    {skills.map((skill, index) => (
                        <div key={index}>
                            <div className='skill-accordian'>
                                <h3 className='skill-name'>{skill.name}</h3>
                                <span className='skill-percent'>{skill.percentage}%</span>
                            </div>
                            <div className='content-progress-bar'>
                                <div className='progress-bar' style={{ width: `${skill.percentage}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SkillSection;

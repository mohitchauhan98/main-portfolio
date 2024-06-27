import React from "react";
import './Timeline.css';
import DatamaticsLogo from '../../../assets/datamatics.jpg';
import SamyakLogo from '../../../assets/samyak.jpg'

const Timeline = () => {
  return (
    <div className="timeline">
      <div className="timeline-container left-container">
        <img src = {DatamaticsLogo} alt = 'logo' /> 
        <div className="text-box">
          <h2>Datamatics</h2>
          <small>2022-present</small>
          <p>Enhanced user experiences on Datamatics, Portals by resolving bugs & reduced load time by 40%. Built many components using React Js with seamless interaction of REST APIs using fetch. Refactored previous code to React.js, updated with new dependency and integrated Jest for Unit Testing.</p>
          <span className="left-container-arrow"></span>
        </div>
      </div>

      <div className="timeline-container right-container">
        <img src = {SamyakLogo} alt = 'logo' /> 
        <div className="text-box">
          <h2>Samyak Technologies</h2>
          <small>2018-2019</small>
          <p>Enhanced user experiences on Datamatics, Portals by resolving bugs & reduced load time by 40%. Built many components using React Js with seamless interaction of REST APIs using fetch. Refactored previous code to React.js, updated with new dependency and integrated Jest for Unit Testing.</p>
          <span className="right-container-arrow"></span>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
import React from 'react'
import "./SideBar.css";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-button">
        <img src="src\assets\dashboard-icon.svg" alt="" className="icon"/>
        Dashboard
      </div>
      
      <div className="sidebar-button active"> 
        <img src="src\assets\skill-test-icon.svg" alt="" className="icon"/>
        Skill Test
      </div>
      <div className="sidebar-button">
        <img src="src\assets\internships-icons.svg" alt="" className="icon"/> 
        Internships
      </div>
    </div>
  );
};

export default SideBar;

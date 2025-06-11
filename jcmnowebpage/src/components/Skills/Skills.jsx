import React from 'react'
import './Skills.css'
import { ImLab } from "react-icons/im";
import { FaComputer } from "react-icons/fa6";

//Displays the skills section of the portfolio
const Skills = () => {
  return (
    <div className= 'skills' >
      <h1>Skills</h1>

      <div className = 'skillcard'>
        <FaComputer size={50} />  
            <h3 className= 'skillcard-title'> Software and Technology </h3> 

               
                <ul className = 'subtitle'>Front-end</ul>
                <div className = 'list-card'>
                <li>Languages: HTML, CSS, JavaScript</li>
                <li>Libraries: React.js</li>
                <li>Version Control: Git, Github</li>
                </div>
                
                <ul className = 'subtitle'>Back-end</ul>
                <div className = 'list-card'>
                <li>Languages: Java, C</li>
                <li>Tools: BlueJ, VS Code, Eclipse</li>
                </div>

      </div>      
        
      <div className = 'skillcard'>
        <ImLab size={50} /> 
      <h3 className = 'skillcard-title'> Laboratory and Research </h3>
      
      <ul className = 'subtitle'>Laboratory</ul>
      <div className = 'list-card'>
      <li>Lab Safety & Compliance</li>
      <li>Calibration & Quality Control</li>
      <li>Reagent Preparation</li>
      </div>

      <ul className = 'subtitle'>Research</ul>
      <div className = 'list-card'>
      <li>Experimental Design</li>
      <li>Scientific Writing & Documentation</li>
      <li>Data Collection & Analysis</li>
      </div>


      </div>

    </div>
  )
}

export default Skills

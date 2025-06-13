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
        <FaComputer size={60} />  
            <h3 className= 'skillcard-title'> Software and Technology </h3> 

               
                <ul className = 'subtitle'>Front-end</ul>
                <div className = 'list-card'>
                <li className = 'list-card'>Languages: HTML, CSS, JavaScript</li>
                <li className = 'list-card'>Libraries: React.js</li>
                <li className = 'list-card'>Version Control: Git, Github</li>
                </div>
                
                <ul className = 'subtitle'>Back-end</ul>
                <li className = 'list-card'>Languages: Java, C</li>
                <li className = 'list-card'>Tools: BlueJ, VS Code, Eclipse</li>
              

      </div>      
        
      <div className = 'skillcard'>
        <ImLab size={50} /> 
      <h3 className = 'skillcard-title'> Laboratory and Research </h3>
      
      <ul className = 'subtitle'>Laboratory</ul>
      <li className = 'list-card'>Laboratory Safety & Compliance</li>
      <li className = 'list-card'>Instrument Calibration & Quality Control</li>
      <li className = 'list-card'>Reagent Preparation</li>
     

      <ul className = 'subtitle'>Research</ul>
      <li className = 'list-card'>Experimental Design</li>
      <li className = 'list-card'>Scientific Writing & Documentation</li>
      <li className = 'list-card'>Data Collection & Analysis</li>
    


      </div>

    </div>
  )
}

export default Skills

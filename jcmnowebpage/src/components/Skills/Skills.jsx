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
      </div>

    </div>
  )
}

export default Skills

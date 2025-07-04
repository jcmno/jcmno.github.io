import React from 'react'
import './Navbar.css'
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import logo from '../../assets/apple-touch-icon.png'


const Navbar = () => {
  return (
    
    <div className = 'navbar'>
      
      
      <img src={logo} alt = "logo" className='logowrap' />

      <h1 className="logo-text"> John Camino </h1>

      
      <div className = "navigation">

        <a className = "button" href="#Home">Home</a>
        <a className = "button" href="#Projects">Projects</a>
        <a className = "button" href="#Skills">Skills</a>
        <a className = "button" href="#Education">Education</a>
        <a className = "button" href="#Work">Work</a>
        <a className = "button" href="#Hobbies">Hobbies</a>


      </div>

      <p className= "connect">Connect with me:</p>
      <ul className= "links">
       
        
        <li>
             <a href = "https://www.linkedin.com/in/john-aldrix-camino/"> <FaLinkedin /></a>
        </li>

        <li> 
            <a href = "https://github.com/jcmno"> <FaGithub  /></a>    
        </li>

        <li>
            <a href = "https://www.instagram.com/john_camino/"><FaInstagramSquare /></a>
        </li>

        <li> 
            <a href="mailto:jcamino@sfu.ca"> <FaEnvelope /> </a>

        </li>
      </ul>
    </div>
  )
}

export default Navbar

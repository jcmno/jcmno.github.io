import React from 'react'
import './Navbar.css'
import { CiLinkedin, CiInstagram } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Navbar = () => {
  return (
    <div className = 'navbar'>
      <img src="" alt="" className = 'logo' />
      <ul className="taskbar">
        <li>
             <a href = "https://www.linkedin.com/in/john-aldrix-camino/"> <CiLinkedin/>LinkedIn 
             </a>
        </li>
        <li> 
            <a href = "https://github.com/jcmno"> <FaGithub />GitHub
            </a>    
        </li>
        <li>
            <a href = "https://www.instagram.com/john_camino/"><CiInstagram/>Instagram 
            </a>
        </li>
        <li> 
            <a href="mailto:jcamino@sfu.ca"> <MdOutlineMailOutline />Email
            </a>

        </li>
      </ul>
    </div>
  )
}

export default Navbar

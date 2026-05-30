import React from 'react'
import './Projects.css'
import logo from '../../assets/apple-touch-icon.png'
import vs from '../../assets/VancouverSun.png'
import travel from '../../assets/Travel.png'
import isaac from '../../assets/isaac.png'
import ecobits from '../../assets/ecobits.jpg'

const Projects = () => {
  return (
    <div className = 'project'>
      <section id="Projects"></section>

      <h1>FEATURED PROJECTS</h1>

      <div className = 'card'> 
      <img className = 'card-image' src={isaac} alt="Icon" />
      <h2 className = 'card-title'>AI-Isaac</h2>
      <p className ='card-text'>A Deep-Q Learning (DQN) AI agent that learns to play The Binding of Isaac using a custom Lua–Python bridge.</p>
      <a className='card-link' href ="https://github.com/jcmno/AI-Isaac">GitHub Repo Link</a>
      </div> 

      <div className = 'card'> 
      <img className = ' card-image' src={logo} alt="Icon" />
      <h2 className = 'card-title'>Portfolio</h2>
      <p className ='card-text'>A personal website that showcases my projects, work, skills, and hobbies.</p>
      <a className='card-link' href ="https://github.com/jcmno/jcmno.github.io">GitHub Repo Link</a>
      </div>  

      <div className = 'card'> 
      <img className = 'card-image' src={travel} alt="Icon" />
      <h2 className = 'card-title'>TRIPINARY</h2>
      <p className ='card-text'>A travel planner that generates a personalized itinerary based on the users' location of interest.</p>
      <a className='card-link' href ="https://tripinary-one.vercel.app/">Website link</a>
      </div>  

      <div className = 'card'> 
      <img className = 'card-image' src={ecobits} alt="Icon" />
      <h2 className = 'card-title'>EcoBits</h2>
      <p className = 'card-text'>EcoBits is an eco‑friendly habit tracker that transforms sustainability into a rewarding game.</p>
      <a className='card-link' href ="https://devpost.com/software/ecobits"> Learn more </a>
      </div>  

      <div className = 'card'> 
      <img className = 'card-image' src={vs} alt="Icon" />
      <h2 className = 'card-title'>Published Op-ed</h2>
      <p className ='card-text'>Opinion piece published in the Vancouver Sun titled "Bike lanes versus nature a conundrum." </p>
      <a className='card-link'href ="https://vancouversun.com/opinion/op-ed/opinion-bike-lanes-versus-nature-a-conundrum">Learn more</a>
      </div>

    </div>
  )
}

export default Projects

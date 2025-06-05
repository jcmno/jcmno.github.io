import React from 'react'
import './Projects.css'
import logo from '../../assets/apple-touch-icon.png'
import vs from '../../assets/VancouverSun.png'
import travel from '../../assets/Travel.png'
import biopolis from '../../assets/BIOPOLIS.png'

const Projects = () => {
  return (
    <div className = 'project'>
      <h1>Featured Projects</h1>

      <div className = 'card'> 
      <img className = 'image-border card-image' src={logo} alt="Icon" />
      <h2 className = 'card-title'>Portfolio</h2>
      <p className ='card-text'>A personal website that showcases my projects, work, skills, and hobbies.</p>
      <a className='card-link' href ="https://jcmno.github.io/"> Learn more </a>
      </div>  

      <div className = 'card'> 
      <img className = 'card-image' src={travel} alt="Icon" />
      <h2 className = 'card-title'>Tripinary</h2>
      <p className ='card-text'>A travel planner that generates a personalized itinerary based on the location of interest.</p>
      <a className='card-link'href ="Project1page"> Learn more </a>
      </div>  

      <div className = 'card'> 
      <img className = 'card-image' src={biopolis} alt="Icon" />
      <h2 className = 'card-title'>BIOPOLIS</h2>
      <p className = 'card-text'>A card game to spark curiosity and awareness about our local biodiversity.</p>
      <a className='card-link' href ="https://citystudiovancouver.com/projects/biopolis-the-card-game/"> Learn more </a>
      </div>  

      <div className = 'card'> 

      <img className = 'card-image' src={vs} alt="Icon" />
      <h2 className = 'card-title'>Published Op-ed</h2>
      <p className ='card-text'>Opinion piece published in the Vancouver Sun titled "Bike lanes versus nature a conundrum." </p>
      <a className='card-link'href ="https://vancouversun.com/opinion/op-ed/opinion-bike-lanes-versus-nature-a-conundrum"> Learn more </a>
      </div>  

    </div>
  )
}

export default Projects

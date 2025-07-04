import React from 'react'
import './Bio.css'
import profilepic from '../../assets/profilepic.png'

function Bio() {
  return (
    <div className="bio">
      <section id="Home"></section>
        <div className="bio-text">
          <div className="bio-intro">
          <h1>Hello, I'm John Camino</h1>
          </div>  

        <p>A microbiology lab assistant pursuing a degree in computing science to transition
        into the world of technology. </p>
        <p>Outside of work and school, you can find me out in the wilderness for a hike 
        or exploring a new city.
        </p>
        </div>
        <img className="bio-image"src={profilepic} alt ="John's pic" ></img>
    </div>
  )
}

export default Bio

import React from 'react'
import './Hobbies.css'
import shibuya from '../../assets/Shibuya.jpg'
import robot from '../../assets/Robot.jpg'
import gates from '../../assets/Gates.jpg'
import nara from '../../assets/Nara.jpg'

const Hobbies = () => {
  return (
    <div className = 'hobbies'>
      <h1 className = 'title'>HOBBIES</h1>

        <div className = 'summary'>
        <h2 className = 'hobbysubtitle'>Travel and Outdoors</h2>
        <p className = 'textsummary'>In my spare time, I enjoy going on trips and spending time outdoors. 
            I believe it's important to stay active and travel while we are young.
            One of my favorite trips I went on recently is Japan (pictured below). 
            Visit my <a href = "https://www.instagram.com/john_camino/">Instagram</a> to see more trips.
        </p>

        <div className = 'photoalignment'>
        <img className = 'photocard' src = {shibuya}></img>
        <img className = 'photocard' src = {nara}></img>
        <img className = 'photocard' src = {gates}></img>
        <img className = 'photocard' src = {robot}></img>
        </div>

        </div>
        
    </div>
  )
}

export default Hobbies

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
        <img className = 'photocard' src = {shibuya} alt = 'A rainy day in Shibuya City, Japan. Many buildings with Japanese posters and people with umbrellas walking around.'></img>
        <img className = 'photocard' src = {nara} alt = 'A beautiful sunset in Nara City, Japan. The view is of a pedestrian crossing with bikes on the right side of the street and the left sided has people that just crossed the street. There are buildings and telephone lines on either side of the pedestrian crossing sign.'></img>
        <img className = 'photocard' src = {gates} alt = 'John posing in front of one of the red gates with Japanese writing at Fushimi Inari Shrine. John is on the stairs with his hand on his left leg, eyes closed and smiling. Around the red gates are trees. '></img>
        <img className = 'photocard' src = {robot} alt = 'A big robot statue from the Ghibli movie "Castle in the Sky". The robot statue is about twice the height of John (12 ft) and he is posing right next to it smiling with his finger pointing at the statue.'></img>
        </div>

        </div>

    </div>
  )
}

export default Hobbies

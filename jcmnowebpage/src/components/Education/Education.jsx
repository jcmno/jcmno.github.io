import React from 'react'
import './Education.css'
import sfulogo from '../../assets/sfu.png'

const Education = () => {
  return (
    <div className = 'education'>

        <h1>Education</h1>

        <div className = 'educard'>

        <img className = 'sfu' src = {sfulogo} alt = 'Simon Fraser University logo'></img>   

        <ul className = 'eduTitle'>Post-Baccalaureate Diploma:</ul>
        <ul className = 'eduTitle'>Computing Science </ul>
        <div className = 'eduList'>
        <li>2025 - PRESENT</li>
        <li>Simon Fraser University</li>
        
        </div>
        </div>

        <div className = 'educard'>

        <img className = 'sfu' src = {sfulogo} alt = 'Simon Fraser University logo'></img>   

        <ul className = 'eduTitle'>Bachelor of Science:</ul>
        <ul className = 'eduTitle'>Biological Sciences</ul>
        <div className = 'eduList'>
        <li>2015 - 2019</li>
        <li>Simon Fraser University</li>
        
        </div>
        </div>


      
    </div>
  )
}

export default Education

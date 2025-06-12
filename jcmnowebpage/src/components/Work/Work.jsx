import React from 'react'
import './Work.css'
import sfulogo from '../../assets/simon_fraser_university_logo.jpg'
import phsalogo from '../../assets/PHSA Logo.png'
import starbuckslogo from '../../assets/Starbucks-logo.png'
import pnelogo from '../../assets/pacific_national_exhibition_logo.jpg'

const Work = () => {
  return (
    <div className = 'work'>
        <h1>Work Experience</h1>

            <div className = 'work-card'>
                <img className = 'work-logo' src = {phsalogo} alt = "Provincial Health Services Authorities logo"></img>
                <h2>Lab Assistant</h2>
                <p className = 'work-title'>Provincial Health Services Authorities</p>   
                <p className = 'dates'>Nov 2020 - PRESENT</p>      
            </div>

            <div className = 'work-card'>
                <img className = 'work-logo' src = {sfulogo} alt = "Simon Fraser University logo"></img>
                <h2>Research Assistant</h2>
                <p className = 'work-title'>Simon Fraser University</p>
                <p className = 'dates'>May 2019 - Dec 2019</p>   
            </div>

            <div className = 'work-card'>
                <img className = 'work-logo' src = {starbuckslogo} alt = "Starbucks logo"></img>
                <h2>Barista</h2>
                <p className = 'work-title'> Starbucks</p>
                <p className = 'dates'>June 2020 - Oct 2020</p>  
            </div>

            <div className = 'work-card'>
                <img className = 'work-logo' src = {pnelogo} alt = "Simon Fraser University logo"></img>
                <h2>Finance Clerk</h2>
                <p className = 'work-title'> Pacific National Exhibition</p>
                <p className = 'dates'>Aug 2019 - Dec 2019</p>  
            </div>


    </div>
  )
}

export default Work

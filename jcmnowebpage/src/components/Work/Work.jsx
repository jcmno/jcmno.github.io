import React from 'react'
import './Work.css'
import sfulogo from '../../assets/simon_fraser_university_logo.jpg'
import phsalogo from '../../assets/PHSA Logo.png'
import starbuckslogo from '../../assets/Starbucks-logo.png'
import pnelogo from '../../assets/pacific_national_exhibition_logo.jpg'

const Work = () => {
  return (
    <div className = 'work'>
        <section id="Work"></section>
        <h1>WORK EXPERIENCE</h1>

            <div className = 'work-card'>
                <img className = 'work-logo' src = {phsalogo} alt = "Provincial Health Services Authorities logo"></img>
                <h2>Lab Assistant</h2>
                <p className = 'work-title'>Provincial Health Services Authorities</p>   
                <p className = 'dates'>Nov 2020 - PRESENT</p>      
                <ul className = 'work-subtitle'>Job Description</ul>
                <li className = 'work-description'>Processed and prepared over 200 respiratory specimens daily for PCR testing</li>
                <li className = 'work-description'>Collaborated across lab teams to deliver test results within 24 hours</li>
                <li className = 'work-description'>Maintained critical lab equipment and monitored supply inventory</li>
               
                
            </div>

            <div className = 'work-card'>
                <img className = 'work-logo' src = {sfulogo} alt = "Simon Fraser University logo"></img>
                <h2>Research Assistant</h2>
                <p className = 'work-title'>Simon Fraser University</p>
                <p className = 'dates'>May 2019 - Dec 2019</p>   
                <ul className = 'work-subtitle'>Job Description</ul>
                <li className = 'work-description'>Developed and conducted environmental toxicology assays</li>
                <li className = 'work-description'>Collected, analyzed, and interpreted over 575 data entries using Microsoft Excel  </li>
                <li className = 'work-description'>Oversaw undergraduate student volunteers supporting toxicological research </li>

            </div>

            <div className = 'work-card'>
                <img className = 'work-logo' src = {starbuckslogo} alt = "Starbucks logo"></img>
                <h2>Barista</h2>
                <p className = 'work-title'> Starbucks</p>
                <p className = 'dates'>June 2020 - Oct 2020</p>  
                <ul className = 'work-subtitle'>Job Description</ul>
                <li className = 'work-description'>Delivered consistent customer experiences in a fast-paced environment</li>
                <li className = 'work-description'>Maintained cleanliness and organization while managing multiple drink and food orders</li>
                <li className = 'work-description'>Supported store operations by handling cash transactions, managing inventory, and restocking supplies</li>
            </div>

            <div className = 'work-card'>
                <img className = 'work-logo' src = {pnelogo} alt = "Pacific National Exhibition logo"></img>
                <h2>Finance Clerk</h2>
                <p className = 'work-title'> Pacific National Exhibition</p>
                <p className = 'dates'>Aug 2019 - Dec 2019</p>  
                <ul className = 'work-subtitle'>Job Description</ul>
                <li className = 'work-description'>Managed high-value transactions using a cash register with accuracy</li>
                <li className = 'work-description'>Compiled and updated sales commissions using Microsoft Excel and Macola</li>
                <li className = 'work-description'>Provided excellent customer service while collecting commissions from food truck vendors</li>
            </div>


    </div>
  )
}

export default Work

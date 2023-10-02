import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../css/team.css'
function Team() {
  return (
    <div>
        <Navbar />
      <h1 className="heading">Team</h1>
      <hr className="hr-1" />
      <p className='paragraph'>Our Team Members who have contributed immensely to our Growth</p>
      
      <Footer/>
    </div>
  )
}

export default Team

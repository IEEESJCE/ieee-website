import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Profilecard from '../components/profilecard'
import { team_photo } from '../components/team_photo'
import '../css/team.css'
function Team() {

  return (
    <div>
        <Navbar />
      <h1 className="heading">Team</h1>
      <hr className="hr-1" />
      <p className='paragraph'>Our Team Members who have contributed immensely to our Growth</p>
      <div className="executive_committe">
          <h1 className='small_heading'>Executive Committee</h1>
        <div className="executive_committe_card">
         {  team_photo.filter((photo) => photo.type === 'executive_committee').map((photo) =>{
            return <Profilecard key={photo.id} photo={photo}/>
          })}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Team

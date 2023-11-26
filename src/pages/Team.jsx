import {React} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Profilecard from '../components/profilecard'
import {
  current_team_photo,
  senior2022_team_photo,
} from '../components/team_photo'
import '../css/team.css'
import Caraousel from '../components/Caraousel'

function Team() {
  var hide = document.getElementsByClassName('hide')
  var plus = document.getElementsByClassName('plus')

  const handleClick = () => {
    if (hide[0].style.display === 'none') {
      hide[0].style.display = 'block'
      plus[0].innerHTML = '-'
    } 
    else {
      hide[0].style.display = 'none'
      plus[0].innerHTML = '+'
    }
  }
  return (
    <div>
      <Navbar />
      <h1 className="heading">Team IEEE-SJCE</h1>
      <hr className="hr-1" />
      <p className="paragraph">
        Our Team Members who have contributed immensely to our Growth
      </p>
      <Caraousel />
      <div className="executive_committe">
        <h1 className="small_heading" id="team_execom_id">
          EXECUTIVE COMMITTEE
        </h1>
        <div className="executive_committe_card">
          {current_team_photo
            .filter((photo) => photo.type === 'executive_committee')
            .map((photo) => {
              return <Profilecard key={photo.id} photo={photo} />
            })}
        </div>
      </div>
      <div className="executive_committe">
        <h1 className="small_heading " id="team_mdc_id">
          MEMBERSHIP DEVELOPMENT COMMITTEE
        </h1>
        <div className="executive_committe_card">
          {current_team_photo
            .filter(
              (photo) => photo.type === 'MEMBERSHIP DEVELOPMENT COMMITTEE'
            )
            .map((photo) => {
              return <Profilecard key={photo.id} photo={photo} />
            })}
        </div>
      </div>

      <div className="executive_committe">
        <h1 className="small_heading" id="team_societies_id">
          ELECTRON DEVICES SOCIETY
        </h1>
        <div className="executive_committe_card">
          {current_team_photo
            .filter((photo) => photo.type === 'Electron Devices Society')
            .map((photo) => {
              return <Profilecard key={photo.id} photo={photo} />
            })}
        </div>
      </div>

      <div className="executive_committe">
        <h1 className="small_heading " i>
          WOMEN IN ENGINEERING
        </h1>
        <div className="executive_committe_card">
          {current_team_photo
            .filter((photo) => photo.type === 'women in engineering')
            .map((photo) => {
              return <Profilecard key={photo.id} photo={photo} />
            })}
        </div>
      </div>

      <div className="executive_committe">
        <h1 className="small_heading ">ROBOTICS AND AUTOMATION SOCIETY</h1>
        <div className="executive_committe_card">
          {current_team_photo
            .filter((photo) => photo.type === 'robotics and automation society')
            .map((photo) => {
              return <Profilecard key={photo.id} photo={photo} />
            })}
        </div>
      </div>

      <div className="executive_committe">
        <h1 className="small_heading " id="team_boards_id">
          WEB DEVELOPMENT BOARD
        </h1>
        <div className="executive_committe_card">
          {current_team_photo
            .filter((photo) => photo.type === 'web development board')
            .map((photo) => {
              return <Profilecard key={photo.id} photo={photo} />
            })}
        </div>
      </div>
      <div className="executive_committe">
        <h1 className="small_heading ">Editorial Board</h1>
        <div className="executive_committe_card">
          {current_team_photo
            .filter((photo) => photo.type === 'editorial board')
            .map((photo) => {
              return <Profilecard key={photo.id} photo={photo} />
            })}
        </div>
      </div>

      {/* EXECOM 2022 */}

      <button className="accordion" onClick={handleClick}>
        <span>IEEE Execom 2022</span>
        <span className="plus">+</span>
      </button>

      <div className="seniors hide">
        <div className="executive_committe">
          <h1 className="small_heading ">EXECUTIVE COMMITTEE</h1>
          <div className="executive_committe_card">
            {senior2022_team_photo
              .filter((photo) => photo.type === 'executive_committee')
              .map((photo) => {
                return <Profilecard key={photo.id} photo={photo} />
              })}
          </div>
        </div>
        <div className="executive_committe">
          <h1 className="small_heading ">MEMBERSHIP DEVELOPMENT COMMITTEE</h1>
          <div className="executive_committe_card">
            {senior2022_team_photo
              .filter((photo) => photo.type === 'MEMBERSHIP DEVELOPMENT COMMITTEE')
              .map((photo) => {
                return <Profilecard key={photo.id} photo={photo} />
              })}
          </div>
        </div>

        <div className="executive_committe">
          <h1 className="small_heading ">ELECTRON DEVICES SOCIETY</h1>
          <div className="executive_committe_card">
            {senior2022_team_photo
              .filter((photo) => photo.type === 'Electron Devices Society')
              .map((photo) => {
                return <Profilecard key={photo.id} photo={photo} />
              })}
          </div>
        </div>

        <div className="executive_committe">
          <h1 className="small_heading ">WOMEN IN ENGINEERING</h1>
          <div className="executive_committe_card">
            {senior2022_team_photo
              .filter((photo) => photo.type === 'women in engineering')
              .map((photo) => {
                return <Profilecard key={photo.id} photo={photo} />
              })}
          </div>
        </div>

        <div className="executive_committe">
          <h1 className="small_heading ">ROBOTICS AND AUTOMATION SOCIETY</h1>
          <div className="executive_committe_card">
            {senior2022_team_photo
              .filter((photo) => photo.type === 'robotics and automation society')
              .map((photo) => {
                return <Profilecard key={photo.id} photo={photo} />
              })}
          </div>
        </div>

        <div className="executive_committe">
          <h1 className="small_heading ">WEB DEVELOPMENT BOARD</h1>
          <div className="executive_committe_card">
            {senior2022_team_photo
              .filter((photo) => photo.type === 'web development board')
              .map((photo) => {
                return <Profilecard key={photo.id} photo={photo} />
              })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Team

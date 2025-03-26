import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../css/profilecard.css'

function ProfileCard(props) {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <div key={props.id}>
      <div className="profile_card_container">
        <div className="col-md-4 col-sm-6">
          <div className="our-team">
            <div className="team-image">
              <img src={props.photo.src} alt={props.photo.name} />
              <ul className="social">
                <li>
                  <a 
                    href={props.photo.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="linkedin"
                  >
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a 
                    href={`mailto:${props.photo.gmail}`}
                    className="email"
                  >
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </a>
                </li>
              </ul> 
            </div>
            <div className="team-content">
              <h3 className="title">{props.photo.name}</h3>
              <p className="description">{props.photo.post}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard;
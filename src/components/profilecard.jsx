import React from 'react'
import '../css/profilecard.css'

function profilecard(props) {
  return (
    <div key={props.id}>
      <div className="profile_card_container">
        
          {/* <div className="social-image">
            <img src={props.photo.src} alt='profile_pic' />
          </div> */}
      </div>
    </div>
  )
}

export default profilecard

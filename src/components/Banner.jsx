import React from 'react'
import '../css/Banner.css'
function Banner() {
  return (
    <div>
      <div className="banner-div overlay">
        <img className="banner" src="/photos/gallery/ieee_banner.jpg" alt="banner" />
        <h3 className='welcome_title'><span>Welcome To</span></h3>
        <div className="club_name">
          <h1 className='animate_character'>IEEE-SJCE</h1> 
        </div>
      </div>
    </div>
  )
}

export default Banner
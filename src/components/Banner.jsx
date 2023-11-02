import React from 'react'
import '../css/Banner.css'
import { HashLink } from 'react-router-hash-link'
import {Link} from 'react-router-dom'
function Banner() {
  return (
    <div>
      <div className="banner-div overlay">
        <img
          className="banner"
          src="/photos/gallery/sl1-mobile.jpg"
          alt="banner"
        />
        <h3 className="welcome_title">
          <span>Welcome To</span>
        </h3>
        <div className="club_name">
          <h1 className="animate_character">IEEE SJCE</h1>
        </div>
        <div className='explore_btn_div'>
          <a href="https://www.linkedin.com/in/subroto-koiry"><button className='explore_btn'>Explore</button></a>
        </div>
      </div>
    </div>
  )
}

export default Banner
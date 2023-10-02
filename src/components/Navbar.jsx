import React from 'react'
import styled from 'styled-components'
import '../css/navbar.css'
function Navbar() {
  const toggle=(e)=>{
    const navbar=document.getElementsByClassName('navbar-dropdown')[0];
    navbar.classList.toggle('active');
  }
  // window.onscroll = function () {
  //   myFunction()
  // }

  // const navlist = document.getElementsByClassName('navbar')[0]

  /* Function to stick the nav bar */
  // function myFunction() {
  //   if (window.pageYOffset >= 100) {
  //     navlist.classList.add('sticky')
  //     navlist.classList.add('nav-sticky')
  //   } else {
  //     navlist.classList.remove('sticky')
  //     navlist.classList.remove('nav-sticky')
  //   }
  // }
  return (
    <NavbarContainer>
      <div className="navbar">
        <a href="/" className="logo">
          <img src="/photos/logo.png" alt="logo" id="logo_img" />
        </a>
        <div className="toggle-button" onClick={toggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="navbar-dropdown">
          <li >
            <a href="./board" className="navbar-links">
              BOARDS
            </a>
            <div className="dropdown">
              <a href="./boards.html#web_id">
                <img src="/photos/vectors/web-dev.png" alt="" />
                <span>WEB-DEVELOPMENT BOARD</span>{' '}
              </a>
              <a href="./boards.html#ed_id">
                <img src="/photos/vectors/pen.png" alt="" /> EDITORIAL BOARD
              </a>
            </div>
          </li>
          <li>
            <a href="./societies.html" className="">
              SOCIETIES
            </a>
            <div className="dropdown">
              <a href="./societies.html#std_id">
                <img src="/photos/vectors/student1.png" alt="" /> STUDENT BRANCH
              </a>
              <a href="./societies.html#eds_id">
                <img src="/photos/vectors/electronic.png" alt="" /> ELECTRON
                DEVICES SOCIETY
              </a>
              <a href="./societies.html#wie_id">
                <img src="/photos/vectors/woman.png" alt="" /> WOMEN IN
                ENGINEERING
              </a>
              <a href="./societies.html#rds_id">
                <img src="/photos/vectors/robotics.png" alt="" /> ROBOTICS AND
                AUTOMATION SOCIETY
              </a>
            </div>
          </li>
          <li>
            <a href="/team" className="navbar-links">
              TEAM
            </a>
            <div className="dropdown">
              <a href="./team.html#execom">
                <img src="/photos/vectors/executive committee.png" alt="" />{' '}
                EXECUTIVE COMMITTEE
              </a>
              <a href="./team.html#mem_id">
                <img src="/photos/vectors/membership.png" alt="" /> MEMBERSHIP
                COMMITTEE
              </a>
              <a href="./team.html#socities_id">
                <img src="/photos/vectors/society.png" alt="" /> SOCIETY
              </a>
              <a href="./team.html#boards_id">
                <img src="/photos/vectors/board.png" alt="" /> BOARDS
              </a>
            </div>
          </li>
          <li>
            <a href="./album" className="navbar-links">
              GALLERY
            </a>
          </li>
          <li>
            <a href="./contact_us.html" className="navbar-links">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </NavbarContainer>
  )
}

const NavbarContainer = styled.div`
  
`
export default Navbar
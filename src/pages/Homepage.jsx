import React from 'react'
import Navbar from '../components/Navbar'
import Event from '../components/Event'
import Footer from '../components/Footer'
import styled from 'styled-components'
import Past_events from '../components/Past_events'
import '../css/index.css'
import Caraousel from '../components/Caraousel'
function Homepage() {
  return (
    <Container>
      <Navbar />
      <div className="banner-div">
        <img className="banner" src="/photos/gallery/sl1.jfif" alt="banner" />
      </div>

      <div className="introduction" id="introduction_part">
        <div className="heading">
          <h2>Experience the joy of learning with IEEE-SJCE!</h2>
        </div>
        <div className="second-heading">
          <h2>IMAGINE ! - INNOVATE ! - INSPIRE !</h2>
        </div>
        <div>
          <p className="paragraph">
            IEEE-SJCE conducts many events regularly for students to gain
            knowledge and encourages them to take active part in all of them.
          </p>
        </div>
      </div>
      <Event />
      <Past_events />
      <Caraousel />
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  .banner {
    width: 100vw;
    height: 90vh;
    object-fit: cover;
    position: relative;
    margin-top: 3rem;
    background-size: cover;
    transparent: 0.5;
    filter: blur(1px) brightness(25%);
  }

  /* Introduction */

  .introduction {
    padding-top: 3% 2%;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .heading h2 {
      padding-left: 25auto;
      font-family: sans-serif;
      font-size: 1.9rem;
      color: white;
      letter-spacing: 0.1rem;
      margin: 0px;
    }

    .second-heading h2 {
      padding: auto;
      text-align: center;
      font-size: 2rem;
      font-weight: 500;
      letter-spacing: 0.01rem;
      font-family: sans-serif;
      color: #00ffff;
      /* -webkit-text-stroke: 0.5px black; */
    }

    .paragraph {
      padding-left: 10%;
      font-family: cursive;
      font-size: 1.5rem;
      color: white;
      padding-right: 10%;
      letter-spacing: 0.1rem;
      /* margin-bottom: 5%; */
    }
  }

  @media screen and (max-width: 750px) {
    .banner-div {
      .banner {
        width: 100vw;
        height: 70vh;
        margin-top: 3.2rem;
      }
      .banner{
        width: 100vw;
        height: 70vh;
        margin-top: 3.2rem;
      }
    }
    .introduction {
      .heading h2 {
        padding: 0% 2%;
        font-family: Montserrat, sans-serif;
        font-size: 1.1rem;
        text-align: center;
        color: white;
        letter-spacing: 0.08rem;
        margin: 0px;
      }
      .second-heading {
        padding: 0% 5%;
        font-size: 0.8rem;
        font-weight: 500;
        color: #0077b6;
        -webkit-text-stroke: 0.5px black;
      }
    }
  }
`
export default Homepage
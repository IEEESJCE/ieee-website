import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Event from '../components/Event'
import styled from 'styled-components'
import Past_events from '../components/Past_events'
import '../css/index.css'
import Caraousel from '../components/Caraousel'
import Stand_for from '../components/Stand_for' 
import Milestone_events from '../components/Milestone_events'
import Achievements from '../components/Achievements'
import Bangalore_Flagship from '../components/Bangalore_Flagship'
import Flagship from '../components/Flagship'
import Prayas from '../components/Prayas'
import Mentors from '../components/Mentors'
import Sponsor from '../components/Sponsor'
import Footer from '../components/Footer'
function Homepage() {
  return (
    <Container>
      <Navbar />
      <Banner/>
      <div className="introduction" id="introduction_part">
        <div className="first-heading">
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
      <Caraousel />
      <Past_events />
      <Milestone_events />
      <Achievements/>
      <Stand_for/>
      <Bangalore_Flagship />
      <Flagship/>
      <Prayas/>
      <Mentors/>
      <Sponsor/>
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  /* Introduction */

  .introduction {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .first-heading h2 {
      text-align: center;
      font-family: sans-serif;
      font-size: 1.9rem;
      color: white;
      letter-spacing: 0.1rem;
      margin-top: 2%;
      color: #b8c0e7;
    }

    .second-heading h2 {
      padding: auto;
      text-align: center;
      font-size: 3.5rem;
      font-weight: 750;
      letter-spacing: 0.01rem;
      font-family: sans-serif;
      color: #2085de;
      animation: lights 5s 750ms linear infinite;
      /* -webkit-text-stroke: 0.5px black; */
    }

  }
  @keyframes lights {
    0% {
      color: hsl(230, 40%, 80%);
      text-shadow: 0 0 1em hsla(320, 100%, 50%, 0.2),
        0 0 0.125em hsla(320, 100%, 60%, 0.3),
        -1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
        1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
    }

    30% {
      color: hsl(230, 80%, 90%);
      text-shadow: 0 0 1em hsla(320, 100%, 50%, 0.5),
        0 0 0.125em hsla(320, 100%, 60%, 0.5),
        -0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
        0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
    }

    40% {
      color: hsl(230, 100%, 95%);
      text-shadow: 0 0 1em hsla(320, 100%, 50%, 0.5),
        0 0 0.125em hsla(320, 100%, 90%, 0.5),
        -0.25em -0.125em 0.125em hsla(40, 100%, 60%, 0.2),
        0.25em 0.125em 0.125em hsla(200, 100%, 60%, 0.4);
    }

    70% {
      color: hsl(230, 80%, 90%);
      text-shadow: 0 0 1em hsla(320, 100%, 50%, 0.5),
        0 0 0.125em hsla(320, 100%, 60%, 0.5),
        0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
        -0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
    }

    100% {
      color: hsl(230, 40%, 80%);
      text-shadow: 0 0 1em hsla(320, 100%, 50%, 0.2),
        0 0 0.125em hsla(320, 100%, 60%, 0.3),
        1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
        -1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
    }
  }

  @media screen and (max-width: 750px) {
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
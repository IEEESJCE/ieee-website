import {React, useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
// import Confetti from 'react-confetti'
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
import AOS from 'aos'
import 'aos/dist/aos.css'

function Homepage() {
  // const [confettiActive, setConfettiActive] = useState(true);
  
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1300,
  //     once: false,
  //     mirror: true,
  //     easing: 'ease-out-cubic'
  //   });
    
  //   // Limit confetti duration
  //   const timer = setTimeout(() => {
  //     setConfettiActive(false);
  //   }, 8000);
    
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <Container>
      <BackgroundEffect />
      <Navbar />
      <Banner />
      {/* {confettiActive && <Confetti height={window.innerHeight} width={window.innerWidth} recycle={false} numberOfPieces={200} />} */}
      
      <div className="introduction" id="introduction_part">
        <div className="first-heading">
          <h2 data-aos="fade-down">
            Experience the joy of learning with IEEE-SJCE!
          </h2>
        </div>
        <div className="second-heading" data-aos="zoom-in" data-aos-delay="300">
          <h2 className='largeScreen'>IMAGINE ! - INNOVATE ! - INSPIRE !</h2>
          <h2 className='smallScreen'>IMAGINE ! INNOVATE ! INSPIRE !</h2>
        </div>
        <div className="paragraph-container" data-aos="fade-up" data-aos-delay="600">
          <p className="paragraph">
            IEEE-SJCE conducts many events regularly for students to gain
            knowledge and encourages them to take active part in all of them.
          </p>
          <div className="glowing-button-container">
            <button className="glowing-button">JOIN US</button>
          </div>
        </div>
      </div>
      
      <div className="section-divider">
        <div className="divider-line"></div>
        <div className="divider-icon"></div>
        <div className="divider-line"></div>
      </div>
      
      <Event />
      <Caraousel />
      <Past_events />
      <Milestone_events />
      <Achievements />
      <Stand_for />
      <Bangalore_Flagship />
      <Flagship />
      <Prayas />
      <Mentors />
      <Sponsor />
      <Footer />
    </Container>
  )
}

const BackgroundEffect = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 15% 30%, rgba(32, 133, 222, 0.08) 0%, transparent 25%),
    radial-gradient(circle at 85% 20%, rgba(100, 65, 255, 0.05) 0%, transparent 35%),
    radial-gradient(circle at 50% 80%, rgba(32, 133, 222, 0.07) 0%, transparent 35%);
  pointer-events: none;
  z-index: -1;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(10, 15, 30, 0.2) 0%, rgba(10, 15, 30, 0.1) 100%);
    background-size: 200% 200%;
    animation: gradientFlow 15s ease infinite;
    z-index: -1;
  }
  
  @keyframes gradientFlow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const Container = styled.div`
  background-color: #0a0f1e;
  color: #e6e6fa;
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
  position: relative;
  
  /* Section Divider */
  .section-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3rem 0;
    padding: 0 2rem;
    
    .divider-line {
      height: 1px;
      flex-grow: 1;
      background: linear-gradient(90deg, transparent 0%, rgba(32, 133, 222, 0.5) 50%, transparent 100%);
    }
    
    .divider-icon {
      width: 12px;
      height: 12px;
      background-color: #2085de;
      transform: rotate(45deg);
      margin: 0 15px;
      position: relative;
      
      &:before, &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border: 1px solid rgba(32, 133, 222, 0.5);
        animation: pulse 2s infinite;
      }
      
      &:after {
        animation-delay: 1s;
      }
    }
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  /* Introduction */
  .introduction {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 5% 10%;
    
    .first-heading h2 {
      text-align: center;
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.9rem;
      letter-spacing: 0.1rem;
      margin-top: 2%;
      color: rgba(184, 192, 231, 0.9);
      font-weight: 400;
      text-shadow: 0 0 15px rgba(184, 192, 231, 0.3);
    }

    .second-heading h2 {
      text-align: center;
      font-size: 3.2rem;
      font-weight: 800;
      letter-spacing: 0.05rem;
      font-family: 'Orbitron', sans-serif;
      color: #2085de;
      animation: neonGlow 5s ease-in-out infinite alternate;
      margin: 1.5rem 0;
    }
    
    .paragraph-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 1.5rem;
    }
    
    .paragraph {
      text-align: center;
      max-width: 700px;
      margin: 0 auto 2rem;
      font-size: 1.2rem;
      line-height: 1.8;
      color: rgba(255, 255, 255, 0.8);
    }
    
    .glowing-button-container {
      margin-top: 1.5rem;
    }
    
    .glowing-button {
      background: linear-gradient(45deg, #2085de, #4a75e6);
      color: white;
      border: none;
      padding: 0.8rem 2.5rem;
      font-size: 1.1rem;
      font-weight: 600;
      letter-spacing: 1px;
      border-radius: 30px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
      box-shadow: 0 0 20px rgba(32, 133, 222, 0.5), 
                  inset 0 0 10px rgba(255, 255, 255, 0.2);
      
      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 0 30px rgba(32, 133, 222, 0.8), 
                    inset 0 0 15px rgba(255, 255, 255, 0.3);
      }
      
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: all 0.5s;
      }
      
      &:hover:before {
        left: 100%;
      }
    }
  }
  
  @keyframes neonGlow {
    0% {
      color: #2085de;
      text-shadow: 
        0 0 10px rgba(32, 133, 222, 0.8),
        0 0 20px rgba(32, 133, 222, 0.5),
        0 0 30px rgba(32, 133, 222, 0.3);
    }
    50% {
      color: #4a9eff;
      text-shadow: 
        0 0 15px rgba(74, 158, 255, 0.8),
        0 0 25px rgba(74, 158, 255, 0.5),
        0 0 35px rgba(74, 158, 255, 0.3);
    }
    100% {
      color: #2085de;
      text-shadow: 
        0 0 10px rgba(32, 133, 222, 0.8),
        0 0 20px rgba(32, 133, 222, 0.5),
        0 0 30px rgba(32, 133, 222, 0.3);
    }
  }

  /* Particle Effect */
  @keyframes float {
    0% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
    100% { transform: translateY(0px) rotate(0deg); }
  }

  .smallScreen {
    display: none;
  }

  /* Media Queries */
  @media screen and (max-width: 1024px) {
    .introduction {
      padding: 5% 5%;
      
      .first-heading h2 {
        font-size: 1.7rem;
      }
      
      .second-heading h2 {
        font-size: 2.8rem;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .introduction {
      .first-heading h2 {
        font-size: 1.5rem;
      }
      
      .second-heading h2 {
        font-size: 2.2rem;
      }
      
      .paragraph {
        font-size: 1.1rem;
      }
    }
    
    .smallScreen {
      display: block;
    }
    
    .largeScreen {
      display: none;
    }
  }

  @media screen and (max-width: 480px) {
    .introduction {
      padding: 10% 5%;
      
      .first-heading h2 {
        font-size: 1.3rem;
      }
      
      .second-heading h2 {
        font-size: 1.8rem;
      }
      
      .paragraph {
        font-size: 1rem;
        line-height: 1.6;
      }
      
      .glowing-button {
        padding: 0.7rem 2rem;
        font-size: 1rem;
      }
    }
  }
`;

export default Homepage;
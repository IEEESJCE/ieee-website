import React from 'react'
import Confetti from 'react-confetti'
import '../css/milestone_events.css'
function Milestone_events() {
  return (
    <>
    <div className="event" id="event_part">
        <h1 className='heading'>Milestones Events</h1>
        <hr className="hr-1"/>
     </div>
        <div className='outer_milestone_container'>
  <div className ="milestone_container">
    <div className = "card">
      <div className = "image">
        <img href = "#" src="/photos/events/latex_workshop.jpeg" alt=""/>
      </div>
      <div className = "content">
        <h3>Latex Workshop</h3>
        <p>LaTeX is a typesetting software used to generate professional-looking documents..</p>
      </div>
    </div>    
    <Confetti/>
    <div className = "card">
      <div className = "image">
        <img href = "#" src="/photos/events/bug_bounty.jpeg" alt=""/>
      </div>
      <div className = "content">
        <h3>Bug Bounty</h3>
        <p>IEEE-SJCE is delighted to welcome you all to BUG BOUNTY - An online treasure hunt!</p>
      </div>
    </div>   
      <div className = "card">
      <div className = "image">
        <img href = "#" src="/photos/events/QUIZBIZZ.jpeg" alt=""/>
      </div>
      <div className = "content">
        <h3>Quiz-Bizz</h3>
        <p>QUIZBIZZ is an event for people of all branches to test their skills and knowledge in various fields..</p>   
    </div>
    </div>  <div className = "card">
      <div className = "image">
        <img href = "#" src="/photos/events/robotics_13.jpeg" alt=""/>
      </div>
      <div className = "content">
        <h3>Robotics 13</h3>
        <p>Technology has always made life simple and robots have changed the course of our lives in unimaginable ways.</p>
    </div>
    </div>  <div className = "card">
      <div className = "image">
        <img href = "#" src="/photos/events/iot.jpg" alt=""/>
      </div>
      <div className = "content">
        <h3>IoT Workshop</h3>
        <p>This cool, futuristic seeming sorcery is what we formally call IoT aka Internet of Things..</p>
      </div>
    </div>  <div className = "card">
      <div className = "image">
        <img href = "#" src="/photos/events/pc.jpg" alt=""/>
      </div>
      <div className = "content">
        <h3>PC Assembly</h3>
        <p>Building a computer is fun, affordable and empowering. It's fun being able to choose all of the parts..
</p>
    </div>
    </div>  <div className = "card">
      <div className = "image">
        <img href = "#" src="/photos/events/soldering.jpeg" alt=""/>
      </div>
      <div className = "content">
        <h3>Soldering Workshop</h3>
        <p>How is your relation-chip with electronics? Not great? Fret not! We're here to build a strong one from scratch..</p>
      </div>
    </div>  <div className = "card">
      <div className = "image">
        <img href = "#" src="/photos/events/sql.jpg" alt=""/>
      </div>
      <div className = "content">
        <h3>SQL Bootcamp</h3>
        <p>How do you fetch the second highest salary in the given database? Or, even simpler..</p>
    </div>
    </div> 
  </div>
    </div>
    </>
  )
}

export default Milestone_events
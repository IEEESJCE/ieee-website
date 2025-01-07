import {React,useEffect} from 'react'
import '../css/event.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Event() {
   useEffect(() => {
     AOS.init({
       duration: 900, // Set the duration of the animation
       once: true, // Only animate once
     })
   }, [])
  return (
    <div>
      <div className="event" id="event_part">
        <h1 className="heading" data-aos="fade">
          Upcoming Events
        </h1>
        <hr className="hr-1" />
      </div>

      <div className="new_event" id="new_event_1" data-aos="zoom-in">
      <img
        src="/photos/events/soldering&etching.jpeg"
        alt="Soldering and Etching"
        data-aos="zoom-in"
      />


        <div className="inside_box">
          <h1>Soldering and Etching Workshop</h1>
          <p data-aos="zoom-in">
          Ever wondered how the components are placed on the PCB? Curious to learn how exactly PCBs work?
          Then get ready to dive into the fascinating world of PCB designing! 🔌

            <br />
            <br />
            The EDS wing of IEEE-SJCE presents you with the flagship event,<br />🪛 Soldering and Etching 🪛Workshop
            <br />
            <br />
            Step into the exciting world of PCB design which gives you hands-on experience in designing, etching, and soldering the circuit boards from scratch.⚙ By the end of the workshop, you'll be fully capable of soldering, etching, and skillfully designing your own circuit boards! 🛩
            <br />
            <br />
            If you're interested, please complete the Google Form:
            <br />
            <br />
            Participate in a team of 2.<br />
            Registration fee (per person, exclusive of kit):<br />
             IEEE Members with EDS: Rs. 99/-<br />
             IEEE Members without EDS: Rs. 399/-<br />
            Non-IEEE Members: Rs. 599/-<br />

            Kit price: Rs. 699/-
            <br />
            <br />
            🗓 Date: 10th, 11th, and 12th January 2025<br />
            📍 Venue: Seminar Hall, 1st floor CMS Block
            <br />
            <br />
            For more information, contact:
            <br />
            Gagan: <b style={{ color: '#0095da' }}>9902068272</b>
          </p>
          <button className="btn">
            <a
              style={{ textDecoration: 'none', color: 'white' }}
              href="https://bit.ly/Soldering_and_Etching_Registration_form"
            >
              Register Now
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Event;

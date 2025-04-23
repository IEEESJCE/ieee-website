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
        src="/photos/events/tech_kshetra.jpg"
        alt="tech_kshetra"
        data-aos="zoom-in"
      />


        <div className="inside_box">
          <h1>TECH_KSHETRA(Project Expo)</h1>
          <p data-aos="zoom-in">
            The RAS wing of IEEE-SJCE, in collaboration with the IEEE Mysore Subsection, is here with an inter-college project expo like no other!,<br />⚙ TechKshetra ⚙


            <br />
            <br />
            Categories:<br/>
🔸 Category I (1st & 2nd Year Students) – This category focuses on nurturing foundational innovation and promoting technical curiosity and a competitive spirit among early-stage undergraduate students.<br/>

🔸 Category II (3rd & 4th Year Students ) – It is aimed at providing an advanced platform for students to present their refined, impactful projects and push the boundaries of their technical expertise.

            <br />
            <br />
            Important Details:<br/>
🗓 Deadline for submission of team details: 29th April, 2025<br/>
🗓 Project Expo date: 3rd May, 2025<br/>
🏛 Venue: SJCE, JSS Science and Technology University, Mysore

            <br />
            <br />
            Registration fee (for the selected teams):<br/>
Team with atleast one IEEE member : Rs. 399/-<br/>
Team without any IEEE member : Rs. 499/-<br/>

            For more information, contact:
            <br />
            Nandeesh: <b style={{ color: '#0095da' }}>7483143962</b>
            <br/>
            Pranav: <b style={{ color: '#0095da' }}> 9110682462</b>
          </p>
          {/* <button className="btn">
            <a
              style={{ textDecoration: 'none', color: 'white' }}
              href="https://bit.ly/Soldering_and_Etching_Registration_form"
            >
              Register Now
            </a>
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default Event;

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
          src="/photos/events/kalpana_chawla_memorial_lecture.jpg"
          alt=""
          data-aos="zoom-in"
        />

        <div className="inside_box">
          <h1> Kalpana Chawla Memorial Lecture</h1>
          <p data-aos="zoom-in">
            Warm regards from IEEE-SJCE! ✨
            <br />
            <br />
            Did the successful landing of Chandrayaan 3 fill you with pride?
            Ever wondered about the challenges behind achieving such perfection?
            🚀
            <br />
            To unravel these mysteries, IEEE-SJCE WIE wing proudly presents the
            <br />
            <br />
            🎤
            <b style={{ color: '#0095da' }}>Kalpana Chawla Memorial Lecture</b>
            🎤
            <br />
            <br />
            <b style={{ color: '#0095da' }}>Mrs. Roopa M.V.</b>, an outstanding
            scientist with an impressive background, who served as the{' '}
            <b style={{ color: '#0095da' }}>
              Deputy Project Director for Chandrayaan-3
            </b>{' '}
            Mission, will enlighten us with her profound insights on
            <b style={{ color: '#0095da' }}>
              "Challenges Faced in Chandrayaan-3 Mission"
            </b>
            .
            <br />
            <br />
            🗓 Date: <b style={{ color: '#0095da' }}>Saturday, 9th December</b>
            <br />⌚ Time: <b style={{ color: '#0095da' }}>2:30 PM</b>
            <br />
            📍 Venue: <b style={{ color: '#0095da' }}> IS Seminar Hall</b>
            <br />
            <br />
            Join us for an enriching session as we explore the complexities and
            triumphs behind the Chandrayaan 3 Mission. 📡 See you all! 👋🏻
            <br />
            <br />
            For any queries, contact:
            <br />
            Sinchana: +91 <b style={{ color: '#0095da' }}> 9113024481</b>
            <br />
            Vaibhav: +91 <b style={{ color: '#0095da' }}>9986340818</b>
            <br />
          </p>
          <button className="btn">
            {' '}
            <a
              style={{ textDecoration: 'none', color: 'white' }}
              href="https://bit.ly/Kalpana_Chawla_Memorial_Lecture_2023"
            >
              Watch liveStream 
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Event;

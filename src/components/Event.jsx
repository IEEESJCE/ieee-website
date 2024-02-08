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
          src="/photos/events/python_bootcamp.jpg"
          alt=""
          data-aos="zoom-in"
        />

        <div className="inside_box">
          <h1> Python Bootcamp</h1>
          <p data-aos="zoom-in">
            Hola coders! 🙌
            <br />

            Greetings from IEEE-SJCE! ✨
            <br />
            <br />
            The RAS wing of IEEE-SJCE presents its annual event
            <br />
            <br />
            <b style={{ color: '#0095da' }}>👨‍💻 Python Bootcamp  👩‍💻 </b>
            <br />
            <br />
            Are you a student aiming to kickstart your programming journey? 🤩
            <br />
            <br />
            The Python Bootcamp provides a well-organized approach for learning to program in Python. 👩‍💻
            <br />
            This bootcamp is designed for beginners seeking to develop strong coding skills. 🥳
            <br />
            <br />
            The ability to program in Python gives prospective developers access to a multitude of job opportunities, from scripting to data science. 🤯 
            <br />
            <br />
            Join us and unlock the potential of Python for your coding journey!
            <br />
            <br />
            <b style={{ color: '#0095da' }}>Registration is FREE! 🎉</b>
            <br />
            <br />
            🗓 Date: <b style={{ color: '#0095da' }}>9th, 10th & 11th February</b>
            <br />
            📍 Platform : <b style={{ color: '#0095da' }}>Google Meet
</b>
            <br />
            <br />
            Sign up now! 🤩
            <br />
            <br />
            For any queries, contact:
            <br />
            Sudhanva: +91 <b style={{ color: '#0095da' }}> 7619618003</b>
            <br />
            Rishabh: +91 <b style={{ color: '#0095da' }}> 6201165099</b>
            <br />
          </p>
          <button className="btn">
            {' '}
            <a
              style={{ textDecoration: 'none', color: 'white' }}
              href="https://bit.ly/PYTHON_BOOTCAMP_2024"
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

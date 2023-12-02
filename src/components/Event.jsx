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
          Events
        </h1>
        <hr className="hr-1" />
      </div>

      <div className="new_event " id="new_event_1" data-aos="zoom-in">
        <img src="/photos/events/event0_photo.jpg" data-aos="zoom-in" alt="" />
        <div className="inside_box">
          <h1> TUXEDO</h1>
          <p data-aos="zoom-in">
            Greetings from IEEE-SJCE!
            <br />
            <br />
            With great pleasure, IEEE-SJCE presents its odd semester technical
            fest ,<b style={{ color: '#0095da' }}> 🎉 TUXEDO'23! 🎉</b>
            <br />
            <br />
            Join us and take part in the most thrilling series of events! 💥
            <br />
            Seize the opportunity to participate in workshops, contests, and
            much more. Make sure to mark your calendars with the events. 💫
            <br />
            The list of events for this incredible week is provided below.👇
            <br />
            <br />
            1.<b style={{ color: '#0095da' }}> Snap Circuits </b> 🧑‍🔧
            <br /> 2.<b style={{ color: '#0095da' }}>
              {' '}
              Web Dev Bootcamp{' '}
            </b> 👩‍💻 <br />
            3. <b style={{ color: '#0095da' }}> Scribble </b> 📝
            <br />
            <br />
            🗓 Mark the dates❗
            <br />
            <br />
            <b style={{ color: '#0095da' }}>
              28th November - 4th December 2023
            </b>
            ,
            <br />
            <br />
            Join the WhatsApp group for further updates❗
            <br />
            <br />
            For further details, contact :-
            <br />
            <br />
            Vineeth:+91 <b style={{ color: '#0095da' }}>6361711970 </b>
            <br />
            Chaitanya: +91 <b style={{ color: '#0095da' }}>8123667019</b>
            <br />
          </p>
          <button className="btn">
            {' '}
            <a
              style={{ textDecoration: 'none', color: 'white' }}
              href="https://bit.ly/TUXEDO_WHATSAPP_GROUP"
            >
              WhatsApp group link
            </a>
          </button>
        </div>
      </div>

      <div className="new_event " id="new_event_2" data-aos="zoom-in">
        <img
          src="/photos/events/event1_photo.jpg"
          alt=""
          id="image1"
          data-aos="zoom-in"
        />
        <div className="inside_box">
          <h1> SNAP CIRCUITS</h1>
          <p data-aos="zoom-in">
            Greetings from IEEE-SJCE! 💥
            <br />
            <br />
            Welcome to the first event of{' '}
            <b style={{ color: '#0095da' }}>Tuxedo'23!</b> ✨
            <br />
            <br />
            New to the world of electronics? Curious to know how electronic
            circuits work? Does building circuits excite you?
            <br />
            The EDS wing of IEEE-SJCE has organised a key event. Prepare
            yourselves to discover the circuits around you. Get ready to be
            electrified by,
            <b>
              🌟 <b style={{ color: '#0095da' }}>Snap Circuits</b> 🌟
            </b>
            <br />
            <br />
            Snap circuits provides a hands-on experience of electronic
            components and their working. It is an opportunity to gain knowledge
            and develop circuit building skills. There is no need for prior
            knowledge about electronics as we are here to help you out. Sounds
            fascinating right?
            <br />
            So what are you waiting for?🤷‍♂ Register now!
            <br />
            <br />
            {/* Registration fee (per team of 3): */}
            Registration fee :
            <br />
            <br />
            <b>IEEE Members:-</b> <b style={{ color: '#0095da' }}>FREE</b>
            <br />
            <b>IEEE members without RAS</b>:-{' '}
            <b style={{ color: '#0095da' }}>Rs. 300/-</b>
            <br />
            <b>Non IEEE Members</b>:-{' '}
            <b style={{ color: '#0095da' }}>INR 50/-</b>
            <br />
            <br />
            🗓 Date:{' '}
            <b style={{ color: '#0095da' }}>28th and 29th November 2023</b>
            <br /> ⌚ Time: <b style={{ color: '#0095da' }}>5:30 PM</b> <br />
            🏢 Venue: <b style={{ color: '#0095da' }}>NPS 001</b>
            <br />
            {/* Kit price: Rs. 1100/-
            <br />
            One kit mandatory per team. Kit includes latest Raspberry Pi Pico W.
            <br />
            <br />
            Date: 28th, 29th & 30th April
            <br />
            Venue: IS Seminar Hall - 1
            <br />
            <br />
            Limited seats only.
            <br /> */}
            <br />
            For further details, contact :-
            <br />
            <br />
            Pranav:+91 <b style={{ color: '#0095da' }}>9116489472</b>
            <br />
            Vallish: +91 <b style={{ color: '#0095da' }}>9611684755</b>
            <br />
          </p>
          <button className="btn">
            {' '}
            <a
              style={{ textDecoration: 'none', color: 'white' }}
              href="https://docs.google.com/forms/d/e/1FAIpQLScAf4Kc_rcwThgjwllo6w8sFHrtesBOVjG-XmsfMjhIZcnXFw/viewform?pli=1"
            >
              Register
            </a>
          </button>
        </div>
        <img src="/photos/events/event1_photo.jpg" alt="" id="image2" />
      </div>

      <div className="new_event" id="new_event_1" data-aos="zoom-in">
        <img src="/photos/events/event2_photo.jpg" alt="" data-aos="zoom-in" />
        <div className="inside_box">
          <h1>WEB DEV BOOTCAMP </h1>
          <p data-aos="zoom-in">
            Greetings from IEEE-SJCE! 💥
            <br />
            <br />
            Wondering how websites works? 🧐
            <br />
            Are you looking forward to begin your journey as a web developer? 🌐
            Dive into the world of web development with our bootcamp! 🎉
            <br />
            <br />
            The WIE and RAS wings of IEEE-SJCE presents the second event of{' '}
            <b style={{ color: '#0095da' }}>
              TUXEDO'23,
              <br /> 👨‍💻 WEB DEV Bootcamp 👩‍💻
            </b>
            <br />
            <br />
            The bootcamp provides you with hands-on experience in building and
            designing interactive websites. 🤌 Don't miss the opportunity to
            acquire essential web development skills. 💻 By the end of the
            workshop, you will be able to build your own websites. Isn't it
            interesting? 🤩
            <br />
            <br />
            🗓 Day 1: <b style={{ color: '#0095da' }}>30th November (Online) </b>
            <br /> 🗓 Day 2:{' '}
            <b style={{ color: '#0095da' }}>
              2nd December (Online){' '}
            </b> <br /> 🗓 Day 3:{' '}
            <b style={{ color: '#0095da' }}>3rd December (Offline) </b>
            <br />
            <br />
            Further details will be updated in the WhatsApp group.
            <br />
            So what are you waiting for? 🤷‍♂ Register below 👇
            <br />
            Only limited seats are available❗
            <br />
            <br />
            Entry fee :
            <br />
            <b>IEEE Members</b>:- <b style={{ color: '#0095da' }}>FREE</b>
            <br />
            <b>Non IEEE Members</b>:-{' '}
            <b style={{ color: '#0095da' }}>INR 50/-</b>
            <br />
            <br />
            For further details, contact
            <br />
            Amit: +91 <b style={{ color: '#0095da' }}>9696012181</b>
            <br />
            Sinchana: +91 <b style={{ color: '#0095da' }}>9113024481</b>
            <br />
          </p>

          <button className="btn">
            <a
              style={{ textDecoration: 'none', color: 'white' }}
              href="https://bit.ly/soldering_and_etching"
            >
              REGISTER
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Event;

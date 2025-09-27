import { React, useEffect } from 'react'
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

      {/* ------------ Event 1 ------------ */}
      <div className="new_event" id="new_event_1" data-aos="zoom-in">
        <img
          src="photos/events/sps_inaguration.jpg"
          alt="ieee_day"
          data-aos="zoom-in"
        />

        <div className="inside_box">
          <h1>IEEE DAY 2025 & SPS Inauguration</h1>
          <p data-aos="zoom-in">
            This day honours the historic moment in 1884 when engineers from across
            the globe first gathered to share ideas, collaborate, and spark
            innovation. IEEE brings people and technology together to make a real
            impact in the world. 🌍
            <br />
            <br />
            As part of the IEEE Day celebration, this year we proudly launch the
            Signal Processing Society. It is a great platform to explore signals in
            healthcare, environment, and media through workshops and competitions
            using MATLAB and Python. 👨‍💻
            <br />
            <br />
            <b>Important Details:</b>
            <br /> 🗓 Event date: 8th October, 2025
            <br /> 🏛 Venue: SJCE, JSS Science and Technology University, Mysore
          </p>
        </div>
      </div>

      {/* ------------ Event 2 ------------ */}
      <div className="new_event" id="new_event_2" data-aos="zoom-in">
        <img
          src="photos/events/orientation_day.jpg"
          alt="hackathon"
          data-aos="zoom-in"
        />

        <div className="inside_box">
          <h1>ORIENTATION DAY</h1>
          <p data-aos="zoom-in">
            IEEE-SJCE brings together passionate minds in technology, innovation, and creativity. This is your chance to explore the club and how you can be part of this exciting journey. 🚀
            Interact with IEEE Execom members to learn about our various societies and get an inside look at the upcoming events in store for you! 🤝
            <br />
            <br />
            This is more than just an introduction, it's your access to valuable connections and chance to engage with our lively community. 🌟
            <br />
            <br />
            <b>Important Details:</b>
            <br /> 🗓 Event date: 18th October, 2025
            <br /> 🏛 Venue: IS Seminar Hall, JSS-STU
          </p>
        </div>
      </div>
    </div>
  )
}

export default Event

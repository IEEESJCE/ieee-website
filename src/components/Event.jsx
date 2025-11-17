import { React, useEffect } from "react";
import "../css/event.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Event() {
  useEffect(() => {
    AOS.init({
      duration: 900, // Set the duration of the animation
      once: true, // Only animate once
    });
  }, []);

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
        <img src="photos/events/iot_4.0.jpg" alt="iot_4.0" data-aos="zoom-in" />

        <div className="inside_box">
          <h1>IOT 4.0</h1>
          <p data-aos="zoom-in">
            This day honours the historic moment in 1884 when engineers from
            across the globe first gathered to share ideas, collaborate, and
            spark innovation. IEEE brings people and technology together to make
            a real impact in the world. 🌍
            <br />
            <br />
            As part of the IEEE Day celebration, this year we proudly launch the
            Signal Processing Society. It is a great platform to explore signals
            in healthcare, environment, and media through workshops and
            competitions using MATLAB and Python. 👨‍💻
            <br />
            <br />
            <b>Important Details:</b>
            <br /> 🗓 Event date: 21st, 22nd, and 23rd November 2025
            <br /> 🏛 Venue: IS Seminar Hall (1st floor), JSS-STU
          </p>
        </div>
      </div>

      {/* ------------ Event 2 ------------ */}
    </div>
  );
}

export default Event;

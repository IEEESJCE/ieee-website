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
          <h1>Soldering and Etching</h1>
          <p data-aos="zoom-in">
          The world of technology is moving to the edge, and the RAS wing of IEEE-SJCE invites you to be a part of this revolution. Join our flagship 3-day hands-on workshop, IoT 4.0, and learn to build the smart, connected devices that are defining the future.
            <br />
            <br />
           Your projects no longer just compute—they connect, sense, and act in the real world. This is your chance to master the core principles of the Internet of Things (IoT) using the versatile Raspberry Pi.
            <br />
            <br />
            <b>Important Details:</b>
            <br /> 🗓 Event date: 19th, 20th, and 21st December 2025
            <br /> 🏛 Venue: IS Seminar Hall (1st floor), JSS-STU
          </p>
        </div>
      </div>

      {/* ------------ Event 2 ------------ */}
    </div>
  );
}

export default Event;

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
        <img src="photos/events/soldering.jpeg" alt="soldering" data-aos="zoom-in" />

        <div className="inside_box">
          <h1>Soldering and Etching</h1>
          <p data-aos="zoom-in">
            Electronics moves from concept to reality when design meets fabrication, and IEEE-SJCE invites you to experience this transformation firsthand. Join our 3-day hands-on Soldering & Etching workshop and learn how electronic circuits are built from the ground up.
            <br />
            <br />
            From mastering soldering techniques and assembling components to fabricating your own printed circuit boards through etching, this workshop focuses on practical, industry-relevant skills. Participants will gain a complete understanding of how ideas on paper become working hardware.
            <br />
            <br />
            Whether you're a beginner or an aspiring hardware enthusiast, this workshop provides the perfect foundation for embedded systems, robotics, and IoT-based projects.
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

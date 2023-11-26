import React from 'react'
import '../css/event.css'
function Event() {
  return (
    <div>
      <div className="event" id="event_part">
        <h1 className="heading">Events</h1>
        <hr className="hr-1" />
      </div>

      <div className="new_event">
        <img src="/photos/events/iot.png" alt="" />
        <div className="inside_box">
          <h1> IoT WORKSHOP</h1>
          <p>
            Greetings from IEEE-SJCE!
            <br />
            IEEE-SJCE RAS is back with their most awaited premier technical
            event, A 3 day workshop that gives a hands-on training session and
            focuses on sensors, microcontrollers, protocols, cloud platforms and
            captivating projects.
            <br />
            Let's kick the session off by embarking on this journey from the
            scratch, where we explore the magic of Raspberry Pi and Pico W (a
            new powerful chip) using micropython.
            <br />
            <br />
            Registration fee (per team of 3):
            <br />
            IEEE members with RAS - Rs. 150/-
            <br />
            IEEE members without RAS - Rs. 300/-
            <br />
            Non-IEEE members - Rs. 600/-
            <br />
            <br />
            Kit price: Rs. 1100/-
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
            <br />
            <br />
            For further details, contact
            <br />
            Gururaj: +91 6361205183
            <br />
            Darshan: +91 7892202663
            <br />
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScSFyOO_yOdaFdMRK-tZPvCSG840KwLKrbp-Udne40t3iuSTQ/viewform?usp=send_form">
              <button className="btn">Register</button>
            </a>
          </p>
        </div>
      </div>

      <div className="new_event" id="new_event_2">
        <img src="/photos/events/soldering.jpeg" alt="" id="image1" />
        <div className="inside_box">
          <h1>SOLDERING AND ETCHING WORKSHOP </h1>
          <p>
            Greetings from IEEE-SJCE!
            <br />
            Electronic appliances play a significant role in our daily lives.
            Are you aware of the PCBs in it? Ever wondered about how it's
            designed and etched? Well! We have something in store for you.
            <br />
            The EDS chapter of IEEE-SJCE brings forth the most awaited event of
            this semester,
            <br />
            It's a three-day workshop where you will be learning how to solder
            and design your own etched circuit boards from scratch.
            <br />
            It's a fundamental skill needed for an engineer, that will be
            utilized irrespective of the different domains in engineering.
            <br />
            <br />
            Date: 20th, 21st and 22nd January 2023
            <br />
            <br />
            Registration Fees (Team of two):
            <br />
            IEEE Members + EDS: Rs. 150/-
            <br />
            IEEE Members without EDS: Rs. 300/-
            <br />
            Non-IEEE Members: Rs. 500/-
            <br />
            <br />
            Price of component kit: Rs. 650/-
            <br />
            Note: One kit is compulsory for every team.
            <br />
            <br />
            Limited seats only.
            <br />
            <br />
            For further details, contact
            <br />
            Abdullah:8861402929
            <br />
            Ashwin:9513908310
            <br />
            <a href="https://bit.ly/soldering_and_etching">
              <button className="btn">Register</button>
            </a>
          </p>
        </div>
        <img src="/photos/events/soldering.jpeg" alt="" id="image2" />
      </div>
    </div>
  )
}

export default Event;

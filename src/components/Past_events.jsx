import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'; 
import 'react-vertical-timeline-component/style.min.css';
import '../css/pastevent.css'
function Past_events() {
  return (
    <>
      <div className="past_events_bigscreen">
        <h1 className="heading">Past Events</h1>
        <hr className="hr-1" />
        <VerticalTimeline lineColor={'rgb(147, 169, 187)'}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: ' rgb(50, 107, 160)',
              color: '#fff',
              right: '5%',
              borderRadius: '20px',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  rgb(180, 227, 255)',
            }}
            date="20th - 22nd January 2023"
            // iconStyle={{ background: '#78b0d8;;', color: '#fff' }}
            icon={
              <img
                className="event_img"
                src="photos/events/soldering_&_etching.jpeg"
                alt=""
              />
            }
          >
            <h3
              style={{ fontSize: '1.7rem' }}
              className="vertical-timeline-element-title"
            >
              Soldering and Etching Workshop
            </h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
            <p style={{ fontSize: '1rem' }}>
              The Electron Devices Society brings forth yet another one-of-a
              kind event, SOLDERING AND ETCHING WORKSHOP a 3-day Workshop that
              gives you a hands-on experience of Soldering and Etching with
              theoretical and practical sessions.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: ' rgb(50, 107, 160)',
              color: '#fff',
              left: '5%',
              borderRadius: '20px',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  rgb(180, 227, 255)',
            }}
            date="13th - 15th April 2023"
            // iconStyle={{ background: '#78b0d8;;', color: '#fff' }}
            icon={
              <img
                className="event_img"
                src="photos/events/iot_workshop.jpeg"
                alt=""
              />
            }
          >
            <h3
              style={{ fontSize: '1.7rem' }}
              className="vertical-timeline-element-title"
            >
              SQL Bootcamp
            </h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
            <p style={{ fontSize: '1rem' }}>
              A 3 day online SQL Bootcamp where participants were taught the
              foundations of Structured Query Language - SQL. Students were
              tasked to build a solid backend component for the given front end!
              Learners were pumped up with the confidence to answer questions
              asked related to SQL during your placements.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: ' rgb(50, 107, 160)',
              color: '#fff',
              right: '5%',
              borderRadius: '20px',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  rgb(180, 227, 255)',
            }}
            date="28th - 30th April 2023"
            // iconStyle={{ background: '#78b0d8;;', color: '#fff' }}
            icon={
              <img
                className="event_img"
                src="photos/events/iot_workshop.jpeg"
                alt=""
              />
            }
          >
            <h3
              style={{ fontSize: '1.7rem' }}
              className="vertical-timeline-element-title"
            >
              IOT Workshop
            </h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
            <p style={{ fontSize: '1rem' }}>
              A 3-day workshop with a lot of learning and interesting hands-on
              sessions.We will be covering protocols and all the other important
              theories, before moving onto the more exciting part of simulating
              them using Raspberry Pi and Node MC.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: ' rgb(50, 107, 160)',
              color: '#fff',
              left: '5%',
              borderRadius: '20px',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  rgb(180, 227, 255)',
            }}
            date="31st May - 4th June 2023
"
            // iconStyle={{ background: '#78b0d8;;', color: '#fff' }}
            icon={
              <img
                className="event_img"
                src="photos/events/robotics.jpeg"
                alt=""
              />
            }
          >
            <h3
              style={{ fontSize: '1.7rem' }}
              className="vertical-timeline-element-title"
            >
              Robotics'14
            </h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
            <p style={{ fontSize: '1rem' }}>
              The workshop included basics of microcontrollers,
              microprocessors,blinking onboard LED, blinking external LED,
              PWM(breathing LED), pull up and pull down concepts and interrupts
              all of these concepts were then implemented in building the
              robots.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: ' rgb(50, 107, 160)',
              color: '#fff',
              right: '5%',
              borderRadius: '20px',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  rgb(180, 227, 255)',
            }}
            date="23rd September 2023"
            // iconStyle={{ background: '#78b0d8;;', color: '#fff' }}
            icon={
              <img
                className="event_img"
                src="photos/events/prayas.jpeg"
                alt=""
              />
            }
          >
            <h3
              style={{ fontSize: '1.7rem' }}
              className="vertical-timeline-element-title"
            >
              Prayas
            </h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
            <p style={{ fontsize: '1rem' }}>
              PRAYAS is an outreach program by IEEE-SJCE WIE that provides
              inequitable education outcomes to underprivileged children. The
              volunteers visited an Orphanage every week to interact with the
              students and help them out in their academic activities.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: ' rgb(50, 107, 160)',
              color: '#fff',
              left: '5%',
              borderRadius: '20px',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  rgb(180, 227, 255)',
            }}
            date="3rd-5th October 2023
"
            // iconStyle={{ background: '#78b0d8;;', color: '#fff' }}
            icon={
              <img
                className="event_img"
                src="photos/events/iot_workshop.jpeg"
                alt=""
              />
            }
          >
            <h3
              style={{ fontSize: '1.7rem' }}
              className="vertical-timeline-element-title"
            >
              IEEE Envision
            </h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
            <p style={{ fontSize: '1rem' }}>
              On IEEE DAY, we celebrated global innovation, technology, and
              collaboration, driving progress and changing the world together.To
              celebrate this commitment, IEEE-SJCE has conducted IEEE-Envision,
              a trio event series. Here is a glimpse of the electrifying events.
              3rd October - Linux Tutelage 4th October - Coggle-Mindscape 5th
              October - Ad Vintage.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: ' rgb(50, 107, 160)',
              color: '#fff',
              right: '5%',
              borderRadius: '20px',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  rgb(180, 227, 255)',
            }}
            date="3rd-4th November 2023"
            // iconStyle={{ background: '#78b0d8;;', color: '#fff' }}
            icon={
              <img
                className="event_img"
                src="photos/events/iot_workshop.jpeg"
                alt=""
              />
            }
          >
            <h3
              style={{ fontSize: '1.7rem' }}
              className="vertical-timeline-element-title"
            >
              Fun-tastic Fiesta & Orientation Day
            </h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
            <p style={{ fontsize: '1rem' }}>
              Fun-tastic Fiesta was a compilation of thrilling array of events
              where freshers had an opportunity to make new connections,
              rejuvenate, get together and have fun! Through Orientation day
              freshers took the opportunity to get to know about IEEE-SJCE and
              its activities. We also held a placement talk for the freshers.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            icon={
              <img className="event_img" src="photos/events/tl5.png" alt="" />
            }
            // icon={<StarIcon />}
          />
        </VerticalTimeline>
      </div>

      {/* for small screen */}

      <div className="past_events_smallscreen">
        <h1 className="heading">Past Events</h1>
        <hr className="hr-1" />
        <VerticalTimeline lineColor={'rgb(147, 169, 187)'} lineHeight={1.5}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: ' rgb(50, 107, 160)',
              color: '#fff',
              borderRadius: '20px',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  rgb(180, 227, 255)',
            }}
            date="20th - 22nd January 2023"
            // iconStyle={{ background: '#78b0d8;;', color: '#fff' }}
            icon={
              <img
                className="event_img"
                src="photos/events/soldering_&_etching.jpeg"
                alt=""
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Soldering and Etching Workshop
            </h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
            <p>
              The Electron Devices Society brings forth yet another one-of-a
              kind event, SOLDERING AND ETCHING WORKSHOP a 3-day Workshop that
              gives you a hands-on experience of Soldering and Etching with
              theoretical and practical sessions.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: ' rgb(50, 107, 160)',
              color: '#fff',
              borderRadius: '20px',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  rgb(180, 227, 255)',
            }}
            date="13th - 15th April 2023"
            // iconStyle={{ background: '#78b0d8;;', color: '#fff' }}
            icon={
              <img
                className="event_img"
                src="photos/events/iot_workshop.jpeg"
                alt=""
              />
            }
          >
            <h3 className="vertical-timeline-element-title">SQL Bootcamp</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
            <p>
              A 3 day online SQL Bootcamp where participants were taught the
              foundations of Structured Query Language - SQL. Students were
              tasked to build a solid backend component for the given front end!
              Learners were pumped up with the confidence to answer questions
              asked related to SQL during your placements.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: ' rgb(50, 107, 160)',
              color: '#fff',
              borderRadius: '20px',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  rgb(180, 227, 255)',
            }}
            date="28th - 30th April 2023"
            // iconStyle={{ background: '#78b0d8;;', color: '#fff' }}
            icon={
              <img
                className="event_img"
                src="photos/events/iot_workshop.jpeg"
                alt=""
              />
            }
          >
            <h3 className="vertical-timeline-element-title">IOT Workshop</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
            <p>
              A 3-day workshop with a lot of learning and interesting hands-on
              sessions.We will be covering protocols and all the other important
              theories, before moving onto the more exciting part of simulating
              them using Raspberry Pi and Node MC.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: ' rgb(50, 107, 160)',
              color: '#fff',
              borderRadius: '20px',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  rgb(180, 227, 255)',
            }}
            date="31st May - 4th June 2023
"
            // iconStyle={{ background: '#78b0d8;;', color: '#fff' }}
            icon={
              <img className="event_img" src="photos/events/robotics.jpeg" alt="" />
            }
          >
            <h3 className="vertical-timeline-element-title">Robotics'14</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
            <p>
              The workshop included basics of microcontrollers,
              microprocessors,blinking onboard LED, blinking external LED,
              PWM(breathing LED), pull up and pull down concepts and interrupts
              all of these concepts were then implemented in building the
              robots.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: ' rgb(50, 107, 160)',
              color: '#fff',
              borderRadius: '20px',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  rgb(180, 227, 255)',
            }}
            date="23rd September 2023
"
            // iconStyle={{ background: '#78b0d8;;', color: '#fff' }}
            icon={
              <img
                className="event_img"
                src="photos/events/prayas.jpeg"
                alt=""
              />
            }
          >
            <h3 className="vertical-timeline-element-title">Prayas</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
            <p>
              PRAYAS is an outreach program by IEEE-SJCE WIE that provides
              inequitable education outcomes to underprivileged children. The
              volunteers visited an Orphanage every week to interact with the
              students and help them out in their academic activities.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: ' rgb(50, 107, 160)',
              color: '#fff',
              borderRadius: '20px',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  rgb(180, 227, 255)',
            }}
            date="3rd-5th October 2023
"
            // iconStyle={{ background: '#78b0d8;;', color: '#fff' }}
            icon={
              <img
                className="event_img"
                src="photos/events/iot_workshop.jpeg"
                alt=""
              />
            }
          >
            <h3 className="vertical-timeline-element-title">IEEE Envision</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
            <p>
              On IEEE DAY, we celebrated global innovation, technology, and
              collaboration, driving progress and changing the world together.To
              celebrate this commitment, IEEE-SJCE has conducted IEEE-Envision,
              a trio event series. Here is a glimpse of the electrifying events.
              3rd October - Linux Tutelage 4th October - Coggle-Mindscape 5th
              October - Ad Vintage.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: ' rgb(50, 107, 160)',
              color: '#fff',
              borderRadius: '20px',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  rgb(180, 227, 255)',
            }}
            date="3rd-4th November 2023
"
            // iconStyle={{ background: '#78b0d8;;', color: '#fff' }}
            icon={
              <img
                className="event_img"
                src="photos/events/iot_workshop.jpeg"
                alt=""
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Fun-tastic Fiesta & Orientation Day
            </h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
            <p>
              Fun-tastic Fiesta was a compilation of thrilling array of events
              where freshers had an opportunity to make new connections,
              rejuvenate, get together and have fun! Through Orientation day
              freshers took the opportunity to get to know about IEEE-SJCE and
              its activities. We also held a placement talk for the freshers.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            icon={
              <img className="event_img" src="photos/gallery/tl5.png" alt="" />
            }
            // icon={<StarIcon />}
          />
        </VerticalTimeline>
      </div>
    </>
  )
}

export default Past_events

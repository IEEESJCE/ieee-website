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
            }}
            contentArrowStyle={{
              borderRight: '7px solid  rgb(180, 227, 255)',
            }}
            date="Jun 2022"
            // iconStyle={{ background: '#78b0d8;;', color: '#fff' }}
            icon={
              <img className="event_img" src="photos/gallery/tl4.jpeg" alt="" />
            }
          >
            <h3 className="vertical-timeline-element-title">ROBOTICS'13</h3>
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
              left: '5%',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  rgb(180, 227, 255)',
            }}
            date="April 2022"
            // iconStyle={{ background: '#78b0d8;;', color: '#fff' }}
            icon={
              <img className="event_img" src="photos/gallery/tl3.jpeg" alt="" />
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
              right: '5%',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  rgb(180, 227, 255)',
            }}
            date="July 2022"
            // iconStyle={{ background: '#78b0d8;;', color: '#fff' }}
            icon={
              <img className="event_img" src="photos/gallery/tl2.jpeg" alt="" />
            }
          >
            <h3 className="vertical-timeline-element-title">PRAYAS</h3>
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
              left: '5%',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  rgb(180, 227, 255)',
            }}
            date="December 2021
"
            // iconStyle={{ background: '#78b0d8;;', color: '#fff' }}
            icon={
              <img className="event_img" src="photos/gallery/tl1.jpeg" alt="" />
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
            iconStyle={{ background: '#78b0d8', color: '#fff' }}
            // icon={<StarIcon />}
          />
        </VerticalTimeline>
      </div>

      {/* for small screen */}

      <div className="past_events_smallscreen">
        <h1 className="heading">Past Events</h1>
        <hr className="hr-1" />
        <VerticalTimeline lineColor={'rgb(147, 169, 187)'}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: ' rgb(50, 107, 160)',
              color: '#fff',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  rgb(180, 227, 255)',
            }}
            date="Jun 2022"
            // iconStyle={{ background: '#78b0d8;;', color: '#fff' }}
            icon={
              <img className="event_img" src="photos/gallery/tl4.jpeg" alt="" />
            }
          >
            <h3 className="vertical-timeline-element-title">ROBOTICS'13</h3>
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
            }}
            contentArrowStyle={{
              borderRight: '7px solid  rgb(180, 227, 255)',
            }}
            date="April 2022"
            // iconStyle={{ background: '#78b0d8;;', color: '#fff' }}
            icon={
              <img className="event_img" src="photos/gallery/tl3.jpeg" alt="" />
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
            }}
            contentArrowStyle={{
              borderRight: '7px solid  rgb(180, 227, 255)',
            }}
            date="July 2022"
            // iconStyle={{ background: '#78b0d8;;', color: '#fff' }}
            icon={
              <img className="event_img" src="photos/gallery/tl2.jpeg" alt="" />
            }
          >
            <h3 className="vertical-timeline-element-title">PRAYAS</h3>
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
            }}
            contentArrowStyle={{
              borderRight: '7px solid  rgb(180, 227, 255)',
            }}
            date="December 2021
"
            // iconStyle={{ background: '#78b0d8;;', color: '#fff' }}
            icon={
              <img className="event_img" src="photos/gallery/tl1.jpeg" alt="" />
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
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            // icon={<StarIcon />}
          />
        </VerticalTimeline>
      </div>
    </>
  )
}

export default Past_events

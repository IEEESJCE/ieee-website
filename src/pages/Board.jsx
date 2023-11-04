import React from 'react'
import '../css/board.css'
// import '../css/index.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
function Board() {
  return (
    <div>
      <Navbar />

      <h1 className="heading">BOARDS</h1>
      <hr className="hr-1" />
      <div className="topic_div">
        <h3 className="small_heading" id="board_web_dev_id">
          WEB DEVELOPMENT BOARD
        </h3>
      </div>
      <div className="wd_p">
        <iframe
          className="svg_gif"
          src="https://lottie.host/?file=dc229b20-4a86-4c49-b454-7a5023d86ab8/o7qpAuynA7.json"
          title="Animation"
        ></iframe>
        <p>
          Web Development board, an important wing of IEEE-SJCE is an exclusive
          committee for designing and maintaining the website and web pages of
          IEEE-SJCE, its events, and spread its motto. For us, WDB is a place
          where students from various disciplines of the campus meet together to
          put their creativity to work and design web pages and host them on the
          web securely.
          <br />
          <br />
          <img
            src="/photos/members/student-photo-web-dev.jpg"
            alt=""
            className="img2"
          />
          It also encourages the students on the campus to learn languages for
          web hosting like HTML, CSS, JavaScript, HTML(server-side scripting) by
          conducting many technical sessions on them throughout the year, which
          are hosted by our core committee members.
          <br />
          <br />
          Over the years, WDB has turned out to be an integral part of
          IEEE-SJCE, due to the growing importance of the web in recent years as
          it is shaping up as the best source of information. We, at WDB, hope
          to strengthen the knowledge of web designing and hosting among the
          students to a greater extent and work as a team to bring out web pages
          to create zing and get an overwhelming response from the people in our
          organization and its events.
        </p>
      </div>

      <h3 className="small_heading" id="board_ed_id">
        EDITORIAL BOARD
      </h3>

      <div className="ed_p">
        <iframe
          className="svg_gif"
          src="https://lottie.host/?file=9d286e82-2e6b-4c8c-b925-b1b8ee052744/dBXmGwKKCY.json"
          title="Animation"
        ></iframe>
        <p>
          At the IEEE EdBoard, we strive to present interesting news and
          articles about the latest trends and discoveries in the technology
          field, while also providing a voice for IEEE-SJCE, its members, and
          the students.
          <br />
          <br />
          {/* <!-- <img src="b2.jpg" alt="" className="img4"> --> */}
          We publish three editions of the IEEE Interface magazine, every year:
          the Orientation edition, about IEEE-SJCE's events, workshops, etc; the
          Tuxedo edition, about the Open Source Software Revolution; and, the
          Cyberia Edition, which covers a wide array of the latest and greatest
          news related to technology.
          <br />
          <br />
        </p>
      </div>

      <h3 className="small_heading" id="board_magazine">Annual Magazine</h3>
      <div className="magzine_div">
        <p className="magzine_p">
          We at IEEE SJCE are thrilled to announce that our much-anticipated
          magazine "Interface 2022" is out now! We hope you like this edition.
          This newer edition has got it all: from edifying articles to preparing
          for interviews! Do check out our magazine now!
        </p>

        <div className="magzine_thumbnail_div">
          <a href="https://drive.google.com/file/d/1LCHJoy6sXg5IC3mZTSvX1WoSFKEJURc9/view?usp=sharing">
            <img src="/photos/events/magazine.png" alt="" />
          </a>
        </div>
        <a
          href="./IEEE Magazine.pdf"
          download="IEEE-Magazine"
          target="_blank"
          rel="noreferrer"
          id="btn_2"
        >
          <button className="btn">Download</button>
        </a>
      </div>

      <Footer />
    </div>
  )
}

export default Board

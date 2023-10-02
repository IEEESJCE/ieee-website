import React from 'react'
import '../css/videoThumbnail.css'
function VideoThumbnail() {
  return (
    <div className="container">
      <h1 className="small_heading">Videoes</h1>
      <div className="content">
        <div className="video-gallery">
          <div className="gallery-item ">
            <img src="/photos/gallery/video_img1.jpeg" alt="Mount Rainier" />
            <div className="gallery-item-caption">
              <h2>IEEE EDS TALK</h2>
              <p>
                The EDS chapter of IEEE-SJCE brings you a distinguished lecture
                on, "Building an ecosystem for deep-tech entrepreneurship in our
                academic institutions" by Dr. V Ramgopal Rao, Professor and
                Immediate Past Director, IIT Delhi.
              </p>
              <a
                className="vimeo-popup"
                href="https://www.youtube.com/watch?v=qwPHHn1LT2Q"
              ></a>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="/photos/gallery/video_img2.jpeg"
              alt="Olympic National Park"
            />
            <div className="gallery-item-caption">
              <h2>Talk on Research in EECS</h2>
              <p>
                The talk was presented by Dr. Prathosh A. P. , Assistant
                Professor, IISc Bangalore on 9th October, 2021.
              </p>
              <a
                className="vimeo-popup"
                href="https://www.youtube.com/watch?v=vSXHOA38Yho"
              ></a>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="/photos/gallery/video_img3.jpeg"
              className="north-cascades-img"
              alt="North Cascades National Park"
            />
            <div className="gallery-item-caption">
              <h2>Alumuni Podcast</h2>
              <p>
                Alumni Podcast is a knowledge sharing interaction which features
                alumni of SJCE and attempts to know more about their college
                life, professional career, goals of the future and their
                perspective on navigating their life as a human being
              </p>
              <a
                className="vimeo-popup"
                href="https://www.youtube.com/watch?v=IlxzdaT5Nno"
              ></a>
            </div>
          </div>

          <div className="gallery-item">
            <img src="/photos/gallery/video_img4.jpeg" alt="Mount St Helens" />
            <div className="gallery-item-caption">
              <h2>Kalpana Chawla Memorial Lecture</h2>
              <p>
                The talk will be presented by Mrs. N Valarmathi, Outstanding
                Scientist and Deputy Director, ISRO (Retd.). She will be
                delivering the lecture on the topic "Satellites and
                Applications".
              </p>
              <a
                className="vimeo-popup"
                href="https://www.youtube.com/watch?v=6k2fxoUgSAM"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoThumbnail
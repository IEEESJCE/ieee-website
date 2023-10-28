import React from 'react'
import '../css/mentor.css'

function Mentors() {
    const mentors_data = [
      {
        id: 1,
        type: 'BRANCH COUNSELLOR',
        src: '/photos/members/MG Veena.jpg',
        name: 'Dr. M G VEENA',
        linkedin: 'www.linkedin.com/in/members/subroto.pngry',
        gmail: 'koirysubroto@gmail.com',
      },
      {
        id: 2,
        type: 'RAS ADVISOR',
        src: '/photos/members/SUDARSHAN PK.jpeg',
        name: 'Dr. SUDARSHAN P K',
        linkedin: 'www.linkedin.com/in/members/subroto.pngry',
        gmail: 'koirysubroto@gmail.com',
      },
      {
        id: 3,
        type: 'EDS ADVISOR',
        src: '/photos/members/SB RUDRASWAMY.jpg',
        name: 'Dr. S B RUDRASWAMY',
        linkedin: 'www.linkedin.com/in/members/subroto.pngry',
        gmail: 'koirysubroto@gmail.com',
      },
      {
        id: 4,
        type: 'WIE ADVISOR',
        src: '/photos/members/SUPREETHA M.jpg',
        name: 'Ms. SUPREETHA M',
        linkedin: 'www.linkedin.com/in/members/subroto.pngry',
        gmail: 'koirysubroto@gmail.com',
      },
      {
        id: 5,
        type: 'SBMDC ADVISOR',
        src: '/photos/members/SHASHIDHAR R.jpg',
        name: 'Dr. SHASHIDHAR R',
        linkedin: 'www.linkedin.com/in/members/subroto.pngry',
        gmail: 'koirysubroto@gmail.com',
      }
    ]
  return (
    <div>
      <h1 className="heading">Our Mentors</h1>
      <hr className="hr-1" />
      <div className="mentors_container">
        <div className="row">
          {mentors_data.map((data) => {
            return (
              <div className="mentors_wrapper" key={data.id}>
                <div className="mentors">
                  <div className="pic">
                    <img src={data.src} />
                    <ul className="social">
                      <li>
                        <a
                          href={`mailto:${data.gamil}`}
                          className="fa fa-envelope"
                          aria-hidden="true"
                        ></a>
                      </li>
                      {/* <li>
                        <a href="#" className="fab fa-twitter"></a>
                      </li>
                      <li>
                        <a href="#" className="fab fa-google-plus"></a>
                      </li> */}
                      <li>
                        <a href={data.linkedin} className="fab fa-linkedin"></a>
                      </li>
                    </ul>
                  </div>
                  <div className="mentors-content">
                    <div className="mentors-info">
                      <h3 className="title">{data.name}</h3>
                      <span className="post">{data.type}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Mentors

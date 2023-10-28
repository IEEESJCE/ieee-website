import React from 'react'
import '../css/ahievements.css'
function Achievements() {
    const data = [
      {
        id: 1,
        content: `" Outstanding Student Branch" -`,
        section: 'IEEE Mysore Subsection 2021',
      },
      {
        id: 2,
        content: `" The Best Student Branch Website Award " -`,
        section: 'IEEE Bangalore Section 2019',
      },
      {
        id: 3,
        content: `" The Best Student Branch Website Award " - `,
        section: 'IEEE Bangalore Section 2017',
      },
      {
        id: 4,
        content: `" The Best Student Branch Website Award " - `,
        section: 'IEEE Bangalore Section 2016',
      },
    ]
  return (
    <div>
      <h1 className="heading">Achievements</h1>
      <hr className="hr-1" />
      <div className="achievements_container">
        <iframe className='award_img' src="https://lottie.host/?file=f399cd9d-eb80-432b-b0da-04e11035a8e4/RKEVGpvACW.json"></iframe>
        <div className="achievements_div">
          {data.map((content) => {
            return (
              <div className="achievement_box" key={content.id}>
                <p className="achievement_para">{content.content} <span>{content.section}</span></p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Achievements
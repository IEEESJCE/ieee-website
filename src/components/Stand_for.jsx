import {React,useState} from 'react'
import '../css/stand_for.css'
import details from './Stand_for_details'
function Stand_for() {
  const [ work_img, setwork_img ] = useState(
    details.filter((details) => details.id === 1)[0].work_img
  )
  const [work_desc, setwork_desc ] = useState(
    details.filter((details) => details.id === 1)[0].work_description
  )
  const active =document.getElementsByClassName('active');

  // console.log(active[1])
  const handleClick=(e)=>{
    // console.log(e);
    active[0].classList.remove('active')
    e.target.classList.add('active')
    const newImage = details.filter((details) => details.work_name === e.target.innerText)[0].work_img;
    const newDesc = details.filter(
      (details) => details.work_name === e.target.innerText
    )[0].work_description;
    setwork_img(newImage);
    setwork_desc(newDesc);
  }
  return (
    <div>
      <h1 className="heading">What We Stand For</h1>
      <hr className="hr-1" />
      <div className="container">
        <div className="works">
          <ul>
           
          {  details.map((detail)=>{
              return detail.id != '1' ? (
                <li onClick={handleClick} value={detail.id} key={detail.id}>
                  <p className="work">{detail.work_name}</p>
                </li>
              ) : (
                <li className="active" onClick={handleClick} value={detail.id}>
                  <p className="work">{detail.work_name}</p>
                </li>
              )
            })}
          </ul>
          <div className="work_content">
            <div className="work_img">
              <img src={work_img} alt="" />
            </div>
            <div className="work_desc">
                <p>{work_desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stand_for

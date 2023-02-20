import React from 'react'
import './Home.css'
import { SiGmail } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

function Home() {
  return (
    <div className='home'>
      <div className="contents">
        <div className="socmed">
          <div className="line"></div>
          <div className="email"  onClick={(e) => {window.location.href ='mailto:ririramadhani2@email.com';}}>
          <SiGmail/>
          </div>
          <div className="github" onClick={(e) => {window.open('https://github.com/95SR', '_blank');}}>
            <AiFillGithub/>
          </div>
          <div className="linkedin" onClick={(e) => {window.open('https://www.linkedin.com/in/syahri-ramadhani-21381312b/', '_blank');}}>
            <BsLinkedin/>
          </div>

        </div>
        <div className="title">
          syahri. portfolio
        </div>
      </div>


      
      
    </div>
  )
}

export default Home



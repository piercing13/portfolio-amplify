import React, {useState, useEffect,useMemo} from 'react'
import { useRef } from 'react';
import './About.css'
import { IoMdSchool } from "react-icons/io";
import { MdWork } from "react-icons/md";
import logo from '../logo.png'
import { Link } from 'react-router-dom';
import { SiGmail } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin, BsMouse } from "react-icons/bs";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiAwsamplify , SiNodedotjs,SiDocker,SiPostgresql,SiFigma, SiAmazonaws,SiGithubactions} from "react-icons/si";
import { FaRProject } from "react-icons/fa";
function About() {
 const [scrollY, setScrollY] = useState(window.scrollY)
 
 const skill = useRef(null)
  const bg = useRef(null)
 const handleScroll= () => {
  setScrollY(window.scrollY)
 }

 const skillInViewport = useIsInViewport(skill)
 const bgInViewport = useIsInViewport(bg)

 useEffect(()=> {
  window.addEventListener('scroll', handleScroll)
  

 },[scrollY])

  return (
    <div className='about ' >
      <div className="contents">
      <div className="logo-container">
            <Link to='/'><img src={logo} className='logo'/></Link>
      </div>

      <div className="socmed">
          <div className="line"></div>
          <div className="email"  onClick={(e) => {window.location.href ='mailto:ririramadhani2@gmail.com';}}>
          <SiGmail/>
          </div>
          <div className="github" onClick={(e) => {window.open('https://github.com/95SR', '_blank');}}>
            <AiFillGithub/>
          </div>
          <div className="linkedin" onClick={(e) => {window.open('https://www.linkedin.com/in/syahri-ramadhani-21381312b/', '_blank');}}>
            <BsLinkedin/>
          </div>

        </div>

        <div className="scroll">
          <div className="scroll-title">Scroll Down</div>
          <div className="mouse">
          <BsMouse/>
          </div>
          <div className="intro" style={{clipPath:`circle(${scrollY}px)`}}>
            <div className="item" style={{transform: `translateX(${scrollY-200}px)`}}>#adventurer  #Curiousity #newExperience #Passionate  #Curious #newExperience #Passionate  #Curious#newExperience #Passionate #Curious</div>
            <div className="item" style={{transform: `translateX(${-scrollY+200}px)`}}>#explorer #adventurer  #explorer #adventurer #Curiousity  #Passionate #adventurer #Passionate</div>
            <div className="item" style={{transform: `translateX(${scrollY-200}px)`}}>#Passionate #Curiousity  #Passionate #Curious #Passionate #Curious</div>
          </div>
        </div>
      
        <div className="background" ref={bg}>
          <div className="subtitle">Background</div>
            <div className="bg-content">
                <div className="left">
                  <IoMdSchool />
                  <ul>
                    <li><span className='year'> 2019 ~ 2021 </span> Kyunghee University, Master Degree in Electronic Engineering</li>
                    <li><span className='year'> 2012 ~ 2016 </span> Bandung Institute of Technology, Bachelor Degree in Mathematics</li>
                    <li><span className='year'> 2015 </span> Kumoh National Institute of Technology, Exchange Program in Applied Mathematics</li>
                  </ul>

                </div>
                
                <div className="right">
                  <MdWork/>
                  <ul>
                    <li><span className='year'> 2022 ~ 2023 </span> ASEAN-Korea Centre, Project Assistant</li>
                    <li><span className='year'> 2018 ~ 2019 </span> PriceWaterHouseCoopers, Data Analyst</li>
                    <li><span className='year'> 2015 </span> Total E&P Indonesie, Well Performance, Internship</li>
                  </ul>

                </div>
                
              </div>
          
        </div>

        <div className="skills" ref={skill}>
          <div className="subtitle">Skill</div>
            <div className="skill">
              {/* <div className="skill-left">
                <div className="skill-title">
                  FRONTEND
                </div>
              
                <div className={skillInViewport ? "item html" : "item"}>
                  
                  <div className="name">HTML</div>
                  <div className="bar "></div>
                
                </div>

                <div className={skillInViewport ? "item js" : 'item'}>
                  
                  <div className="name">Vanilla Javascript</div>
                  <div className="bar "></div>
                </div>

                <div className={skillInViewport ? "item css" : 'item'}>
                  
                  <div className="name">CSS</div>
                  <div className="bar "></div>
                </div>
                <div className="name">Framework</div>
                <div className="framework">
                  <FaReact/>
                </div>
              </div>

              <div className="skill-right">
                <div className="skill-title">
                  Data Analytics
                </div>
                <div className={skillInViewport ? "item R" : "item"}>
                        
                  <div className="name">R</div>
                  <div className="bar "></div>
                
                </div>

                <div className={skillInViewport ? "item python" : "item"}>
                        
                  <div className="name">Pyhton</div>
                  <div className="bar "></div>
                
                </div>
              </div> */}
              <div className="icon-container middle ">
                
                <div className="skill-icon small"><SiAmazonaws/></div>
              </div>
              <div className="icon-container middle ">
              <div className="skill-icon small"><SiGithubactions/></div>
                <div className="skill-icon"><FaReact/></div>
                <div className="skill-icon small"><SiNodedotjs/></div>
                
              </div>
              <div className="icon-container">
                <div className="skill-icon"><FaHtml5/></div>
                <div className="skill-icon"><SiJavascript/></div>
                <div className="skill-icon small"><SiDocker/></div>
                <div className="skill-icon"><FaRProject/></div>
              </div>
              <div className="icon-container middle-up right">
                <div className="skill-icon"><FaCss3Alt/></div>
                <div className="skill-icon small "><SiAwsamplify/></div>
                <div className="skill-icon medium"><SiPostgresql/></div>
              </div>
              <div className="icon-container middle-bottom">
                
                <div className="skill-icon small"><SiFigma/></div>
                
              </div>
              
            

          

          
          </div>

          </div>


        

      </div>
      
     
        

      
    </div>
  )
}
function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const observer = useMemo (
    () => new IntersectionObserver(([entry]) => 
    setIsIntersecting(entry.isIntersecting),
  ),
  [],
    );

    useEffect(()=> {
      observer.observe(ref.current);

      return ()=> {
        observer.disconnect()
      }

    },[ref,observer]);

    return isIntersecting
}

export default About
import React, {useState,useEffect,useRef} from 'react'
import './Project.css'
import './About.css'
import logo from '../logo.png'
import { Link } from 'react-router-dom';
import { SiGmail } from "react-icons/si";
import { AiFillGithub, AiOutlineEdit , AiOutlineClose} from "react-icons/ai";
import { BsLinkedin} from "react-icons/bs";

import { IoIosArrowBack,IoIosArrowForward  } from "react-icons/io";

import Works from './Works';
import { API} from 'aws-amplify';

import * as queries from '../graphql/queries';




function Project() {
  const [popup, setPopup] = useState(false)
  const [project, setProject] = useState({
    name: '', 
    details: '',
    live:'',
    github:''
    
  })
  const [userName, setUserName] = useState()
  const [pwd, setPwd] = useState()
  const [tools, setTools] = useState()
  const [toolList, setToolList] = useState([])
  const [input, setInput] = useState([])
  const select = useRef()
  const [slide, setSlide] = useState(0)
  
  const [img, setImg] =useState()
  const user = window.localStorage.getItem('CognitoIdentityServiceProvider.63rmikvhtdu161aunolb9gf9n0.LastAuthUser')

  // const loggedInState = () => {
  //   Auth.currentAuthenticatedUser().then(()=> {
  //     setLogIn(true)
  //   }).catch(()=> {
  //     setLogIn(false)
  //   })
  // }

  useEffect(()=> {
    
    
    
    fetchWork()
  },[])

  
  // const SignIn = async () => {
  //   try {
  //    await  Auth.signIn(userName, pwd)
  //    loggedInState()
     
  //   } catch (error) {
  //     console.log('login error', error)
  //   }
    
  //   Auth.currentAuthenticatedUser({
  //     bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
  //   })
  //     .then((user) => console.log(user))
  //     .catch((err) => console.log(err));
  // }



 
 const backHandler = () => {
  let slideClass = Array.from(
    document.getElementsByClassName('slides')
  );
  {slide===0 ?
    setSlide(slideClass.length-1) :
    setSlide(slide => slide-1)}
  
  
 }
  
 const forwardHandler = () => {
  let slideClass = Array.from(
    document.getElementsByClassName('slides')
  );
  {slide === slideClass.length-1 ?
  setSlide(0) :
  setSlide(slide => slide+1)}
 }
 
 



 const fetchWork =  async () => {
  try {
    //const workData = await API.graphql({ query: queries.listProjects,authMode:'AWS_IAM' })
    {/*if (logIn) {
      const workData = await API.graphql(graphqlOperation(queries.listProjects))
      const workList = workData.data.listProjects.items;
      setInput(workList)
    } else {
      const workData = await API.graphql({ query: queries.listProjects,authMode:'AWS_IAM' })
      const workList = workData.data.listProjects.items;
      setInput(workList)
    }*/}

   
   const workData = await API.graphql({ query: queries.listProjects , authMode: user === 'admin' ? "AMAZON_COGNITO_USER_POOLS" : "AWS_IAM"})
     const workList = workData.data.listProjects.items;
    
   
   setInput(workList)

  } catch (error) {
    console.log('error on fetching', error)
  } 
 }
 


 

 
  return (
    <div className='project' >
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

        <div className="project-content">
          <div className="subtitle">
            SOME Project <span>I've been working on</span>
            
          </div>

          
          

          {input.length != 0
          ?
          <div className="works-element-container">
            {input.map((item,idx)=> {
              return (
                <div className="slides " style={{transform:`translateX(${-(slide)*100}%)`}} key={idx} >
          <Works  details={item.details} live={item.live} github={item.github} tools={item.toolList} imglink={item.filePath} name={item.name}/>
          

          </div>
              )
            })}
          
                      
        </div>
        :
        <div className="works-element-container">
            
          <p>No Project Yet</p>
                      
        </div>}

          

          <div className="page-number">
            <div className="arrow">
              <IoIosArrowBack onClick={backHandler}/>
              <IoIosArrowForward onClick={forwardHandler}/>
            </div>
          </div>

        

      </div>
      </div>

      
    </div>
    
  )
}

export default Project
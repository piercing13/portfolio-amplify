import React , {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import {  Auth} from 'aws-amplify';
import logo from '../logo.png'
import './Admin.css'
import { AiOutlineFileAdd, AiOutlineUnorderedList} from "react-icons/ai";
import AddProject from './AddProject';
import {  IoLogOutOutline  } from "react-icons/io5";
import ListProject from './ListProject';

function Admin({logIn,setLogIn,loggedInState}) {
    
    const [userName, setUserName] = useState()
  const [pwd, setPwd] = useState()
  const [slide, setSlide] =useState(0)
  const [value, setValue] = useState({
    name: '',
    details: '',
    live: '',
    github: '',
    

  })
  const [toolInit,setToolInit] =useState([])
  const [edit,setEdit] = useState(false)

  

    // const loggedInState = () => {
    //     Auth.currentAuthenticatedUser().then(()=> {
    //       setLogIn(true)
    //       console.log(logIn)
    //     }).catch(()=> {
    //       setLogIn(false)
    //     })
    // }
    
    
    // useEffect(()=> {
    // loggedInState()
    
    // },[])

    const SignIn = async () => {
    try {
        await  Auth.signIn(userName, pwd)
        loggedInState()
        
    } catch (error) {
        console.log('login error', error)
    }
    
    // Auth.currentAuthenticatedUser({
    //     bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    // })
    //     .then((user) => console.log(user))
    //     .catch((err) => console.log(err));
    }

    const signOut = async () => {
        await Auth.signOut()
        loggedInState()
      }

      


  return (
    <div className='admin-container'>
         {!logIn
         ?
         <div className="loginContainer">
         
         <p className='login-header'>Sign In</p>
         

         <form className='login-form'>
           <div className="login-field">
             <label htmlFor="userName">Username:</label>
             <input name='userName' onChange={(e)=> setUserName(e.target.value)} value={userName}></input>
           </div>

           <div className="login-field">
             <label htmlFor="pwd">Password:</label>
             <input name='pwd' type='password' onChange={(e)=> setPwd(e.target.value)} value={pwd}></input>
           </div>

           <div className="button" onClick={SignIn}>Log in</div>



         </form>
     </div>
    :
        <div className="loggedIn">

          <div className="admin-menu admin">
            <div className="logo-container">
              <Link to='/'><img src={logo} className='logo' /></Link>
            </div>
            <div className="menu-container">
              <div className={slide === 0? "menu-list active" : "menu-list"} onClick={() => setSlide(0)}>

                <div className="icon">
                  <AiOutlineFileAdd />
                </div>
                <div className="menu-item">
                  Add Project
                </div>
              </div>

              <div className={slide === 1? "menu-list active" : "menu-list"} onClick={() => setSlide(1)}>

                <div className="icon">
                  <AiOutlineUnorderedList />
                </div>
                <div className="menu-item">
                  List Project
                </div>
              </div>

              <div className="menu-list signOut" onClick={signOut}>
              <div className="icon">
              <IoLogOutOutline />
                </div>
                <div className="menu-item">
                Logout
                </div>
                 </div>
            </div>
          </div>


          <div className="admin-body admin">
            {slide === 0?
            <div className="config addProject " >
            <AddProject value={value} toolInit={toolInit} edit={edit} setEdit={setEdit}/>
          </div>
          :
          slide ===1 ?
          <div className="config listProject " >
          <ListProject setSlide={setSlide} setValue={setValue} setToolInit={setToolInit} setEdit={setEdit}/>
        </div>
        :
        ""}
            
            


          </div>
        </div>}

        
        

       
      
    </div>
  )
}

export default Admin

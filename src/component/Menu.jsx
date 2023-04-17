import './Menu.css'
import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu,AiOutlineUser, AiOutlineLaptop } from "react-icons/ai";
import { IconContext } from "react-icons";
import { BsFillSunFill, BsFillMoonFill,BsChatDots } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

function Menu({width}) {
  const [show, setShow] =useState(false)
  const [active, setActive] = useState(true)
  const [click, setClick] = useState()
  const [day, setDay] = useState(true)
  const handleClick = () => {
    setShow(!show)
    
  }
  
  const handleTheme = () => {
    setDay(!day)
  }

 
  return (
    <div className="big-container-menu">
      <div className='burger' onClick={handleClick} >
        <AiOutlineMenu/>
      </div>

      <nav className={show? 'container-menu show' : 'container-menu'}>
      <div className='close' onClick={handleClick} >
        <AiOutlineClose/>
      </div>

      <div className="menu-items">

      

        <div className={click === 'about' ? "items active" : "items"} onClick={()=> setClick('about')}>
          <div className="icon"><AiOutlineUser/></div>
          <NavLink to='/about' activeClassName='active' className='section-title-small' onClick={handleClick}>ABOUT Me</NavLink>
        </div>

        <div className={click === 'project' ? "items active" : "items"} onClick={()=> setClick('project')}>
          <div className="icon"><AiOutlineLaptop/></div>
          <NavLink to='/project' activeClassName='active' className='section-title-small' onClick={handleClick}>Project</NavLink>
        </div>

        <div className={click === 'hi' ? "items active" : "items"} onClick={()=> setClick('hi')}>
          <div className="icon"><BsChatDots/></div>
          <NavLink to='/hi' activeClassName='active' className='section-title-small' onClick={handleClick}>Say hi</NavLink>
        </div>
      </div>
      
      { width > 800 ? 
        <div className='large-screen'>
          
        <NavLink to='/about' activeClassName='active' className='section-title' >ABOUT Me</NavLink>
        <NavLink to='/project' activeClassName='active' className='section-title'  >Project</NavLink>
        <NavLink to='/hi' activeClassName='active' className='section-title' >Say Hi</NavLink>

      </div>
    :
    <div></div>

      
    }

        <div className="toggle-btn lng " onClick={() => setActive(!active)}>
            {
                active?
                <div className="en">EN</div> :
                <div className="kr">KR</div>

            }
            
            
            
        </div>

        <div className='theme' onClick={handleTheme}>
           {
            day ?

            <IconContext.Provider value={{ size: '1.5em' }} >
                <div className='theme' >
                    <BsFillSunFill/>
                </div>
            </IconContext.Provider>

            :

            <IconContext.Provider value={{ size: '1.5em' }} >
                <div className='theme active' >
                    <BsFillMoonFill/>
                </div>
            </IconContext.Provider>


           } 
    
            
            
        </div>
      

     
            
        
        
    </nav>
    </div>
    
  )
}

export default Menu
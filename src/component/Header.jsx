import React, {useState} from 'react'
import './Header.css'
import logo from '../logo.png'
import Toggle from './Toggle';
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

function Header({width}) {
    const [show, setShow] = useState(true)
    const [theme, setTheme] = useState(false)
    

    const handleTheme = () => {
        setTheme(!theme)
        
    }
  
    
    
  return (
    <div className="big-container">
    <div className='container-header'>
        <div className="logo-container">
            <Link to='/'><img src={logo} className='logo'/></Link>
            
        </div>
        

        <div className="toggle-btn lng" onClick={() => setShow(!show)}>
            {
                show?
                <div className="en">EN</div> :
                <div className="kr">KR</div>

            }
            
            
            
        </div>

        <div className='theme'>
            
            <IconContext.Provider value={{ size: '1.5em' }} >
                <div className={theme ? 'theme' : 'theme active'}>
                    <BsFillSunFill/>
                </div>
            </IconContext.Provider>
            
            <Toggle handleTheme={handleTheme} />
                
            
            
            <IconContext.Provider value={{ size: '1.5em' }} >
                <div className={theme ? 'theme active' : 'theme'}>
                    <BsFillMoonFill/>
                </div>
            </IconContext.Provider>
            
            
        </div>

        

        
    </div>
    </div>
    
  )
}

export default Header
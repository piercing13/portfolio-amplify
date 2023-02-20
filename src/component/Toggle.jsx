import './Toggle.css'
import React, {useState} from 'react'

function Toggle({handleTheme}) {
  
  return (
    <div >
        <label className='switch'>
            <input type="checkbox" onClick={handleTheme}/>
            <span className='slider round'></span>

        </label>
    </div>
  )
}

export default Toggle
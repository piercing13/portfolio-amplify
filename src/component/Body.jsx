import './Body.css'
import React from 'react'
import About from './About'
import Project from './Project'
import Contact from './Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Body() {
  return (
    <div className='container body'>

      s
      <BrowserRouter>

      <Routes>
        <Route path='/about' element = {
          <About/>
        }/>

      <Route path='/project' element = {
          <Project/>
      }/>

      <Route path='/hi' element = {
        <Contact/>
      }/>


      </Routes>
      
      
      
      </BrowserRouter>
        
        
    </div>
  )
}

export default Body
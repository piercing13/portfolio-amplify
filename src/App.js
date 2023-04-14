import React, { useState, useEffect } from 'react'
import './App.css';

import Menu from './component/Menu';
import About from './component/About'
import Project from './component/Project'
import Contact from './component/Contact'

import Home from './component/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "@aws-amplify/ui-react/styles.css";

import { Amplify, Auth } from 'aws-amplify';
import config from './aws-exports';
import Admin from './component/Admin';

Amplify.configure(config);

function App() {
  const [logIn, setLogIn] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)
  const loggedInState = () => {
    Auth.currentAuthenticatedUser().then(() => {
      
      setLogIn(true)
      

    }).catch(() => {
      setLogIn(false)

    })
  }
 

  useEffect(() => {

    loggedInState()
    

  }, [])

  useEffect(() => {
    function handleWindowResize() {
      setWidth(window.innerWidth);

    }

    window.addEventListener('resize', handleWindowResize);


    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [width]);

  


  return (
    <div className="App">
      <BrowserRouter>

        {/*<Header width={width}/>*/}



        <Routes>
          <Route exact path='/' element={
            <Home />
          } />
          <Route path='/about' element={
            <About />
          } />

          <Route path='/project' element={
            <Project />
          } />

          <Route path='/hi' element={
            <Contact />
          } />

          <Route path='/admin' element={
            <Admin logIn={logIn} setLogIn={setLogIn} loggedInState={loggedInState} />
          } />




        </Routes>
        <Menu width={width} />







      </BrowserRouter>




    </div>
  );
}

export default App;

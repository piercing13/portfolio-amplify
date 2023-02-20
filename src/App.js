import React, {useState,useEffect} from 'react'
import './App.css';
import Header from './component/Header';
import Menu from './component/Menu';
import About from './component/About'
import Project from './component/Project'
import Contact from './component/Contact'

import Home from './component/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "@aws-amplify/ui-react/styles.css";

import { Amplify } from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

function App() {

  const [width, setWidth] = useState(window.innerWidth)

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
            <Route exact path='/' element = {
                    <Home/>
                  }/>
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
              <Menu width={width}/>
            

        
        

        

      </BrowserRouter>
      
      
      

    </div>
  );
}

export default App;

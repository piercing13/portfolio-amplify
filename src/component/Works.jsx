import React, {useEffect, useState} from 'react'
import './Works.css'

import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiAwsamplify , SiNodedotjs,SiDocker,SiPostgresql} from "react-icons/si";


function Works({details, live, github, tools, imglink}) {

const imgLink = `https://portfolio-storage43524-staging.s3.ap-northeast-2.amazonaws.com/public/${imglink}`


 
  return (
    <div className='works-container'>
        <div className="left">
            <div className="image">
               <img src={imgLink}  />
               
            </div>

            
        </div>

        <div className="right">
            <div className="details">
                {details}
            </div>

            {tools.length != 0 ?
            <div className="tools">
                {tools.map((item,idx) => {
                  return(
                      <div key={idx}>
                        {item ==='react' ? <FaReact/> : 
                        item ==='html' ? <FaHtml5/> :
                        item ==='css' ? <FaCss3Alt/> :
                        item ==='js' ? <SiJavascript/> :
                        item ==='nodejs' ? <SiNodedotjs/> :
                        item ==='docker' ? <SiDocker/> :
                        item ==='postgres' ? <SiPostgresql/> :
                        
                        item ==='amplify' ? <SiAwsamplify/> : ""}
                      </div>
                  )
                })}
            
            </div>
            :
            <div className="tools">

            
            </div>}

            

           

            

            <div className="action">
            <div className="live button" onClick={(e) => window.open(`${live}`, '_blank')}>View Live</div>
            <div className="live button" onClick={(e) => window.open(`${github}` , '_blank')}>github</div>

            </div>

            
        </div>
      
    </div>
  )
}

export default Works
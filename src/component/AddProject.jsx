import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { API, Storage } from 'aws-amplify';
import { AiOutlineClose } from "react-icons/ai";
import uuid from 'react-uuid';

import * as mutations from '../graphql/mutations';
import './addProject.css'

function AddProject({value,toolInit, edit,setEdit}) {
  const [project, setProject] = useState({
    name: value.name,
    details: value.details,
    live: value.live,
    github: value.github

  })
  
  
  const [tools, setTools] = useState()
  const [toolList, setToolList] = useState(toolInit)
  const [input, setInput] = useState([])
  const select = useRef()
  const [img, setImg] = useState()


  const formHandler = (e) => {
    const fieldName = e.target.name

    setProject(prevValue => ({
      ...prevValue,
      [fieldName]: e.target.value,

    }))


  }

  const toolHandler = (e) => {
    setTools(e.target.value)

  }

  const addTools = () => {

    setToolList(prev => ([
      ...prev,
      tools
    ]))

  }

  useEffect(() => {
    setProject(prev =>
    ({
      ...prev, toolList
    }))

  }, [toolList])

  

  const submitWork = async (e) => {
    e.preventDefault();

    
    try {
      const { name, details, live, github, toolList } = project;

      if(!edit){
        const { key } = await Storage.put(`${uuid()}.png`, img, { contentType: "image/png" })
        const uploadProject = {
          name,
          details,
          live,
          github,
          toolList,
          filePath: key
        }
  
  
        await API.graphql({ query: mutations.createProject, variables: { input: uploadProject }, authMode: 'AMAZON_COGNITO_USER_POOLS' })
      } else {
        const { key } = await Storage.put(`${uuid()}.png`, img, { contentType: "image/png" })
        let link=''
        if (img){
          link=key
          
        } else {
          link= value.filePath
        }
        const uploadProject = {
          name,
          details,
          live,
          github,
          toolList,
          filePath: link,
          id:value.id
        }
        
  
  
        await API.graphql({ query: mutations.updateProject, variables: { input: uploadProject }, authMode: 'AMAZON_COGNITO_USER_POOLS' })
      }

      window.alert("Success")

      resetfield()
      setEdit(false)

    } catch (error) {
      console.log('error on sending data', error)
    }

  }
  
  const resetfield = () => {
    setProject({
      name: '',
      details: '',
      live: '',
      github: ''

    })
    setToolList([])
    select.current.value = ""
  }



  const deleteTools = (idx) => {
    const newTools = toolList.filter((item, index) => index != idx)
    setToolList(newTools)
  }
  return (
    <div className="form-add">

      <form action="">
        <div className="form-item">
          <label htmlFor="name">Project Name</label>
          <input name='name' onChange={formHandler} value={project.name}></input>
        </div>
        <div className="form-item">
          <label htmlFor="details">Project Details</label>
          <textarea name='details' onChange={formHandler} value={project.details}></textarea>
          
        </div>
        <div className="form-item">
          <label htmlFor="live" >Live Link</label>
          <input name='live' type='link' onChange={formHandler} value={project.live}></input>
        </div>
        <div className="form-item">
          <label htmlFor="github">Github</label>
          <input name='github' type='link' onChange={formHandler} value={project.github}></input>
        </div>
        <div className="form-item form-tools">
          <label htmlFor="tools">Tools</label>
          <div className="tools-container">
            <select name="tools" id="tools" onChange={toolHandler} ref={select} >
              <option value="" disabled selected>Select ..</option>
              <option value="html">HTML</option>
              <option value="css">CSS</option>
              <option value="js">JS</option>
              <option value="react">React</option>
              <option value="nodejs">Node JS</option>
              <option value="postgres">PostgreSQL</option>
              <option value="amplify">AWS Amplify</option>
              <option value="git">Github action</option>
              <option value="docker">Docker</option>
              <option value="fargate">AWS Fargate</option>
            </select>
            <div className="add" onClick={addTools}>
              Add
            </div>
          </div>


        </div>

        {toolList.length != 0 ?
          <div className="toolList-container">

            {toolList.map((item, index) => {
              return (

                <div className='toolList' key={index}>

                  {item}
                  <div className="closet" onClick={(e) => deleteTools(index)} >
                    <AiOutlineClose />
                  </div>


                </div>
              )


            })}
          </div>
          :
          ""}



        <div className="form-item">
          <label htmlFor="image">Upload image</label>
          <input type="file" name='image' accept='image/png, image/jpeg, .gif' onChange={(e) => setImg(e.target.files[0])} />
        </div>

        <div className="button" onClick={submitWork}>{edit? 'Edit Project' :'Add Project'}</div>
      </form>
    </div>
  )
}

export default AddProject

import React, { useState } from 'react'
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import './ListProject.css'
import { API} from 'aws-amplify';
import * as mutations from '../graphql/mutations';

function Table({data, setSlide, setValue, setToolInit, setEdit}) {
  const [tableData, setTable] = useState(data)
  
  
  const deleteItem = async (id) => {
    if(window.confirm('Confirm to delete')){
      const res= await API.graphql({ query: mutations.deleteProject,variables: {input: {id}},authMode:'AMAZON_COGNITO_USER_POOLS' })
    
      const newData = tableData.filter((item)=> item.id !== id)
      setTable(newData)
      
    } 
   
  }

  

  const editItem = (item) => {
    
    setValue({
      name: item.name,
      details: item.details,
    live: item.live,
    github: item.github,
    id:item.id,
    filePath:item.filePath
    })
    setToolInit(item.toolList)
setSlide(0)
setEdit(true)


  }

  return (
    <div>
        <table>
            <tr>
                <th>Project Name</th>
                <th>Project Details</th>
                <th>Live Link</th>
                <th>Github Link</th>
                <th>Tools</th>
                <th>Actions</th>
            </tr>
            {tableData.map((item,idx)=>{
        return (
            <tr key={idx}>
                <td >{item.name}</td>
                <td >{item.details}</td>
                <td >{item.live}</td>
                <td >{item.github}</td>
                <td >{item.toolList.map((itm,index)=>{
                    return <span key={index}> {itm + ';'}</span>
                })}</td>
                <td className='actions'>
                    <div className="icon" onClick={()=> deleteItem(item.id) }>
                    <AiFillDelete/></div>
                    <div className="icon" onClick={()=> editItem(item)}>
                       <AiFillEdit/> </div></td>
            </tr>
            
            
        
            
        )
      })}
            


        </table>
      
    </div>
  )
}

export default Table

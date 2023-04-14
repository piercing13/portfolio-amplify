import React, { useEffect, useState } from 'react'
import Table from './Table';
import { API} from 'aws-amplify';
import * as queries from '../graphql/queries';
function ListProject({setSlide,setValue, setToolInit, setEdit}) {
  const [data, setData] = useState()

  const fetch = async() => {
    const res= await API.graphql({ query: queries.listProjects,authMode:'AMAZON_COGNITO_USER_POOLS' })
    setData(res.data.listProjects.items)

    
  }

  useEffect(() => {
fetch()

  },[])

  
  return (
    <div>
      {data?
      <Table data={data} setSlide={setSlide} setValue={setValue} setToolInit={setToolInit} setEdit={setEdit}/>
      :
      <p>No data</p>}
    </div>
  )
}

export default ListProject

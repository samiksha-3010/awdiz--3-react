import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DynamicRouting = () => {
      const router = useNavigate()
      const [myName, setMyName] =  useState();
  return (
    <div>
      <h2>DynamicRouting</h2>
      <button onClick={()=>router(`/UseParams/:name/${myName}`)}> Routing</button>

     
    </div>
  )
}

export default DynamicRouting
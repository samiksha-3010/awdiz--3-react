import React from 'react'
import { useParams } from 'react-router-dom'

const UseParam = () => {
      const {age} = useParams
  return (
    <div>
      <h2>UseParam-{age}</h2>

    </div>
  )
}

export default UseParam
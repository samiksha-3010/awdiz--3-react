import React from 'react'

export const Button = ({ children }) => {

      return <button style={{ color: 'red' }}>{children}</button>
  }

const ChildrenProp = () => {
    
  return (
    <button>ChildrenPropNew</button>
  )
}

export default ChildrenProp
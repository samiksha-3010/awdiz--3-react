
import React, { useState } from 'react'
import './DynamicClasses.css'


const DynamicClasses = () => {
    const [isButtonActive, setIsButtonActive] = useState (false)
    console.log(isButtonActive,"-isButtononActive")
    const handleButtononClick  =() =>{
    setIsButtonActive (!isButtonActive)
    };
   
  return (
    <div>
      djkfsakdjalskalskldjskfdsskfdf

        <button className={isButtonActive ? 'active-button': 'inactive-button'} onClick={handleButtononClick} >Login</button>
    </div>
  )
}

export default DynamicClasses;
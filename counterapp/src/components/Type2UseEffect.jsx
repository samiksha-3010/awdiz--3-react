
import React, { useEffect, useState } from 'react'

const Type2UseEffect = () => {
    const [Counter, setCounter] = useState (0);
    useEffect (() =>{
        console.log("Inside UseEffect")

    },[])
    function addCounter(){
        setCounter ((preValue) => preValue + 1);
    }
    useEffect(() => {
        alert ("welome!")
    })
       

  return (
    <div>
        <h1>Type2UseEffect</h1>
        <h2>{Counter}</h2>
        <button  onClick={addCounter}>add Counter</button>
    </div>
  )
}

export default Type2UseEffect
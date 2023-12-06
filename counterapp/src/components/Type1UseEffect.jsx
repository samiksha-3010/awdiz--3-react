

import React, { useEffect, useState } from 'react'

const Type1UseEffect = () => {
    const [ Counter, setCounter] = useState (0)
    const [ Samiksha, setSamiksha] = useState (543)
    useEffect (() =>{
        console.log("Inside UseEffect")
    });
    function addCounter (){
        setCounter ((preValue) => preValue+1)
    }
    function addCounter (){
        setCounter ((preValue) => preValue-1)
    }
    useEffect (() =>{
        alert("Hii From Use Effect")
        console.log("Inside UseEffect")
    })
  return ( 
    <div>
        <h1>Type1UseEffect</h1>
        <h1>Counter: {Counter}</h1>
        <button  onClick={addCounter}>Add Counter</button>
        <h1>Tanu: {Samiksha}</h1>
        <button onClick={addCounter}>Add Samiksha</button>
    </div>
  )
}

export default Type1UseEffect;





import React, { useEffect, useState } from 'react'

const Type3UseEffect = () => {
    const [counter, SetCounter] = useState (0);
    const [counter2, SetCounter2] = useState(15);
    useEffect (() =>{
        console.log ("Inside UseEffect")

    }, [counter2])
  return (
    <div>
        <h1>Type3UseEffect</h1>
        <h2>Counter:{counter}</h2>
        <button  onClick={ () => SetCounter((preValue)=> preValue+1 )}>+1</button>
        <h1>Counter:{counter2}</h1>
       <button onClick={()=> SetCounter2 ((preValue) => preValue +1)}>+1</button>
    </div>
  )
}

export default Type3UseEffect

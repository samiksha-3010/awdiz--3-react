

import React, { useEffect, useState } from 'react'

const UseEffect2 = () => {
      const [Counter,SetCounter] = useState(0);
      function Increment(){
            SetCounter(Counter + 1)
      }
      useEffect(()=>{
            alert("Hii From UseEffect")
      },[])



  return (
    <div>
      <h2 style={{color:"red"}}>UseEffect</h2>
      <h1>Counter:{Counter}</h1>
      <button onClick={Increment}>+Increment</button>
    </div>
  )
}

export default UseEffect2

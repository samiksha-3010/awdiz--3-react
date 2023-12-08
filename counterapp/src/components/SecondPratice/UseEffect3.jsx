import React, { useEffect, useState } from 'react'

const UseEffect3 = () => {
      const [Counter,SetCounter] = useState(0);
      const [Counter2,SetCounter2] = useState(10)

      function  Increment (){
       SetCounter((prevValue)=>prevValue +2)
      }
      function Decreament(){
            SetCounter2((prevValue)=>prevValue -2)
      }

      useEffect(()=>{
            alert("Hii From UseEffect Function 3")
      },[Counter])

  return (
    <div >
      <h2 style={{color:"red"}}>UseEffect  3</h2><br/>
      <h2>Counter:{Counter}</h2><br/>
      <button onClick={Increment}>+Increment</button><br/>
      <h2>Counter2:{Counter2}</h2><br/>
      <button onClick={Decreament}>-Decreament</button><br/>
    </div>
  )
}

export default UseEffect3
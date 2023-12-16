import React, { useState } from 'react'

function ChildrenComponenet({changeValue}){
      return(
            <input onChange={changeValue}/>
      )
}

const ChildToParent = () => {
      const [myValue, setMyValue] = useState("")
      function changeValue(event) {
            setMyValue(event.target.value)
      }
  return (
    <div>
      <h1>Typed Valued:{myValue}</h1>
      <ChildrenComponenet changeValue={changeValue}/>
        {/* products, pricing, offers  */}
    </div>
  )
}

export default ChildToParent
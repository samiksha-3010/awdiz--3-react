import React, { useState } from 'react'

const NewJs = () => {
      const [showText, setShowText] = useState(true)

      function Update() {
          setShowText(!showText)
      }
  
      return (
          <div>
              <button onClick={Update}>Toggle</button>
              {showText ? <div>true</div> : <div>False</div>}
          </div>
  )
}

export default NewJs
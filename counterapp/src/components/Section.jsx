
import React, { useState } from 'react'

const Section = () => {
    const [isUserLogged, setIsUserLogged] = useState (false);
  return (
    <div>
        {}
        Section : { isUserLogged ? <button>Login </button> : <button>Logout</button>}

    </div>
  )
}

export default Section









import React, { useContext } from 'react'
import { AuthContext } from './Context/AuthContext'


const Home = () => {
  const {state,Logout} = useContext (AuthContext);
  // console.log(state)
  return (
    <div><h2 style={{fontSize: "30px"}}>Home Page</h2>{state?.user?.name}<br/>
    <button  style={{width: "20%" , height:"40px", borderRadius: "50px", backgroundColor: "black", color:"white"}} onClick={Logout}>Logout</button>
    <img  style={{marginTop: "50px", marginLeft: "50px"}} src='https://www.w3schools.com/howto/img_nature_wide.jpg'/>
    </div>

  )
}

export default Home
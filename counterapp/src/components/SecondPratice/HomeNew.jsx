import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import ReactContext from './ContextReact';
const HomeNew = () => {
      const router = useNavigate();
      const { state,dispatch} = useContext(ReactContext);

    console.log(state, "state")
  return (
    <div> <p style={{ textAlign:"center",fontSize:"30px"}}>This a Awdiz Store            <button  style={{ textAlign:"center",fontSize:"30px",color:"red"}}>New Register Here?</button>
    </p>
      <img style={{ width:"60%",height:"500px",marginLeft:"19%",marginTop:"20px"}} src='https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg'/>
      <h1>Home Page - {state.user?.name}</h1>
            <button onClick={() => alert.success("Success")}>Success</button><br />
            <button onClick={() => alert.error("Error")}>Error</button>
    </div>
  
  )
}

export default HomeNew
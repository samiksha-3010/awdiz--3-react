import React from 'react'
import { useNavigate } from 'react-router-dom';

const HomeNew = () => {
      const router = useNavigate();
  return (
    <div> <p style={{ textAlign:"center",fontSize:"30px"}}>This a Awdiz Store            <button  style={{ textAlign:"center",fontSize:"30px",color:"red"}}>New Register Here?</button>
    </p>
      <img style={{ width:"60%",height:"500px",marginLeft:"19%",marginTop:"20px"}} src='https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg'/>
   
    </div>
  
  )
}

export default HomeNew
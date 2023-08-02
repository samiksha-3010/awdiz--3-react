import React, { useContext, useEffect, useState } from 'react'
import "./../../../src/Component/Navbar.css"
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [userData,setUserData] = useState();
  const {state,Logout} = useContext (AuthContext);
  const router = useNavigate();

  useEffect(() =>{
    if(state){
      setUserData(state.user)
    }
  },[state])
  // console.log(userData,"-userData")
  return (
    <div className='navbar'>
      <div className='e-commers'>E-Commers</div>
      <div className='Parent-first'>
   
       <div onClick={()=>router('/all-product')}>All Product</div> 
       {userData?.role == "Seller"&&<div onClick={()=>router('/add-product')} >Add Product</div>}
      {userData?.name && <div  onClick={()=>router('/profile')}>Profile</div> }
      {userData?.name?
      // <div onClick={cart}>Cart</div>
      <div onClick={Logout}>Logout</div>:
      <div  onClick={()=>router('/login')}>Login/Register</div>}
       
     

      </div>
    </div>
  )
}

export default Navbar;
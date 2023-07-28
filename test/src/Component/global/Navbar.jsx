import React, { useContext, useEffect, useState } from 'react'
import "./../../../src/Component/Navbar.css"
import { AuthContext } from '../Context/AuthContext'

const Navbar = () => {
  // const [userData,setUserData] = useState();
  // const {state,Logout}= useContext (AuthContext);
  // useEffect(() =>{
  //   if(state){
  //     setUserData(state.user)
  //   }
  // },[state])
  // console.log(userData,"-userData")
  return (
    <div className='navbar'>
      <div className='e-commers'>E-Commers</div>
      <div className='Parent-first'>
      <div>All Product</div>
      <div>Add Product</div>
      <div>Profile</div>
      <div>Logout</div>
      <div>Login/Register</div>
      </div>
    </div>
  )
}

export default Navbar;
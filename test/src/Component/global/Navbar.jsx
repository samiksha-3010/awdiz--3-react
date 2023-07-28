import React from 'react'
import "./../../../src/Component/Navbar.css"

const Navbar = () => {
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
import React from 'react'
import './Profile.css'

const Profile = () => {
  return (
    <div className='main-div'>
        <h2> My Profile</h2>
        
            <label className='label'>Name: Samiksha</label><br/>
            {/* <input className='text' type='text' /><br/> */}
            <label className='label'>Email:sami@gmail.com</label><br/>
            {/* <input className='text' type='email'/><br/>
            <button className='button'>Edit Profile</button> */}

    </div>
  )
}

export default Profile
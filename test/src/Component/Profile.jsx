import React, {  useEffect, useState } from 'react'
import './Profile.css'

const Profile = () => {
  const [userData, setUserData] = useState ({});

  console.log(userData,"-setUserData")

   useEffect (() =>{
    
   })



  function handlechange(event) {
 userData({...userData,[event.target.name]: event.target.value})
  }
  function handleSubmit(event){
    event.preventDefault();
    const  currentUser = JSON.parse(localStorage.getItem)("current-user")
    const allUser = JSON.parse(localStorage("User"))
    for(var i = 0; i < allUser.length; i ++){
      if(allUser[i].email == currentUser.email && allUser[i].password== currentUser.password ){
         allUser[i].name = userData.name;
         allUser[i].password = userData.password;
         currentUser.name = userData.name;
         currentUser.password = userData.password
      }
    }
   login(currentUser)
   localStorage.setItem("User",JSON.stringify(currentUser))
   localStorage.setItem("User",Json.stringify(allUser))
   setUserData({})
   alert("updated Profile")
  }




  return (
    <div className='main-div'>
        <h2> My Profile</h2>
        <form onSubmit={handleSubmit}>
          <lable  className="label">Chenge Name:</lable><br/>
          <input className='input-type' type='text' value={userData.name} name ="name" onChange={handlechange} /><br/>
          <lable className="label">Change Password:</lable><br/>
          <input className='input-type' type='text'  value={userData.name} name ="password" onChange={handlechange}  /><br/>
       <button className='button'>Update Profile</button>
        </form>
           

    </div>
  )
}

export default Profile;
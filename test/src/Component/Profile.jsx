import React, {  useContext, useEffect, useState } from 'react'
import './Profile.css'
import { AuthContext } from './Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [userData, setUserData] = useState ({});
  const { login, state } = useContext(AuthContext)
  const router = useNavigate()

  console.log(userData,"-setUserData")
  useEffect(() => {
    if (!state?.user?.name) {
        router('/login')
    }
}, [state])

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("Current-user"));
    if (!currentUser) {
        router("/login")
    }
    const allUsers = JSON.parse(localStorage.getItem("User"));
    if (currentUser && allUsers) {
        for (var i = 0; i < allUsers.length; i++) {
            if (allUsers[i].email == currentUser.email && allUsers[i].password == currentUser.password) {
                setUserData(allUsers[i])
            }
        }
    }
}, [])
   
  function handlechange(event) {
    setUserData({...userData,[event.target.name]: event.target.value})
  }
  function handleSubmit(event){
    event.preventDefault();
    const  currentUser = JSON.parse(localStorage.getItem("Current-user"))
    const allUser = JSON.parse(localStorage.getItem("User"))
    for(var i = 0; i < allUser.length; i ++){
      if(allUser[i].email == currentUser.email && allUser[i].password== currentUser.password ){
         allUser[i].name = userData.name;
         allUser[i].password = userData.password;
         currentUser.name = userData.name;
         currentUser.password = userData.password
      }
    }
   login(currentUser)
   localStorage.setItem("Current-user",JSON.stringify(currentUser))
   localStorage.setItem("User",JSON.stringify(allUser))
   setUserData({})
   alert("updated Profile")
  }

  return (
    <div className='main-div'>
        <h2> My Profile</h2>
        <form onSubmit={handleSubmit}>
          <lable  className="label">Chenge Name:</lable><br/>
          <input className='input-type' type='text' value={userData.name} name ="name" onChange={handlechange}/><br/>
          <lable className="label">Change Password:</lable><br/>
          <input className='input-type' type='text'  value={userData.password} name ="password" onChange={handlechange}/><br/>
       <button className='button'>Update Profile</button>
        </form>
    </div>
  )
}

export default Profile;
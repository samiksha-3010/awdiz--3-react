import React, {  useContext,useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../Context/Auth.context";

const Profile = () => {
    const { login } = useContext(AuthContext)

    const [userData, setUserData] = useState ({});
    const router = useNavigate()
    // console.log(allUsers) 
    useEffect (()=>{
       
        const currentUser = JSON.parse(localStorage.getItem("Current-user"));
        if (!currentUser) {
            router("/login")
        }
        const allUsers = JSON.parse(localStorage.getItem("Users"));
        if (currentUser && allUsers) {
        for (var i = 0; i < allUsers.length; i++){
            if (allUsers[i].email == currentUser.email && allUsers[i].password == currentUser.password){
                setUserData(allUsers[i])
            }
            }
        }
    })
    function handleChange(event) {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }
    function handleSubmit(event) {
        event.preventDefault();
        const currentUser = JSON.parse(localStorage.getItem("Current-user"));
        const allUsers = JSON.parse(localStorage.getItem("Users"));
        for (var i = 0; i < allUsers.length; i++) {
            if (allUsers[i].email == currentUser.email && allUsers[i].password == currentUser.password){
                allUsers[i].name = userData.name;
                allUsers[i].password = userData.password;
                currentUser.password = userData.password;
                currentUser.name = userData.name; 
            } 
        }
        login(currentUser)
        localStorage.setItem("Current-user", JSON.stringify(currentUser))
        localStorage.setItem("Users", JSON.stringify(allUsers))
        setUserData({})
        alert("Profile updated.")
    }

  return (
    <div>
        <h2>profile</h2>
<form onSubmit={handleSubmit}>
    <lable>Change Name</lable><br/>
    <input type='text' value={userData.name} name="name" onChange={handleChange}/><br/>
    <lable>Change Password</lable><br/>
    <input type='text' value={userData.name} name="name" onChange={handleChange}/><br/>
    <input type='submit' value='updates profile'  />
</form>

    </div>
  )
}

export default Profile





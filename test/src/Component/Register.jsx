import React, { useState } from 'react'
import { toast } from 'react-hot-toast'

const Register = () => {
    const [userData, setUserData]= useState ({name: "", email: "", password:""})
    // console.log(userData)
    const handlechenge = (event) =>{
        setUserData({...useState,[event.target.name]:event.target.value}) 
    }

    const handleSubmit  = (event)=>{
        event.preventDefault();
        if(userData.name && userData.email  && userData.password){
            const usersArray = [localStorage.getItem("Users")] || [];
            usersArray.push(userData)
            localStorage. setItem("Users",JSON.stringify(usersArray));
            localStorage.setItem("users",usersArray)
            setUserData({name: "", email: "", password:""})
            toast.suscees ("susceccfull..")
         
        }else{
            toast.error ("plese fill all field... ")
        }
    }
  return ( 
    <div>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <lable>Name</lable><br/>
            <input value ={userData.name}type='text'name='name' onChange={handlechenge}/><br/>
            <lable>Email</lable><br/>
            <input value ={userData.email}type='email' name='email' onChange={handlechenge}/><br/>
            <lable>Password</lable><br/>
            <input value ={userData.password} type='password'name='password' onChange={handlechenge}/><br/>
            <input type='submit' value='register' /><br/>
        </form>
    </div>
  )
}

export default Register;































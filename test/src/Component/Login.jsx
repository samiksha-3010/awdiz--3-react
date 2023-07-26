import React, { useState } from 'react'
import { toast } from 'react-hot-toast'

const Login = () => {
    const [userData, setUserData]=  useState ({email: "", password: ""})
    const  handlechenge= (event) =>{
        setUserData({...setUserData,[event.target.name]: event.target.value})

    }
    const handlesubmit =(event)=>{
        event.preventDefault();
        if(userData.email && userData.password){
            const allusers = JSON.parse(localStorage.getItem("Users"))
            for( var i=0; i< allusers.length; i ++ ){
            if (allusers [i].email == userData && allusers[i].password== userData){
                localStorage.setItem("Current Users"); JSON.stringify(allusers[i])
                setUserData({email: "", password: ""})
                toast ("login succesfull")


            }
            }

        }else{
            toast("plese fill all field")
        }
    }

  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handlesubmit}>
            <lable>Email:</lable><br/>
            <input  value= {userData.email}type='email' name='email' onChange={handlechenge}/><br/>
            <lable >Password:</lable><br/>
            <input value= {userData.email} type ='password'name='password' onChange={handlechenge}/><br/>
            <input type='submit'/><br/>
        </form>
    </div>
  )
}

export default Login
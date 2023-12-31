import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import "./StyleSecond/SimpleLogin.css"

const SimpleLogin = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
    // console.log(loginData, "loginData")
    const router = useNavigate();
    function handleChange(e) {
        // console.log(e.target.value)
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (loginData.email && loginData.password) {
            try {
                // const response = await axios.post('http://localhost:8000/login', { loginData })
                const response = { data: { success: true, message: "'Your Detail has been successfully Submit  Thanks!'." } }
                if (response.data.success) {
                    toast.success(response.data.message)
                    setLoginData({ email: "", password: "" })
                    router('/home-second')
                }
            } catch (error) {
                console.log(error)
                toast.error(error.response.data.error)
            }
        } else {
            alert("All fields are mandatory.")
        }
    }

    return (
        <div style={{marginLeft:"19%", border:"1px solid black",width:"30%"}}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label> User Email*</label><br />
                <input type='email' required onChange={handleChange} name='email' value={loginData.email} /><br />
                <label> User Password*</label><br />
                <input type='password' required onChange={handleChange} name='password' value={loginData.password} /><br />
                <input type='submit' value="Login" />
 
          
            </form>
            
        </div>
  )
}

export default SimpleLogin
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SimRegister = () => {
      const router = useNavigate();
      const[userData, setUserData] = useState({name:"",email:"",password:"",Confirmpassword:""})
      console.log(userData,setUserData)

      function  handleSubmit(event){
            event.preventDefault();
            if(userData.name && userData.email && userData.password && userData.Confirmpassword){
                  if(userData.password === userData.Confirmpassword){
                        try {
                              // const responce = await axios.post('http://localhost:8000/register',{userData})  
                              const responce = { data:{success:true,message:"Register Cpmplited"}}  
                              if(responce.data.success===true){
                                    alert (responce.data.message)
                                    setUserData({ name: "", email: "", password: "",Confirmpassword:"" })
                                    router ("/login-form")
                                
                              }                         
                        } catch (error) {
                              console.log(error)
                              alert(error.responce.data.message)
                              
                        }
                  }else{
                        alert("Password And Confirm Password not match")
                  }
            }else{
                  alert("All Field are Required")
            }

           
      }
      function handleChange(event)  {
            setUserData({...userData,[event.target.name]:event.target.value})
      
            
 
      }
  return (
    <div >
      <h2>Register Page</h2>
      <form onSubmit={handleSubmit}>
            <fieldset>
                  <label style={{marginLeft:"10%"}}>Name*</label><br/>
                  <input style={{marginLeft:"10%"}} type='text'required name='name' onChange={handleChange} value={userData.name}/><br/>
                  <label style={{marginLeft:"10%"}}>Email*</label><br/>
                  <input  style={{marginLeft:"10%"}}type='email'required name='email' onChange={handleChange}  value={userData.email}/><br/>
                  <label style={{marginLeft:"10%"}}>Password*</label><br/>
                  <input  style={{marginLeft:"10%"}}type='password'required name='password' onChange={handleChange}  value={userData.password}/><br/>

                  <label style={{marginLeft:"10%"}}>Confirm Password *</label><br/>
                  <input style={{marginLeft:"10%"}} type='password'required name='Confirmpassword' onChange={handleChange}  value={userData.Confirmpassword}/><br/>
                  <input style={{marginLeft:"10%"}} type='submit' value="Register" />
            </fieldset>
      </form>
    </div>
  )
}

export default SimRegister
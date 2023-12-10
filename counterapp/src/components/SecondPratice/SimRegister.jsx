import React, { useState } from 'react'

const SimRegister = () => {
      const[userData, setUserData] = useState({name:"",email:"",password:""})
      console.log(userData,setUserData)

      function  handleSubmit(event){
            event.preventDefault();
            alert (" User Registration Completed..")
            setUserData({ name: "", email: "", password: "" })
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
                  <input style={{marginLeft:"10%"}} type='password'required name='password' onChange={handleChange}  value={userData.password}/><br/>
                  <input style={{marginLeft:"10%"}} type='submit' value="Register" />
            </fieldset>
      </form>
    </div>
  )
}

export default SimRegister
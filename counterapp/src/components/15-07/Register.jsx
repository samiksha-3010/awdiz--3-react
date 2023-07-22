

 import React, { useState } from 'react';
 import './Register.css'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [userData, setUserData] = useState({ name: "", email: "", password: ""});
    const router = useNavigate ();

    const handleChange =(event) =>{
        setUserData ({...userData,[event.target.name]: event.target.value});
    }
    console.log(userData, "-userdata")

    const handleSubmit = (event) =>{
        event.preventDefault();
 
    if(userData.name && userData.email&& userData.password){
        const array = JSON.parse(localStorage. getItem ("User")) || [];
        const userDataobj = {
            name:userData.name,
             email: userData.email,
             password: userData.password,
             cart:[]
            };

        //  for(  var i =0; i<array.length; i ++ ){ 
        //     if( array)
        //  }+-
         // console.log(array, "-array")

        array.push(userDataobj);
        localStorage. setItem ('User',JSON.stringify(array))
        alert ("you registration successfell.......")
        router('/Login')

    }else{
        alert("please fill all field")
    }
}
  return (
    <div id='register-style'>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <label>Name</label><br/>
            <input type='text' name= 'name' onChange={handleChange}/><br/>
            <label>Email</label><br/>
            <input type='email' name='email' onChange={handleChange}/><br/>
            <label>Password</label><br/>
            <input type='password' name='password' onChange={handleChange}/><br/>
          <div id='button-type'> <input  type='submit' value='Register'/><br/></div>

        </form>

    </div>
  )
}

export default Register;














// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

 

// const Register = () => {
//     const [userData, setUserData] =  useState ({name: "",email:"",password: ""});
//     const router = useNavigate ();
    

// const handleChange = (event)=>{
// userData({... userData ,[event.target.name]: event.target.value})
// console.log(userData,"-setuserdata");

// }
// const handleSubmit= (event) =>{
//     event. preventDeafult();
// }
// if(userData.name && userData.email && userData.password ){
//     const array = JSON.parse (localStorage.getItem ("User")) ||  []
//     const userDataobj ={
//         name:userData.name,
//         email:userData.email,
//         password:userData.password
//     }

//     console.log(array, "array");
//     array.push(userData)
//     localStorage.setItem(JSON.stringify(array))
//     alert("your reg is sussecfull...")
//     router('./login')
// }else{
//        alert ("please fill all field")
// }

//   return (
//     <div>
//       <h2>Register</h2>
//       <from onSubmit={handleSubmit}>
//         <lable>Name</lable><br/>
//         <input type='text' name='name' onClick={handleChange}/><br/>
//         <lable>Email</lable><br/>
//         <input type='type' name='email'  onClick={handleChange}/><br/>
//         <lable>Password</lable><br/>
//         <input type='password' onClick={handleChange}/><br/>
//         <input type='submit' value="Register"/>
//       </from>
//     </div>
//   )
// }

// export default Register



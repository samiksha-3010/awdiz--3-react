
import axios from 'axios';
import React, { useState } from 'react'

const FromOne = () => {
    const [name, setName] = useState();
    const [ email, setEmail] = useState();
    const [ password, setPassword] = useState();
    console.log (name, "-name")
    console.log (email, "-email")
    console.log (password, "-password ")
    

    function toSetName(event){
    //   console.log(event.target.value, "- check");
    setName(event.target.value)
    }

    function toSetEmail(event){
        // console.log( event.target.value, " -check")
        setEmail(event.target.value)

        }
        function toSetPassword(event){
            // console.log(event.target.value, "-chek")
            setPassword(event.target.value)

        }
             async function SubmitData(event){
            event.preventDefault();
              if(!name){
                return alert ('Name is required!')
              }
              if(name.length < 6){
                return alert("name most more than 6 digit!")
              }

              if (!email){
                return alert('email is required!')
              }

              if (!password){
                return alert('password is required!')
              }
              if(password.length < 6){
                return alert('password be must be more than 6 digit!')
              }
            
               
        //           const res = await axios.post('https://awdiz-backend.com/api/v1/register', {
        //     name: name
        //     email: email,
        //     password: password
        // })

                 const res = { data: { message: "ok", status: 200 } }

                 if (res.data.message == "ok") {
                     return alert("Resgistration Completed!")
                 } else {
                     return alert("Internal error, Please try again..")
                 }
         
            
            // alert("Datasubmitted!")
        }
    

  return (
    <div style={{display: 'flex',justifyContent: 'center',border: 'black',width: '50%', height: '400px' }}>
   <form onSubmit={ SubmitData}>
     <label >Name:</label>
    <input style={{backgroundColor: 'gray', color: 'white'}} onChange={toSetName} type='text' placeholder='Type your name....'/>  <br/>
    <label>Email:</label>
    <input  style={{backgroundColor: 'gray', color: 'white'}} onChange={toSetEmail}  type='email' placeholder='Type your email....'/> <br/>
    <lable>Password:</lable>
    <input  style={{backgroundColor: 'gray', color: 'white'}}  onChange={toSetPassword}  type='password' placeholder='Type your Password...'/> <br/>
    <input type='Submit' value="Register"/>
   </form>
   </div>
  )
}

export default FromOne;






























// import axios from 'axios';
// import React, { useState } from 'react'

// const FormOne = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     console.log(name, "- name")
//     console.log(email, "- email")
//     console.log(password, "-password")

//     function toSetName(event) {
//         // console.log(event.target.value, "- check");
//         setName(event.target.value)
//     }


//     function toSetEmail(event) {
//         // console.log(event.target.value, "-check")
//         setEmail(event.target.value)
//     }


//     function toSetPassword(event) {
//         // console.log(event.target.value)
//         setPassword(event.target.value)
//     }


//     async function submitData(event) {
//         event.preventDefault();

//         if (!name) {
//             return alert("Name is required!")
//         }
//         if (name.length < 6) {
//             return alert('Name must more than 5 digit! ')
//         }
//         if (!email) {
//             return alert("Email is required!")
//         }
//         if (!password) {
//             return alert("Password is required!")
//         }
//         if (password.length < 6) {
//             return alert("Password must be more than than 5 digit!")
//         }

//         // const res = await axios.post('https://awdiz-backend.com/api/v1/register', {
//         //     name,
//         //     email: email,
//         //     password: password
//         // })

//         const res = { data: { message: "ok", status: 200 } }

//         if (res.data.message == "ok") {
//             return alert("Resgistration Completed!")
//         } else {
//             return alert("Internal error, Please try again..")
//         }

//     }

//     return (
//         <div style={{ display: 'flex', justifyContent: "center" }}>
//             <form onSubmit={submitData}>
//                 <label>Name : </label><br />
//                 <input onChange={toSetName} type='text' placeholder='Type your name.. ' /><br />
//                 <label>Email :</label><br />
//                 <input onChange={toSetEmail} type='email' placeholder='Type your email..' /><br />
//                 <label>Password :</label><br />
//                 <input onChange={toSetPassword} type='password' placeholder='Type your password..' /><br />
//                 <input type='submit' value="Register" />
//             </form>
//         </div>
//     )
// }

// export default FormOne
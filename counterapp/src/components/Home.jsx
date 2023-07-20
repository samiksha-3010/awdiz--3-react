import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/Auth.context";


function Home(){
  const {state,login} = useContext(AuthContext);
  console.log(state,"state from context in home file")

    const [isUserLoggedIn, setIsUserLoggedIn]= useState (false);
    const router = useNavigate ();

    // useEffect (() =>{
    //     var user = JSON.parse(localStorage.getItem("Current-user"));
    //     console.log(user, "user")
    //     if (user){
    //         setIsUserLoggedIn(true);
    //     }
    // },[])

    useEffect(()=>{
      console. log(state?.user?.email,"state?.user?.email")
      if(state?.user?.email){
        setIsUserLoggedIn(true)
      }else{
        setIsUserLoggedIn(false)
      }
    },[state])

    function logout(){
         localStorage.removeItem("Current-user");
         setIsUserLoggedIn(false)
         alert("Logout Successful...")

    }
    // function addCart() {
    //     if (isUserLoggedIn) {
    //         alert("You are logged in cart product")
    //     } else {
    //         alert("please login")
    //     }
    // }
    return(
        // <>
        <div style={{textAlign: 'center'}}>
          <h1>This is a Awdiz Store  </h1>
          <img style={{height: '10%',width: '50%'}} src='https://tse1.mm.bing.net/th?id=OIP.0E2rT394d7tQ9MymGH8mTgHaE8&pid=Api&rs=1&c=1&qlt=95&w=183&h=122'/>
         <div>
          { isUserLoggedIn  ? <button onClick={()=>logout()}>Logout</button>: <button onClick={()=>router('/login')}>Login</button>}
        </div>
        {/* <button onClick={addCart} >Add to cart</button> */}
        {/* </> */}
        </div>
    )
}
export default Home;























// import React from 'react'

// const Home = () => {
//   return (
//     <div>
//         <h1  style={{color:'red'}}>Home Page</h1>
//         <img style={{height: '10%',width: '50%'}} src='https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
       


//     </div>
//   )
// }

// export default Home;
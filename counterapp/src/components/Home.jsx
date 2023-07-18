import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home(){
    const [isUserLoggedIn, setIsUserLoggedIn]= useState (false);
    const router = useNavigate ();

    useEffect (() =>{
        var user = JSON.parse(localStorage.getItem("Current-user"));
        console.log(user, "user")
        if (user){
            setIsUserLoggedIn(true);
        }
    },[])

    // function logout(){
    //      localStorage.removeItem("Current-user");
    //      setIsUserLoggedIn(false)
    //      alert("Logout Successful...")

    // }
    function addCart() {
        if (isUserLoggedIn) {
            alert("You are logged in cart product")
        } else {
            alert("please login")
        }
    }
    return(
        // <>
        <div style={{textAlign: 'center'}}>
          <h1>home page </h1>
          {/* <img style={{height: '10%',width: '50%'}} src='https://tse1.mm.bing.net/th?id=OIP.0E2rT394d7tQ9MymGH8mTgHaE8&pid=Api&rs=1&c=1&qlt=95&w=183&h=122'/> */}
         <div>
          {/* { isUserLoggedIn  ? <button onClick={logout}>Logout</button>: <button onClick={()=>router('/login')}>Login</button>} */}
        </div>
        <button onClick={addCart} >Add to cart</button>
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
//         <button>loggedout</button>


//     </div>
//   )
// }

// export default Home;
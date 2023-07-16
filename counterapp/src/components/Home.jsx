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

    function logout(){
         localStorage.removeItem("Current-user");
         setIsUserLoggedIn(false)
         alert("Logout Successful...")
   
 
    }
    function addCart() {
        if (isUserLoggedIn) {
            alert("You are logged in cart product")
        } else {
            alert("please login")
        }
    }
    return(
        <>
        <div>
            <h2>Home Page</h2>
          { isUserLoggedIn  ? <button onClick={logout}>Logout</button>: <button onClick={()=>router('/login')}>Login</button>}
        </div>
        <button onClick={addCart} >Add to cart</button>
        </>
    )
}

export default Home;



// import React from 'react'

// const Home = () => {
//   return (
//     <div>
//         <h1>Home Page</h1>
//         <button>loggedout</button>


//     </div>
//   )
// }

// export default Home
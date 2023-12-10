import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/Auth.context";


function Home(){
  const {state,login,logout} = useContext(AuthContext);
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
      console.log(state?.user?.email,"state?.user?.email")
      if(state?.user?.email){
        setIsUserLoggedIn(true)
      }else{
        setIsUserLoggedIn(false)
      }
    },[state])

    // function logout(){
    //     //  localStorage.removeItem("Current-user");
    //      setIsUserLoggedIn(false)
    //      alert("Logout Successful...")

    // }
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
          <h1>This is a Awdiz Store </h1>
         <div>
          { isUserLoggedIn  ? <button onClick={()=>logout()}>Logout</button>: <button onClick={()=>router('/login')}>Login</button>}
        </div>
        {/* <button onClick={addCart} >Add to cart</button> */}
        {/* </> */}
        </div>
    )
}
export default Home;























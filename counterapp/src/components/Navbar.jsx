import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/Auth.context";

function Navbar(){
    const {state,login,logout} = useContext(AuthContext)
    // console.log(state,"state from context in navbar")
    const  [User, setUser] = useState ({});
    const router = useNavigate ();

    
    // useEffect  (() =>{
    //     const isUserPresent = JSON.parse (localStorage.getItem ("Current-user"));
    //     if(isUserPresent){
    //         setUser(isUserPresent)
    //         if (state?.user){
    //             setUser(state?.user)
    //         }else{
    //             setUser({});
    //         }
    //     }
    // },[state] )
    // console.log(User)
    // function logout(){
    //     localStorage.removeItem("Current-user")
    //     setUser ({})
    // }

    useEffect(()=>{
if(state?.user){
    setUser(state?.user)

}else{
    setUser({})
}
    },[state])

    return (
        <div>
      
            <h2>Navbar</h2>
            <div style={{ display: 'flex', justifyContent: "space-around", border: "2px solid black", width: '100%', textAlign: "center" , backgroundColor:'black', color: "white" }}>
                <div style={{ width: "10%" }}  onClick={()=> router("/home")}><h2>Awdiz</h2></div>
                <div  style={{ display: 'flex', width: "80%", justifyContent: "right" }}>
                    { User?.email?
                   <>
                    <h2 onClick={()=> router("/product-from-backend")} >Product</h2>
                    <h2 style={{ marginLeft: "30px" }}>Profile</h2>
                    <h2  onClick={logout} style={{ marginLeft: "30px" }}>Logout</h2>
                    <h2  onClick={() =>router ('/cartsection')} style={{ marginLeft: "30px" }}>cart</h2>
                    </>
                    :
                    <h2 onClick={()=> router("/login")}>Login</h2>
                 
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar;
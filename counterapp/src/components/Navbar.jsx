import { useEffect, useState } from "react";
import { Router } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar(){
    const  [User, setUser] = useState ({});
    const router = useNavigate ();
    useEffect  (() =>{
        const isUserPresent = JSON.parse (localStorage.getItem ("Current-user"));
        if(isUserPresent){
            setUser(isUserPresent)
            
        }
    },[] )
    // console.log(User)

    function logout(){
        localStorage.removeItem("Current-user")
        setUser ({})
    }

    return (
        <div>
      
            <h2>Navbar</h2>
            <div style={{ display: 'flex', justifyContent: "space-around", border: "2px solid black", width: '100%', textAlign: "center" }}>
                <div style={{ width: "10%" }}>Awdiz</div>
                <div  style={{ display: 'flex', width: "80%", justifyContent: "right" }}>
                    { User?.email?
                   <>
                    <h2>Product</h2>
                    <h2 style={{ marginLeft: "10px" }}>Profile</h2>
                    <h2  onClick={logout} style={{ marginLeft: "10px" }}>Logout</h2>
                    <h2  onClick={() =>router ('/cartsection')} style={{ marginLeft: "10px" }}>cart</h2>
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
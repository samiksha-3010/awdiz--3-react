import { createContext, useEffect, useReducer } from "react";
export const AuthContext = createContext();
const initalState  = {user:null,product: []}

const reduser =  (state,action) =>{
    switch (action.type){
        case "LOGIN":
            return {user:action.payload}            //re asign
            case "LOGOUT":
                return {user:null}
               default:
                return state;
}
}
export const Authprovider = ({children} )=>{
    const [state,dispatch]= useReducer (reduser,initalState);
    function Login(userData){
        dispatch ({
            type:"LOGIN",
            payload:userData
        })
    }
    function Logout(userData){
        localStorage.removeItem("Current-User")
        dispatch ({
            type:"LOGOUT",
           
        })
    }
    useEffect(()=>{
 //   alert("you hardly refresh")

     const userData = JSON.parse(localStorage.getItem("Current-User"))
     console.log(userData,"-userdata")
     if(userData){  
     dispatch({
       type: "LOGIN" ,
       payload: userData
     })
    }
     
    },[])
    return(
        <AuthContext.Provider value={{state,Login,Logout}}>
            {children}
        </AuthContext.Provider>
    )
}




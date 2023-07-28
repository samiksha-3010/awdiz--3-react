import { createContext, useReducer } from "react";
export const AuthContext = createContext();
const initalState  = {user:null,}

const reduser =  (state,action) =>{
    switch (action.type){
        case "Login":
            return {user:action}
            case "Logout":
                return {user:null}
                default :
                return state
    }
}
export const Authprovider =({children}) =>{


const [state, dispatch] = useReducer(reduser,initalState);
function Login(userData){
    dispatch ({
        type:"Login",
        payload:userData
    })
}

    return (
        <AuthContext.Provider value={ {state,Login}}>
            {children}

        </AuthContext.Provider>
    )
   


}




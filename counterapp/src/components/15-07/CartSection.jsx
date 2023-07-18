import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CartSection = () => {
    const [userCart, setUserCart] = useState ([]);
    const router = useNavigate ();
    console.log(userCart, "-setUserCart")

    useEffect (() =>{
  const user = JSON.parse (localStorage.getItem("Current-user"));
  if(user?.email){
    const allUsers = JSON.parse (localStorage.getItem("Users"))
    for (var i = 0; i < allUsers.length;i++){
        if (allUsers[i].email == user.email && allUsers[i].password == user.password){
            setUserCart(allUsers[i].cart)
            break;
        }
    }
     
  }else{
    alert ("Plese login and watch all cart product")
    router('/login')
  }
    },[])

  return (
    <div>
        <h2>My Cart Page</h2>
        <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>/
         {userCart.length && userCart.map((pro) =>( 
             <div style={{ width: "22%",height: "650px",border: "1px solid black" ,padding: "30px"}}>
             <img style={{width:"100%", height: "450px", }} src={pro.image} />
             <h4>Title: {pro.tittle}</h4>
             <h4>Price{pro.price}</h4>
         </div>
         ))}
        </div>
    </div>
  )
}

export default CartSection
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CartSection = () => {
    const [userCart, setUserCart] = useState ([]);
    const router = useNavigate ();
    console.log(userCart, "-userCart")

    useEffect (() =>{
  const user = JSON.parse(localStorage.getItem("Current-user"));
  if(user?.email){
    const allUsers = JSON.parse(localStorage.getItem("User"))
    for (var i = 0; i < allUsers.length; i++){
        if (allUsers[i].email == user.email && allUsers[i].password == user.password){
            setUserCart(allUsers[i].cart)
            break;
        }
    }
     
  }else{
    alert("Plese login and watch all cart product")
    router('/login')
  }
    },[])
  return (
    <div>
        <h2>My Cart Page</h2>
        {/* <img style={{height: '10%',width: '50%'}}src='https://bpb-us-e1.wpmucdn.com/blogs.uoregon.edu/dist/d/11771/files/2016/10/Shopping-from-Huffington-post-1ka98ph.jpg'/> */}
        <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
         {userCart.length && userCart.map((pro) =>( 
             <div style={{ width: "22%",height: "650px",border: "1px solid black" ,padding: "30px"}}>
             <img style={{width:"100%", height: "500px", }} src={pro.image} />
             <h4>Title: {pro.tittle}</h4>
             <h4>Price{pro.price}</h4>
         </div>
         ))}
        </div>
    </div>
  )
}

export default CartSection
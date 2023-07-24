import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CartSection = () => {
    const [finalPrice, setfinalprice] = useState (0);
    const [userCart, setUserCart] = useState ([]);
    const router = useNavigate ();
    console.log(userCart, "-userCart")

    useEffect(() => {
      if (userCart.length){
          var totalPrice = 0;
          for (var i = 0; i < userCart.length; i++) {
              totalPrice += userCart[i].price
          }
          setfinalprice(totalPrice)
      }

    },[userCart])

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
    function buyProducts(){
      const user = JSON.parse(localStorage.getItem("Current-user"));
      if (user?.email) {
          const allUsers = JSON.parse(localStorage.getItem("User"));
          for (var i = 0; i < allUsers.length; i++) {
              if (allUsers[i].email == user.email && allUsers[i].password == user.password){
                  allUsers[i].cart = [];
                  break;
              }
    }
    localStorage.setItem("Users", JSON.stringify(allUsers))
  }
    setfinalprice(0);
    setUserCart([])
  }
  alert("Products will Deliver soon thanks for shooping")


  return (
   
    <div style={{display: 'flex',justifyContent:'space-around'}}>
       <h2>My Cart Page</h2>
       <div style={{display: 'flex',justifyContent:'space-around'}}>
        <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'  }}>
         {userCart && userCart.map((pro)=>( 
             <div style={{ width: "22%",height: "600px",border: "1px solid black" ,padding: "30px"}}>
             <img style={{width:"100%", height: "400px", }} src={pro.image} />
             <h4>Title: {pro.tittle}</h4>
             <h4>Price{pro.price}</h4>
         </div>

         ))}
        </div>
        <div style={{border: '2px solid red',width:'35%'}}>
          <h1>Total</h1>
          <p>Total MRP :{finalPrice + finalPrice} $</p>
          <p>Price After 50% Discount:{finalPrice}$</p>
          
        <button onClick={buyProducts} style={{ width: "150px", height: "40px", backgroundColor: "red", color: "black" }}>Buy Product</button>
        </div>
    </div>
    </div>
  )
}

export default CartSection;
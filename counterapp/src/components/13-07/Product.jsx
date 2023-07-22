import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import SingleProduct from '../01-07/Singleprodct';

const Product = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const [products, setProducts] = useState([]);
  const [singlProducts, setSinglProducts] = useState({});
  const { id } = useParams();
  const router = useNavigate ();
  //    console.log(products, "- products")

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  useEffect(() => {
    if (id && products.length){
      const result = products.find((product) => product.id == id);
      // console.log(result, "-result")
      setSinglProducts(result);
    }
  }, [id, products]);

  //   console.log(singlProducts, "-singleProducts")

  useEffect(() => {
    var user = JSON.parse(localStorage.getItem("Current-user"));
    // console.log( user, "usr")
    if (user) {
      setIsUserLoggedIn(true);
      setCurrentUserEmail(user.email);
    }
  }, []);

  // **********

  function addtocart() {
    if (isUserLoggedIn) {
      const users = JSON.parse(localStorage.getItem("User"));
      for (var i = 0; i < users.length; i++) {
        if (users[i].email == currentUserEmail) {
          users[i].cart.push(singlProducts);
          localStorage.setItem("User", JSON.stringify(users));
          break;
        }
      }
      alert ("Product added for succesfull cart")
      router ('/product-from-backend')
    } else {
      alert("you can add product before login");
    }
  }

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div style={{ width: "45%", height: "400px", border: "5px solid red" }}>
        <img
          style={{ width: "100%", height: "100%" }}
          src={singlProducts.image} />
      </div>

      <div style={{ width: "50%", height: "700px", border: "5px solid blue" }}>
        <h1 style={{color: "red"}} >Name :{singlProducts.title}</h1>
        <h2>Price : {singlProducts.price}</h2>
        <button style={{width: "20%",height:"40px" , backgroundColor: "pink" , color:"black" , textAlign: "centre"}} onClick={addtocart}>add to cart</button>
      </div>
    </div>
  );
};

export default Product;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllProduct = () => {
  const [isProductsExist, setIsProductsExist] = useState(false);
  const [products, setProducts] = useState();
  const router = useNavigate();

  // console.log(products, "-products");

  useEffect(() => {
    const productsFromDb = JSON.parse(localStorage.getItem("Products"));
    if (productsFromDb) {
      setIsProductsExist(true);
      setProducts(productsFromDb);
    } else {
      setIsProductsExist(false);
    }
  }, []);

  const redirect = (id) =>{
    // console.log(id,"-id")
    router(`/single/${id}`)
  }
  return (
    <div  style={{width: "90%", margin:"auto"}}>
      {!isProductsExist ? (
        <div>No Product</div>
      ) : (
        <div style={{ display: "flex", justifyContent: "space-around"  }}>
          {products &&
            products.map((pro) => (
              <div  onClick={redirect} style={{ width: "25%", border: "2px solid red" }}  key={products.name}>
                <img style={{ width: "23%", border: "2px solid red" ,flexWrap: "wrap",width: "100%",height:"200px" ,display: "flex", justifyContent: "space-around" }}  src={pro.image} />
                <h3>Name: {pro.Name}</h3>
                <h4>Cetegery: {pro.Cetegery}</h4>
                <h4>Price: {pro.Price}$</h4>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default AllProduct;

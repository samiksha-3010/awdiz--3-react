import React, { useEffect,useState } from 'react'

const AllProduct = () => {
  const  [isProductsExist, setIsProductsExist] = useState(false);
  const [products, setProducts] = useState();

  console.log(products, "-products")

  useEffect(()=>{
const productsFromDb = JSON.parse(localStorage.getItem("products"))
if(productsFromDb){
setIsProductsExist(true);
setProducts(productsFromDb)
}else{
  setIsProductsExist(false)

}
  },[])
  return (
    <div>{!isProductsExist ?<div>No Product</div>
   :
   <div>
    {products && products.map((pro) => (
      <div key={products.name}>
        <img src='{pro.image}'/>
        <h3>Name: {pro.Name}</h3>
        <h4>Cetegery: {pro.Cetegery}</h4>
        <h4>Price: {pro.Price}$</h4>

      </div>

    ))}

   </div>
  }
    

    </div>
  )
}

export default AllProduct;
import React, { useEffect, useState } from 'react'


const Pratice = () => {
    const [product, setProduct] = useState ([])
    useEffect (() =>{
        fetch('https://fakestoreapi.com/products?limit=5')
        .then(res=>res.json())
        .then(json=>console.log(json))
    },) 
  return (
    <div>
        <h1>Product:</h1>
        <div></div>


    </div>
  )
}

export default Pratice
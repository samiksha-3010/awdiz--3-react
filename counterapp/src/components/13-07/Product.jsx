import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SingleProduct from '../01-07/Singleprodct';

const Product = () => {
  
    const [products, setProducts] = useState([])
    const [singlProducts,setSingleProducts] = useState({});
    const {id} = useParams();
       console.log(products, "- products")

    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json=>setProducts (json))

       
    },[])
    useEffect (()=>{
        if(id && products.length){
            const result= products.find((products) => products.id ==id);
            console.log(result, "-result")
        }
        
    },[id, products])
    console.log(SingleProduct, "-singleProducts")
  return (
    <div style={{display: 'flex', justifyContent: "space-around"}}>
        <div style={{ width:"45%", height: "400px", border: "5px solid red"}}>
            <img src={singlProducts.image}/>
        </div>

        <div style={{ width: "50%", height: "700px", border: "5px solid blue"}}>
        <h1>Name :{singlProducts.title}</h1>

        <h2>Price : {singlProducts.price}</h2>
        </div>
    </div>
  )
}

export default Product
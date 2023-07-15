import React,{useEffect, useState} from 'react'
// import { json } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const  ProductFormBackend = ()=> {
    const [products, setProducts] = useState([]);
    // console.log(products, "-product")
    const router = useNavigate();

    useEffect (() =>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json=>setProducts (json))
        .then (json => console.log(json))            

    },[])
    const   redirect = (id) =>{
        console.log(id,"-id")
        // alert ("working..")
        router (`/product/${id}`)

    }


  return (

    <div>
        <h2>Product:</h2>
    { products.length ?
         <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}> 
          { products.map((pro) =>(
              <div onClick={redirect(pro.id)} style={{  cursor: 'pointer', width: "18%", border: "2px solid black", height: '450px', marginBottom: "30px" }}>
              <img style={{ width: "80%", height: "260px", marginLeft: "10%", marginTop: "25px" }} src={pro.image} />
              <h4 style={{ marginLeft: "20px" }} >Name : {pro.title}</h4 >
              <h3 style={{ marginLeft: "20px" }}>Price : {pro.price}Rs.</h3>
          </div>
          
          

          ) )}
            </div>
            :
            <h1 style={{ width: "15%", margin: 'auto' }}>Loading.</h1>
        
            }
        
  </div>
  )
        }

export default ProductFormBackend

// import React, { useEffect, useState } from 'react'
// import { json } from 'react-router-dom';
// const [product, setProducts] = useState ([]);
// console.log (product, "-setProducts")
 

// const ProductFormBackend = () => {

//     useEffect(() => {
//         fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then (json => console.log(json))
//             // .then(json=>console.log(json))
           
//     })
//   return (
//     <div><h1>Product :</h1>

//     </div>
//   )
// }

// export default ProductFormBackend



   
  
       


  


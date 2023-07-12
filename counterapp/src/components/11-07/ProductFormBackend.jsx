// import React,{useEffect, useState} from 'react'
// // import { json } from 'react-router-dom';

// const  ProductFormBackend = ()=> {
//     const [products, setProducts] =([]);
//     console.log(products, "-product")

//     useEffect (() =>{
//         fetch('https://fakestoreapi.com/products')
//         .then(res => res.json())
//         .then(json=>setProducts (json))
//         .then (json => console.log(json))

//     },[])


//   return (
//     <div>
//         <h2>Product:</h2>
//     { products.length ?
//          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}> 
//           { products.map((pro) =>(
//               <div style={{ width: "18%", border: "2px solid black", height: '450px', marginBottom: "30px" }}>
//               <img style={{ width: "80%", height: "260px", marginLeft: "10%", marginTop: "25px" }} src={pro.image} />
//               <h4 style={{ marginLeft: "20px" }} >Name : {pro.title}</h4 >
//               <h3 style={{ marginLeft: "20px" }}>Price : {pro.price}Rs.</h3>
//           </div>
          

//           ) )}
//             </div>
//             :
//             <h1 style={{ width: "15%", margin: 'auto' }}>Loading.</h1>
        
//             }
        
//   </div>
//   )
//         }

// export default ProductFormBackend



import React, { useEffect, useState } from 'react'

const ProductFormBackend = () => {
    const [products, setProducts] = useState([]);

    useEffect (() =>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => setProducts(json))

    },[])
  return (
    <div>
    {products.length ? 
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }} >
        {products.map((pro) =>(
                    <h1>Products :</h1>
                    <div>
                         <img src=''/>
                    <h4>Name: </h4>
                    <h3>Price:</h3>

                    

                    </div>
                   


        ))}
   

     </div> 
      }

   
  
       


  
    </div>
  )
}

export default ProductFormBackend


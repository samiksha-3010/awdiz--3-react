import React, { useEffect, useState } from 'react'
// import { json } from 'react-router-dom'


const Pratice = () => {
    const [products, setProducts] = useState ([])
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
          .then(res => res.json())
          .then(json => setProducts(json))
        // .then(json=>)
    },[]) 

  return (
    <div>
       <h1>Product:</h1>
      { products.length ?
      
     
       <div  style={{display: 'flex', flexWrap: 'wrap' , justifyContent: 'space-around' }}>
          
           {products.map((pro)=>(
             <div style={{cursor: 'pointer',width: '23%', height: '500px',border:'2px solid black',marginBottom: '30px'}} > 
               <img style={{width:'80%',height:'260px', marginLeft:'10%',marginTop: '25px'}} src={pro.image}/>
               <h2 style={{marginLeft:"20px"}}> Name {pro.title}</h2>
               <h2  style={{marginLeft:"20px"}}> Price{pro.price}</h2>
             
             </div>
           ))}
   
   </div>
   :
   <h1 style={{width : "10%",margin:'auto',color:'red'}}>Loading....</h1>

}
   
    </div>
  )
}

export default Pratice;



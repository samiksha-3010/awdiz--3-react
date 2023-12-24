import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AllProduct = () => {
      const [products, setProducts] = useState([]);
      const router = useNavigate();

      useEffect(() => {
            fetch("https://fakestoreapi.com/products")
              .then((res) => res.json())
              .then((json) => setProducts(json));
          }, []);

          const redirect = (id) =>{
            console.log(id,"-id")
            // alert ("working..")
            router (`/Single-Pro2/${id}`)
        }
  return (
    <div>
     <h2>Product Second New:</h2>

    {/* { products.length ? */}
         <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}> 
          { products.map((pro) =>(
              <div onClick={ ()=> redirect (pro.id)} style={{  cursor: 'pointer', width: "18%", border: "2px solid black", height: '450px', marginBottom: "30px" }}>
              <img style={{ width: "80%", height: "260px", marginLeft: "10%", marginTop: "25px" }} src={pro.image} />
              <h4 style={{ marginLeft: "20px"  }} >Name : {pro.title}</h4 >
              <h3 style={{ marginLeft: "20px" }}>Price : {pro.price}Rs.</h3>
          </div>

          ) )}
            </div>
             {/* :
             <h1 style={{ width: "15%", margin: 'auto' }}>Loading.</h1>
            } */}



     
    </div>
  )
}

export default AllProduct
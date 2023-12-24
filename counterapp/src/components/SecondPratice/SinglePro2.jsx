import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const SinglePro2 = () => {
  const [productData2, setProductData2] = useState({});
    console.log(productData2,"productData2")
    const { id } = useParams();
    console.log(id, "id")
    async function getSingleProductData() {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            console.log(response.data)
            setProductData2(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if (id) {
            getSingleProductData()
        }
    }, [id])
    return (
        <div >
            <h1>{productData2.title}</h1>
            <img src={productData2.image} />
        </div>
    )
}
export default SinglePro2
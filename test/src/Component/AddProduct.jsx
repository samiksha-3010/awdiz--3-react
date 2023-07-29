import React, { useEffect, useState } from 'react'
import { Router, useNavigation } from 'react-router-dom'
import { toast } from 'react-hot-toast'
const AddProduct = () => {
    const [productData, setProductData] = useState({ name: "", price: "", image: "", category: "Other" });

    const handleChange = (event) => {
        setProductData({ ...productData, [event.target.name]: event.target.value })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (productData.name && productData.price && productData.image && productData.category) {
            const productsArray = JSON.parse(localStorage.getItem("Products")) || [];
            productsArray.push(productData);
            localStorage.setItem("Products", JSON.stringify(productsArray))
            setProductData({ name: "", price: "", image: "", category: "Other" })
            // Router('/all-products');
            toast.success("Product added Successful.")
    }else{
        toast.error("please fill all field..")
    }
}
function selectRole(event) {
    // console.log(event.target.value, "- role")
    setProductData({ ...productData, ["category"]: event.target.value })
}

    useEffect(() =>{
        const user = JSON.parse(localStorage.getItem("Current-User"))
        if(user){
        if(user?.role=="Buyer" ){
            toast.error("you are not a seller user..")
            Router('/')
        }

        }else{
   toast.error("you are not Logged user..")
            Router('/login')
        }
    },[])
  return (
    <div>
             <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <label>Product Name:</label><br />
                <input value={productData.name} type='text' onChange={handleChange} name="name" /><br />
                <label>Product Price :</label><br />
                <input value={productData.price} type='number' onChange={handleChange} name='price' /><br />
                <label>Product Category :</label><br />
                <select onChange={selectRole} >
                    <option value="Other">Other</option>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Chidren">Chidren</option>
                    <option value="Electronic">Electronic</option>
                </select><br />
                <label>Product Image:</label><br />
                <input value={productData.image} type='text' onChange={handleChange} name='image' /><br />
                <input type='submit' value='Add Product' /><br />
            </form>
    </div>
    
  )
}

export default AddProduct;
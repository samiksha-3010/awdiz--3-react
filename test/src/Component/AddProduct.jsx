import React, { useEffect, useState } from 'react'
import { Router, useNavigate, useNavigation } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { v4 as uuidv4 } from 'uuid';


const AddProduct = () => {
    const [productData, setProductData] = useState({ name: "", price: "", image: "", category: "Other" });
    const router = useNavigate();

    const handleChange = (event) => {
        setProductData({ ...productData, [event.target.name]: event.target.value })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (productData.name && productData.price && productData.image && productData.category) {
            const productsArray = JSON.parse(localStorage.getItem("Products")) || [];

            const randomId = uuidv4();
           productData["id"] = randomId;
            productsArray.push(productData);
            localStorage.setItem("Products", JSON.stringify(productsArray))
            setProductData({ name: "", price: "", image: "", category: "Other" })
            router('/all-products');
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
        if(user?.role=="Buyer"){
            toast.error("you are not a seller user..")
            Router('/')
        }

        }else{
   toast.error("you are not Logged user..")
            Router('/login')
        }
    },[])
  return (
    <div  style={{width: "30%" , height: "450px", border: "2px solid black",margin: "auto", backgroundColor: "pink"}}>
             <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <label style={{marginLeft: "20%" , fontSize: "20px"}}>Product Name:</label><br />
                <input style={{width: "55%" , height: "40px",marginLeft: "20%" , marginTop: "20px"}} value={productData.name} type='text' onChange={handleChange} name="name" /><br />
                <label style={{marginLeft: "20%" , fontSize: "20px"}}>Product Price :</label><br />
                <input style={{width: "55%" , height: "40px",marginLeft: "20%" , marginTop: "20px"}} value={productData.price} type='number' onChange={handleChange} name='price' /><br />
                <label style={{marginLeft: "20%" , fontSize: "20px"}}>Product Category :</label><br />
                <select style={{width: "55%" , height: "40px",marginLeft: "20%" , marginTop: "20px"}} onChange={selectRole} >
                    <option value="Other">Other</option>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Chidren">Chidren</option>
                    <option value="Electronic">Electronic</option>
                </select><br />
                <label style={{marginLeft: "20%" , fontSize: "20px"}}>Product Image:</label><br />
                <input style={{width: "55%" , height: "40px",marginLeft: "20%" , marginTop: "20px"}} value={productData.image} type='text' onChange={handleChange} name='image' /><br />
                <input style={{width: "55%" , height: "40px",marginLeft: "20%" , marginTop: "20px", backgroundColor:"black", color:"white",borderRadius: "40px"}} type='submit' value='Add Product' /><br />
            </form>
    </div>
  )
}

export default AddProduct;









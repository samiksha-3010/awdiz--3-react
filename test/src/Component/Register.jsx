import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./Register.css";
const Register = () => {
  const [userData, setUserData] = useState({name: "", email: "", password: "",role: "buyer"});
  const router = useNavigate();
  // console.log(userData);
  
  const handlechange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userData.name && userData.email && userData.password) {
      const user = JSON.parse(localStorage.getItem("User")) || [];
      user.push(userData);
      localStorage.setItem("User", JSON.stringify(user));

        setUserData({name: "", email: "", password: "",role: "buyer"});
        router("/login");
      toast.success("successfull..");
    } else {
      toast.error("plese fill all field... ");
    }
  };
  function SelectRole (event) {
console.log(event.target.value, "-role")
setUserData({...userData,["role"]:event.target.value})
  }
  
  return (
    <div className="parent-1">
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <lable className= 'lable-name'>Name:</lable> <br />
        <input className="input-style" value={userData.name} type="text" name="name" onChange={handlechange} /><br />
        <lable>SlectRole:</lable><br/>
        <select onChange={SelectRole}>
          <option value= "Buyer">Buyer:</option>
          <option value="Seller">Seller:</option>
        </select><br/>
        <lable className= 'lable-name'>Email:</lable> <br />
         <input className="input-style" value={userData.email} type="email" name="email" onChange={handlechange}/> <br />
        <lable className= 'lable-name'>Password:</lable> <br />
        <input className="input-style" value={userData.password} type="password" name="password" onChange={handlechange}/> <br />
        <input className="submit-data" type="submit" value="Register" /> <br />
      </form>
    </div>
  );
};

export default Register;

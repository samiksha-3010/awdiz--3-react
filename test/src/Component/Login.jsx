import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({email: "",password: "" });
  const router = useNavigate ();
  console.log(userData)
  const handlechange = (event) => {
    setUserData({...userData,[event.target.name]: event.target.value });
  };
  const handlesubmit = (event) => {
    event.preventDefault();
    if (userData.email && userData.password) {
      var flag = false;
      const alluser = JSON.parse(localStorage.getItem("User"));
      for (var i = 0; i < alluser.length; i++) {
        if (alluser[i].email == userData.email && alluser[i].password == userData.password) {
          localStorage.setItem("Current-User", JSON.stringify(alluser));
          flag = true;
          toast("login succesfull");
          router('/')
          setUserData({ email: "", password: "" });
        }
        if (flag == false){
             toast("registered details unmatch");
            }
      }
    } else {
      toast("plese fill all field");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handlesubmit}>
        <lable>Email:</lable><br />
        <input value={userData.email} type="email" name="email" onChange={handlechange} /> <br />
        <lable>Password:</lable> <br />
        <input value={userData.password} type="password" name="password" onChange={handlechange}/><br />
        <input type="submit" value="login" />
      </form>
    </div>
  );
};

export default Login;

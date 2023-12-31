import React, { useContext, useState } from "react";
import "./Login.css";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";

const Login = () => {
  const { state, Login } = useContext(AuthContext);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
    role: "",
  });
  const router = useNavigate();
  // console.log(userData)
  const handlechange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };
  const handlesubmit = (event) => {
    event.preventDefault();
    if (userData.email && userData.password) {
      var flag = false;
      const alluser = JSON.parse(localStorage.getItem("User"));
      for (var i = 0; i < alluser.length; i++) {
        if (
          alluser[i].email == userData.email &&
          alluser[i].password == userData.password
        ) {
          localStorage.setItem("Current-User", JSON.stringify(alluser));
          Login(alluser[i]);
          setUserData({ email: "", password: "", role: "" });
          toast("login succesfull");
          router("/");
          flag = true;
          // setUserData({ email: "", password: "" });
        }
        if (flag == false) {
          toast("registered details unmatch");
        }
      }
    } else {
      toast("plese fill all field");
    }
  };

  return (
    <div className="parent-1">
      <h2>Login</h2>
      <form onSubmit={handlesubmit}>
        <lable className="lable-email">Email:</lable>
        <br />
        <input
          className="input-name"
          value={userData.email}
          type="email"
          name="email"
          onChange={handlechange}
        />{" "}
        <br />
        <lable className="lable-email">Password:</lable> <br />
        <input
          className="input-name"
          value={userData.password}
          type="password"
          name="password"
          onChange={handlechange}
        />
        <br />
        <input className="submit-data" type="submit" value="login" />
      </form>
    <p className="register-style" onClick={() => router("/register")}>
         clic here <span  style={{color: "red"}}> here new Register! ...</span>
        </p>
    </div>
  );
};

export default Login;

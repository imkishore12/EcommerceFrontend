import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    try {
       axios
        .post("https://ecommercebackend-7m3i.onrender.com/user/login", { email, password })
        .then((res) => {
          console.log(res.data, "register data");

          if (res.data.msg === "user is not registered") {
            alert(res.data.msg);
            navigate("/register");
          } else {
            navigate('/home')
            localStorage.setItem("token", res.data.token);
          }
        });
    } catch (error) {
      console.error("Login failed", error);
    }
  };
  return (
    <div>
      {/* <input
        type="text"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Login</button>
      <Link to="/register"><button>Register</button></Link> */}
      

















      <div class="wrapper">
        <div class="logo">
            <img src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg" alt="" />
        </div>
        <br></br>
        <form class="p-3 mt-3">
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="email" name="userName" id="userName" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password"value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <Link to="/login"><button class="btn mt-3" onClick={handleRegister}>Login</button></Link><br></br>
        </form>
        <br></br>
        <div class="text-center fs-6">
        <Link to="/register"><button class="btn mt-3">Register</button></Link>
        </div>
    </div>
    </div>












  );
};

export default Login;
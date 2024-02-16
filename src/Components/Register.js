import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    try {
      const response = axios.post("https://ecommercebackend-7m3i.onrender.com/user/register", { email, password })
        .then((res) => {
          console.log(res.data, "register data");

          if (res.data.msg === "This email is already exist") {
            console.log("dashboard")
            alert("this email is already exist");
            navigate("/login");
          } else {
            localStorage.setItem("token", res.data.token);
            navigate("/home");
          }
        });
        console.log(response.data, "response data"); //handle the response as needed
    } catch (error) {
      console.error("registration failed", error);
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
      <button onClick={handleRegister}>Register</button> */}











      <div class="wrapper">
        <div class="logo">
            <img src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg" alt="" />
        </div>
        <br></br>
        <div class="p-3 mt-3">
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="email" name="userName" id="userName" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password"value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
        <button class="btn mt-3" onClick={handleRegister}>Register</button><br></br>
        </div>
        
        
    </div>
    </div>
  );
};

export default Register;
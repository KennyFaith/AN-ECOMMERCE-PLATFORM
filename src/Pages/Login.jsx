import React from "react";
import { useContext } from "react";
// import { PRODUCTS } from "../../Products";
// import { ShopContext } from "../../Context/ShopContext";
// import { CartItem } from "./CartItem";
import "./Login.css";
// import { EmailIcon } from '@mui/icons-material/Email';
// import { HttpsIcon } from '@mui/icons-material/Https';


import { useNavigate } from "react-router-dom";



const Login = () => {
  return (
    <div className="container">
        <div className="container-form-login">
            <h2 className="p">LOGIN</h2>
            <form action="#">
                <div className="input-box">
                    {/* <span className="icon"><EmailIcon /></span> */}
                    <input type="email" required />
                        <label>Email</label>
                </div>
                <div className="input-box">
                    {/* <span className="icon"><HttpsIcon /></span> */}
                    <input type="password" required />
                        <label>Password</label>
                </div>
                <div className="r-f">
                    <label>
                        <input type="checkbox" required /> Remember Me
                    </label>
                    <a href="#"> Forgot Password</a>
                </div>
                <button type="submit" className="btn">Login</button>
                <div className="noA">
                    <p>Don't have an account? <a href="#" className="register-link">Register Here</a> </p>
                </div>

            </form>
        </div>


        <div className="container-form-register">
            <h2 className="p">REGISTRATION</h2>
            <form action="#">
                <div className="input-box">
                    {/* <span className="icon"><EmailIcon /></span> */}
                    <input type="text" required />
                        <label>Username</label>
                </div>  
                <div className="input-box">
                    {/* <span className="icon"><EmailIcon /></span> */}
                    <input type="email" required />
                        <label>Email</label>
                </div>
                <div className="input-box">
                    {/* <span className="icon"><HttpsIcon /></span> */}
                    <input type="password" required />
                        <label>Password</label>
                </div>
                <div className="r-f">
                    <label>
                        <input type="checkbox" required /> I agree to the terms & conditions
                    </label>
                </div>
                <button type="submit" className="btn">Register</button>
                <div className="noA">
                    <p>Already have an account? <a href="#" className="login-link">Login Here</a> </p>
                </div>

            </form>
        </div>
      
    </div>
  )
}

export default Login;

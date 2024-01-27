import React from "react"; 
import login_img from "../login.png";
import { NavLink } from "react-router-dom";
import "./Login.css";

const Login = ()=>{
    return(
        <>
            <div className="login_container">
                <div className="login_left bg-primary text-white">
                    <div>
                    <h2 className="mb-3 text-left">Login</h2>
                    <div>Get access to your Orders, <br /> Wishlist and Recommendations </div>
                    </div>
                    <img src={login_img} alt="login img" />
                </div>
                <div className="bg-white p-8 flex-1">
                    <form action="" className="loginForm">
                        <div className="loginForm d-flex flex-column gap-4">
                            <input type="email" placeholder="Email*" className="loginForm"/>
                            <input type="password" placeholder="Password*" className="loginForm"/>
                            <input type="submit" value="Login" className="loginForm"/>
                        </div>
                    </form>
                    <div className="loginForm d-flex" >
                        <div>Already have Account ?</div>
                        <NavLink to="/signup"> Register</NavLink>
                    </div>
                </div>
            </div>
        </>        
    );
}

export default Login;
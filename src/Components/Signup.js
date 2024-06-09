import React from "react"; 
import login_img from "../login.png";
import { NavLink } from "react-router-dom";

const Signup = ()=>{

    return(
        <>
            <div className="d-flex p-4 w-1/2 mx-auto rounded">
                <div className=" w-72 flex flex-col gap-10 justify-between bg-primary p-7 text-white">
                    <div className="text-2xl mb-3 font-semibold">Looks like You're New Here</div>
                    <div className="text-lg">Sign up with your mobile number to get started</div>
                    <img src={login_img} alt="login img" />
                </div>
                <div className="bg-white p-8 flex-1">
                    <h1 className="text-2xl font-semibold mb-3">Register</h1>
                    <form action="" className="loginForm">
                        <div className="loginForm d-flex flex-column gap-4">
                            <input type="text" placeholder="Name*" className="loginForm"/>
                            <input type="email" placeholder="Email*" className="loginForm"/>
                            <input type="tel" placeholder="Mobile*" className="loginForm"/>
                            <input type="password" placeholder="Password*" className="loginForm"/>
                            <input type="submit" value="Register" className="loginForm"/>
                        </div>
                    </form>
                    <div className="loginForm d-flex" >
                        <div>Already have Account ?</div>
                        <NavLink to="/login">Login</NavLink>
                    </div>
                    
                </div>
            </div>
        </>        
    );
}

export default Signup;
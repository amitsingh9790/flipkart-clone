import React from "react";
import "./Cart.css";
import { FaStar } from "react-icons/fa";
import Data from "./Data";
import { useCart } from './CartContext';

const Cart = () => {
    const { cart,removeFromCart } = useCart(); 
    
        return (
            <div className="cart_container">
                <table>
                    <thread>
                        <div class="grid-container1">
                            <div class="grid-item gridItem1">
                                <h5>My cart(1)</h5>
                            </div>
                            <div class="grid-item gridItem1 btn-left-out cart_right">
                                <button className="bg-primary btn-out">Check Out</button>
                            </div>
                        </div>
                    </thread>

                    <tbody className="tbo">
                    {cart.map((cartItemId) =>(
                        <div key={cartItemId} class="grid-container2">
                            <div class="grid-item gridItem2">
                                <div className="cart_left">
                                <img src={Data[cartItemId].image} alt="" />
                                </div>
                            </div>
                            <div class="grid-item gridItem2">
                                <p className="text-capitalize fs-5 ">{Data[cartItemId].name}</p>
                                <div className="text-capitalize"><span className="ratetext">{Data[cartItemId].rating} <FaStar /></span><span className="text-muted ms-2">({Data[cartItemId].reviews})</span></div>
                                <div><span className="fs-5 fw-bolder">Rs. {Data[cartItemId].offerPrice} </span><span className="text-muted text-decoration-line-through">{Data[cartItemId].actualPrice}</span><span className="fs-5 textgreen"> 11.76% </span></div>
                                <p>stock: {Data[cartItemId].stock}</p>
                            </div>
                            <div class="grid-item gridItem2 cart_right">
                                <button className="btn-remove" onClick={()=> removeFromCart(cartItemId)}>Remove</button>
                            </div>
                        </div>
                    ))}
                    </tbody>
                </table>

            </div>
        );
    }

    export default Cart;
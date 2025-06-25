import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./HeaderCartButton.css"
const HeaderCartButton =()=>{
return (
    <button className="cart-button">
        <span className="cart-icon"><FaShoppingCart size={24} /> </span>
        <span>Your Cart</span>
        <span className="badge">0</span>
     </button>
)
}
export default HeaderCartButton;
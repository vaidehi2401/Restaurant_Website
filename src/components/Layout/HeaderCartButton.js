import React, {useContext} from "react";
import { FaShoppingCart } from "react-icons/fa";
import CartContext from "../../store/cart-context";
import "./HeaderCartButton.css"
const HeaderCartButton =(props)=>{
     const cartCtx = useContext(CartContext);
  const itemCount = cartCtx.totalAmount;
return (
    <button className="cart-button" onClick={props.onShow}>
        <span className="cart-icon"><FaShoppingCart size={24} /> </span>
        <span>Your Cart</span>
        <span className="badge">{itemCount}</span>
     </button>
)
}
export default HeaderCartButton;
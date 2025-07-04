import logo from './logo.svg';
import {useState} from "react";
import './App.css';
import Cart from './components/Cart/Cart';
import Header from "./components/Layout/Header";
import RestaurantSummary from './components/Meals/RestaurantSummary';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
function App() {
  const [showCart, setShowCart] = useState(false);
  const showCartHandler=()=>{
  setShowCart(true);
  }
  const hideCartHandler=()=>{
    setShowCart(false);
  }
  return (
   <CartProvider>
      {showCart && <Cart onClose={hideCartHandler}/>}
      <Header onShow={showCartHandler}/>
     <main>
      <Meals/>
     </main>  
   </CartProvider>
  );
}

export default App;

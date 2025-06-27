import logo from './logo.svg';
import {useState} from "react";
import './App.css';
import Cart from './Cart/Cart';
import Header from "./Layout/Header";
import RestaurantSummary from './Meals/RestaurantSummary';
import Meals from './Meals/Meals';
function App() {
  const [showCart, setShowCart] = useState(false);
  const showCartHandler=()=>{
  setShowCart(true);
  }
  const hideCartHandler=()=>{
    setShowCart(false);
  }
  return (
    <div className='main-div'>
      {showCart && <Cart onClose={hideCartHandler}/>}
      <Header onShow={showCartHandler}/>
     <main>
      <Meals/>
     </main>  
    </div>
  );
}

export default App;

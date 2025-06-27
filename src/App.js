import logo from './logo.svg';
import './App.css';
import Cart from './Cart/Cart';
import Header from "./Layout/Header";
import RestaurantSummary from './Meals/RestaurantSummary';
import Meals from './Meals/Meals';
function App() {
  return (
    <div className='main-div'>
      <Cart/>
      <Header/>
     <main>
      <Meals/>
     </main>  
    </div>
  );
}

export default App;

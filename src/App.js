import logo from './logo.svg';
import './App.css';
import Header from "./Layout/Header";
import RestaurantSummary from './Meals/RestaurantSummary';
import Meals from './Meals/Meals';
function App() {
  return (
    <div className='main-div'>
      <Header/>
     <main>
      <Meals/>
     </main>  
    </div>
  );
}

export default App;

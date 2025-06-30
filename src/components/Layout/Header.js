import {React, Fragment} from "react";
import "./Header.css"; // make sure to import the CSS
import meals from "../../assets/meals.jpg"
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
    <header className="header">
      <h1 className="logo">ReactMeals</h1>
      <HeaderCartButton onShow={props.onShow}/>
    </header>
    <div className="mealsImg">
        <img src={meals}/>
    </div>
    </Fragment>
  );
};

export default Header;

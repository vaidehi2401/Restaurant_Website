import React from "react";
import MealItemForm from "./MealItemForm";
import "./MealItem.css";

const MealItem = (props) => {
  return (
    <li className="meal-item">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">${props.price}</div>
      </div>
      <MealItemForm id={props.id} name={props.name} price={props.price} className="meal-form"/>
    </li>
  );
};

export default MealItem;

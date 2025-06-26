import React from "react";
import "./MealItem.css"; // Optional if you have specific styling
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  return (
    <li className="meal-item">
      <div>
        <h3>{props.name}</h3>
        <p className="description">{props.description}</p>
        <p className="price">{props.price}</p>
      </div>
      <div>
      <MealItemForm/>
      </div>
    </li>
  );
};

export default MealItem;

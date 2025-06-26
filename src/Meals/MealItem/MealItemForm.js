import React from "react"; 
import Input from "../../UI/Input";
import "./MealItemForm.css";

const MealItemForm = () => {
  return (
    <form className="meal-item-form">
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: 1,
          max: 5,
          defaultValue: 1,
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;

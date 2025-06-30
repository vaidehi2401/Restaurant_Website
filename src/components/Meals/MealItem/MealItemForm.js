import React, { useRef, useContext } from "react";
import Input from "../../UI/Input";
import "./MealItemForm.css";
import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {
  const amountRef = useRef();
  const cartCtx = useContext(CartContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = +amountRef.current.value;

    const item = {
      id: props.id,
      name: props.name,
      price: props.price,
      amount: enteredAmount,
    };

    cartCtx.addItem(item);
  };

  return (
    <form className="meal-item-form" onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          ref: amountRef,
          id: "amount_" + props.id,
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

import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
const addItemToCartHandler = (item) => {
  setItems((prevItems) => {
    const existingItemIndex = prevItems.findIndex((i) => i.id === item.id);
    const existingItem = prevItems[existingItemIndex];

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + item.amount,
      };

      const updatedItems = [...prevItems];
      updatedItems[existingItemIndex] = updatedItem;
      return updatedItems;
    } else {
      return [...prevItems, item];
    }
  });
};

const removeItemCartHandler = (id) => {
  setItems((prevItems) => {
    const existingItemIndex = prevItems.findIndex(item => item.id === id);
    const existingItem = prevItems[existingItemIndex];

    if (!existingItem) return prevItems;

    if (existingItem.amount === 1) {
      return prevItems.filter(item => item.id !== id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      const updatedItems = [...prevItems];
      updatedItems[existingItemIndex] = updatedItem;
      return updatedItems;
    }
  });
};

  const totalAmount = items.reduce((acc, item) => acc + item.amount, 0);

  const cartContext = {
    items,
    totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

import React from "react";
import "./AvailableMeals.css";

const AvailableMeals = () => {
  const meals = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies rolled in rice",
      price: "$22.99",
    },
    {
      id: "m2",
      name: "Margherita Pizza",
      description: "Classic pizza with tomato, basil, and mozzarella",
      price: "$15.49",
    },
    {
      id: "m3",
      name: "Grilled Chicken",
      description: "Juicy grilled chicken with herbs and spices",
      price: "$17.99",
    },
    {
      id: "m4",
      name: "Veggie Delight",
      description: "Fresh seasonal vegetables sautéed in olive oil",
      price: "$12.50",
    },
    {
      id: "m5",
      name: "Spaghetti Bolognese",
      description: "Traditional Italian pasta with meat sauce",
      price: "$14.25",
    },
    {
      id: "m6",
      name: "Tandoori Paneer",
      description: "Spiced and grilled Indian cottage cheese cubes",
      price: "$13.75",
    },
    {
      id: "m7",
      name: "Chicken Caesar Salad",
      description: "Grilled chicken with romaine, croutons, and Caesar dressing",
      price: "$11.99",
    },
    {
      id: "m8",
      name: "Cheeseburger",
      description: "Beef patty with cheese, lettuce, tomato, and onions",
      price: "$10.49",
    },
  ];

  return (
    <section className="meals">
      <ul>
        {meals.map((meal) => (
          <li key={meal.id} className="meal-item">
            <div>
              <h3>{meal.name}</h3>
              <p className="description">{meal.description}</p>
              <p className="price">{meal.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AvailableMeals;

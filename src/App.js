import React, { useState } from "react";
import "./styles.css";

var foodDictionary = {
  sweets: [
    {
      dishName: "Gulab Jamun",
      place: "Chaturbujh Rameshchandra, Inside City",
      rating: "4/5"
    },
    {
      dishName: "Rabri Ghevar",
      place: "Mohan Ji Sweets, Inside City",
      rating: "5/5"
    },
    {
      dishName: "Prem Pyala",
      place: "Vijay Restaurant, Inside City",
      rating: "5/5"
    }
  ],
  snacks: [
    {
      dishName: "Mirchibada",
      place: "Chowdhay Namkeen, B-Road",
      rating: "4/5"
    },
    { dishName: "Samosa", place: "Shahi Samosa, Sardar Market", rating: "4/5" }
  ],
  jodhpuriSpecial: [
    {
      dishName: "Gulab Jamun Sabzi",
      place: "Vijay Restaurant, Inside City",
      rating: "5/5"
    },
    {
      dishName: "Jodhpuri Kabuli, Inside City",
      place: "Vijay Restaurant",
      rating: "5/5"
    }
  ]
};

var category = Object.keys(foodDictionary);

export default function App() {
  var [selectedCategory, setCategory] = useState("sweets");

  function categoryClickHandler(category) {
    setCategory(category);
  }

  return (
    <div className="App">
      <div class="main-div">
        <h1>
          <span role="img" aria-label="emoji name">
            🍨
          </span>{" "}
          goodfood
        </h1>
        <p>
          If in Jodhpur, don't miss out on these. Checkout my favorite places
          for a specific dish. Select a category to get started...
        </p>

        <div>
          {category.map((category) => (
            <button
              class="category-btn"
              onClick={() => categoryClickHandler(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <hr />

        <div>
          <ul>
            {foodDictionary[selectedCategory].map((food) => (
              <li class="food-list">
                <div class="dish-name"> {food.dishName} </div>
                <div> {food.place} </div>
                <div class="dish-rating"> {food.rating} </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

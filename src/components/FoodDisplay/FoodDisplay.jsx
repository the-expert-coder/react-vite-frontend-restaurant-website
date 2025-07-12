import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import banner_img from "../../assets/banner_img.png"; // ✅ Banner image

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      {/* ✅ Banner Image */}
      <img src={banner_img} alt="banner" className="food-display-banner" />

      <h2>Top Dishes Near You</h2>

      {/* ✅ Food Cards */}
      <div className="food-display-list">
        {food_list
          .filter((item) => category === "All" || category === item.category)
          .slice(0, 8)
          .map((item, index) => (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
      </div>

      {/* ✅ Review Section */}
      <div className="review-section">
        <h2>What Our Customers Say</h2>
        <div className="review-cards">
          <div className="review-card">
            <p className="review-name">Amit</p>
            <div className="review-rating">⭐⭐⭐⭐⭐</div>
            <p className="review-text">
              Amazing taste and quick delivery. Highly recommended!
            </p>
          </div>
          <div className="review-card">
            <p className="review-name">Sneha</p>
            <div className="review-rating">⭐⭐⭐⭐</div>
            <p className="review-text">
              Delicious food and great packaging. Would order again.
            </p>
          </div>
          <div className="review-card">
            <p className="review-name">Rahul</p>
            <div className="review-rating">⭐⭐⭐⭐⭐</div>
            <p className="review-text">
              Best food experience I've had online!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDisplay;

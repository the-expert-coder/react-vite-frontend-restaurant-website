// FoodItem.jsx
import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({
  id,
  name,
  description,
  price,
  image,
  rating = "4.0",
  offer = "50% OFF",
  eta = "42 min",
}) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} alt={name} className="food-item-img" />
        {/* <span className="offer-badge">{offer}</span> */}

        {/* ADD button logic */}
        {!cartItems[id] ? (
          <img
            src={assets.add_icon_white}
            alt="add_icon_white"
            className="add"
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              alt="remove_icon_red"
              onClick={() => removeFromCart(id)}
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              alt="add_icon_green"
              onClick={() => addToCart(id)}
            />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-title">
          <p className="food-item-name">{name}</p>
          <span className="rating-badge">{rating}★</span>
        </div>
        <p className="food-item-desc">{description}</p>
        <div className="food-item-meta">
          <p className="food-item-price">₹{price} for one</p>
          <p className="food-item-eta">{eta}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;

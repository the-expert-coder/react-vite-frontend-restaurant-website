import React from "react";
import "./ExploreMenu.css";
import { food_list, menu_list } from "../../assets/assets";
import FoodItem from "../FoodItem/FoodItem";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
      </p>

      {/* 🔶 Category list (Quick Links) */}
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            key={index}
            className="explore-menu-list-item"
            onClick={() =>
              setCategory((prev) => (prev === item.menu_name ? "All" : item.menu_name))
            }
          >
            <img
              src={item.menu_image}
              className={category === item.menu_name ? "active" : ""}
              alt={item.menu_name}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>

      <hr />

      {/* 🔶 PROMO BOXES SECTION */}
      <div className="promo-section">
        <div className="promo-card promo-wide" style={{ backgroundImage: `url("https://b.zmtcdn.com/data/pictures/5/20061475/51e2e8230a40752b7018f7367fa13dfa_o2_featured_v2.jpg")` }}>
          <div className="promo-text">
            <p>Try It Today</p>
            <h3>Most Popular Pizza</h3>
          </div>
        </div>
        <div className="promo-card" style={{ backgroundImage: `url("https://b.zmtcdn.com/data/pictures/3/19750683/987d86719049d6c9aa9667ae9ad9d2bc_o2_featured_v2.jpg")` }}>
          <div className="promo-text">
            <p>Try It Today</p>
            <h3>More Fun More Taste</h3>
          </div>
        </div>
        <div className="promo-card" style={{ backgroundImage: `url("https://b.zmtcdn.com/data/pictures/7/20460657/3849aafaeafdfa733f23f7e70fb608ab_o2_featured_v2.jpg")` }}>
          <div className="promo-text">
            <p>Try It Today</p>
            <h3>Fresh And Chilli</h3>
          </div>
        </div>
      </div>

      {/*  POPULAR ITEMS SECTION */}
      <h2 className="popular-title">Popular Near You</h2>
      <div className="popular-food-list">
        {food_list.slice(0, 8).map((item, index) => (
          <FoodItem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;

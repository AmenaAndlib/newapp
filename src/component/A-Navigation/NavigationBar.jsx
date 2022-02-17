import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../E-Landing/Landing.css";

const NavigationBar = (setText) => {
  const cartItems = useSelector((state) => state.productsReducer.cart);
  return (
    <div className="brows2">
      <Link to="" style={{ paddingLeft: "200px" }}>
        ReduxApp
      </Link>
      <input
        type="search"
        placeholder="search"
        style={{}}
        onChange={(e) => setText(e.target.value)}
      />
      <button>search</button>
      <Link to="/cart" style={{ padding: "150px" }}>
        Cart:{cartItems.length}
      </Link>
    </div>
  );
};

export default NavigationBar;

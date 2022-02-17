import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ProductsCard = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="brows1">
      <img src={item.image} width="250px" height="250px" alt="" />
      <h3>{item.title.slice(0, 20) + "..."}</h3>
      <h3>price: $ {item.price}</h3>
      <button onClick={() => dispatch({ type: "Add-Cart", data: item })}>
        Add to Cart
      </button>
      <Link to="/details">
        <button onClick={() => dispatch({ type: "Selected-Item", data: item })}>
          View Details
        </button>
      </Link>
    </div>
  );
};

export default ProductsCard;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartItem = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.productsReducer.cart);
  console.log(cartItem);
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {cartItem.map((item) => {
        return (
          <div className="brows3">
            <img src={item.image} width="250px" height="250px" alt="" />
            <h3>{item.title.slice(0, 20) + "..."}</h3>
            <h4>price: $ {item.price}</h4>
            <Link to="/details">
              <button>View Details</button>
            </Link>
            <button
              onClick={() => dispatch({ type: "Remove-Item", data: item })}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CartItem;

import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductsDetails = () => {
  const dispatch = useDispatch();
  const itemDetail = useSelector((state) => state.productsReducer.details);
  console.log("details---->", itemDetail);
  return (
    <div>
      {itemDetail.map((item) => {
        return (
          <div>
            <img src={item.image} width="250px" height="250px" alt="" />
            <h3>{item.title.slice(0, 20) + "..."}</h3>
            <h3>price: $ {item.price}</h3>
            <button onClick={() => dispatch({ type: "Add-Cart", data: item })}>
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsDetails;

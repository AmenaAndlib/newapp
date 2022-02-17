import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductsCard from "./ProductsCard";
import { useDispatch, useSelector } from "react-redux";

const ProductsList = ({ text }) => {
  const allProducts = useSelector((state) => state.productsReducer.products);
  const [products, SetProducts] = useState([]);
  const dispatch = useDispatch();
  console.log(products);
  const getProducts = async () => {
    const apiData = await axios.get("https://fakestoreapi.com/products");
    console.log("apiData=====>", apiData);
    allProducts.length === 0 &&
      dispatch({ type: "Add-Products", data: apiData.data });
    SetProducts(apiData.data);
  };
  useEffect(() => {
    const filtered = allProducts.filter((item) =>
      item.title.tolowerCase().includes(text.tolowerCase())
    );
    SetProducts(filtered);
  }, [text]);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((item) => {
        return <ProductsCard item={item} />;
      })}
    </div>
  );
};

export default ProductsList;

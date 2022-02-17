import React, { useState } from "react";
import NavigationBar from "../A-Navigation/NavigationBar";
import ProductsList from "../B-Product/ProductsList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartItem from "../C-Cart/CartItem";
import ProductsDetails from "../D-Details/ProductsDetails";
import "./Landing.css";

const Landing = () => {
  const [text, setText] = useState("");
  return (
    <div className="brows">
      <BrowserRouter>
        <NavigationBar setText={setText} />
        <Routes>
          <Route path="/" element={<ProductsList text={text} />} />
          <Route path="/cart" element={<CartItem />} />
          <Route path="/details" element={<ProductsDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Landing;

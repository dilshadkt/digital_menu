import React from "react";
import { CartProvider } from "../context/CartContext";
import { ProductProvider } from "../context/ProductContext";
import { Route, Routes } from "react-router-dom";
import ListLayout from "../layouts/ListLayout";
import ListPage from "../pages/ListPage";
import HomePage from "../pages/home";

const AppRoutes = () => {
  return (
    <CartProvider>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lists" element={<ListLayout />}>
            <Route index element={<ListPage />} />
          </Route>
        </Routes>
      </ProductProvider>
    </CartProvider>
  );
};

export default AppRoutes;

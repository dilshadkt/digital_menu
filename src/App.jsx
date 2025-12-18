import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListLayout from "./layouts/ListLayout";
import ListPage from "./pages/ListPage";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;

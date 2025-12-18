import React from "react";
import { Outlet } from "react-router-dom";
import Cart from "../components/Cart";
import MobileNavBar from "../components/MobileNavBar";
import Sidebar from "../components/Sidebar";
import CartModal from "../components/CartModal";

const ListLayout = () => {
  return (
    <main className="flex-1 max-w-[1680px] mx-auto font-inter bg-primary h-screen overflow-hidden flex">
      <Sidebar />
      <section className="flex-1 overflow-y-auto">
        <Outlet />
      </section>
      <Cart />
      {/* This will only view in mobile view   */}
      <MobileNavBar />
      <CartModal />
    </main>
  );
};

export default ListLayout;

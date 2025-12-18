import React from "react";
import ListCard from "../../components/shared/ListCard";
import { useCart } from "../../context/useCart";
import { useProduct } from "../../context/useProduct";
import OrderTypeFilter from "../../components/OrderFIlter";
import EmptyScreen from "./EmptyScreen";

const ProductLists = () => {
  const { isCartOpen } = useCart();
  const { products } = useProduct();

  const gridClasses = isCartOpen
    ? "md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4"
    : "md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5";

  // show emplty screen if there has no product
  if (!products || products.length === 0) return <EmptyScreen />;

  return (
    <div
      className="w-full h-full  
    overflow-y-auto flex flex-col gap-y-3"
    >
      <div className="hidden md:flex items-center justify-between">
        <h4 className="md:text-lg font-medium">Choose Dishes</h4>
        <OrderTypeFilter />
      </div>
      <div
        className={`grid grid-cols-2  sm:grid-cols-2 pb-28 md:pb-0
        ${gridClasses} md:pr-3 h-fit overflow-y-auto gap-2 md:gap-4`}
      >
        {products.map((food) => (
          <ListCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default ProductLists;

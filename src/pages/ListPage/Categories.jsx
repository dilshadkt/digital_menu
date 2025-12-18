import React from "react";
import { DUMMY_CATEGORY } from "../../constants";
import { useProduct } from "../../context/useProduct";

const Categories = () => {
  const { category, setCategory } = useProduct();
  return (
    <div
      className="flex items-center gap-x-1 md:gap-x-7  text-sm font-medium
     md:border-b border-[#393c49]"
    >
      {DUMMY_CATEGORY.map((item, index) => (
        <button
          onClick={() => setCategory(item)}
          className={`pb-3 pt-3 md:pt-0 px-3 md:px-0 rounded-lg md:rounded-none cursor-pointer text-xs md:text-[15px] hover:text-btn
           md:border-b-[3px] bg-secondary md:bg-transparent  hover:border-btn ${
             category === item
               ? "border-btn text-btn"
               : "border-transparent text-white/60"
           }`}
          key={index}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Categories;

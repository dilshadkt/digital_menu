import React from "react";
import Header from "./Header";
import Categories from "./Categories";
import ProductLists from "./ProductLists";

const ListPage = () => {
  return (
    <div className=" p-2 md:p-4 flex gap-y-4 h-full flex-col text-slate-50">
      <Header />
      <Categories />
      <ProductLists />
    </div>
  );
};

export default ListPage;

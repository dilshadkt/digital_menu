import { createContext, useMemo, useState } from "react";
import { DUMMY_CATEGORY, DUMMY_PRODUCTS } from "../constants";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [allProducts] = useState(DUMMY_PRODUCTS);

  // FIlteres
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [orderType, setOrderType] = useState("All");

  // Filterd products
  const products = useMemo(() => {
    let result = [...allProducts];

    if (category != "All") {
      result = allProducts.filter((product) => product.category === category);
    }

    if (orderType !== "All") {
      result = result.filter((product) =>
        product.orderType.includes(orderType)
      );
    }

    if (search) {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    return result;
  }, [category, search, orderType]);

  const value = {
    products,
    category,
    setCategory,
    search,
    setSearch,
    orderType,
    setOrderType,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

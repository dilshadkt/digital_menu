import { createContext, useMemo, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // add to cart
  const addToCart = (product, { size = null, orderType }) => {
    const price = size ? product.pricing[size].price : product.price;

    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) =>
          item.productId === product.id &&
          item.size === size &&
          item.orderType === orderType
      );
      if (existingItem) {
        return prev.map((item) =>
          item === existingItem
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          productId: product.id,
          name: product.name,
          image: product.image,
          size,
          orderType,
          price,
          quantity: 1,
        },
      ];
    });
  };

  // remove from cart
  const removeFromCart = (product, size, orderType) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (
            item.productId === product.productId &&
            item.size === size &&
            item.orderType === orderType
          ) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  // clear cart
  const clearCart = () => {
    setCartItems([]);
  };

  // total amount
  const totalAmount = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  const value = {
    isCartOpen,
    setCartOpen,
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    totalAmount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

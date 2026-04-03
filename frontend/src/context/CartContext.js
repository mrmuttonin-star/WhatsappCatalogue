import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if same item with same add-ons exists
      const addonIds = (product.addons || [])
        .map((a) => a.id)
        .sort()
        .join(",");
      const existingItem = prevCart.find((item) => {
        const itemAddonIds = (item.addons || [])
          .map((a) => a.id)
          .sort()
          .join(",");
        return item.product_id === product.id && itemAddonIds === addonIds;
      });

      if (existingItem) {
        // Increase quantity of existing item
        return prevCart.map((item) => {
          const itemAddonIds = (item.addons || [])
            .map((a) => a.id)
            .sort()
            .join(",");
          return item.product_id === product.id && itemAddonIds === addonIds
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item;
        });
      }

      //  Add new item
      return [
        ...prevCart,
        {
          product_id: product.id,
          name: product.name,
          price: product.price,
          quantity: product.quantity || 1,
          image: product.image,
          addons: Array.isArray(product.addons) ? product.addons : [],
        },
      ];
    });
  };

  const removeFromCart = (productId, addons = []) => {
    const addonIds = addons
      .map((a) => a.id)
      .sort()
      .join(",");

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => {
        const itemAddonIds = (item.addons || [])
          .map((a) => a.id)
          .sort()
          .join(",");
        return item.product_id === productId && itemAddonIds === addonIds;
      });

      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map((item) => {
          const itemAddonIds = (item.addons || [])
            .map((a) => a.id)
            .sort()
            .join(",");
          return item.product_id === productId && itemAddonIds === addonIds
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        });
      }

      return prevCart.filter((item) => {
        const itemAddonIds = (item.addons || [])
          .map((a) => a.id)
          .sort()
          .join(",");
        return !(item.product_id === productId && itemAddonIds === addonIds);
      });
    });
  };

  const getItemQuantity = (productId) => {
    const item = cart.find((item) => item.product_id === productId);
    return item ? item.quantity : 0;
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalAmount = () => {
    return cart.reduce((total, item) => {
      const itemTotal = item.price * item.quantity;
      const addonsTotal = (item.addons || []).reduce(
        (sum, addon) => sum + addon.price * item.quantity,
        0,
      );
      return total + itemTotal + addonsTotal;
    }, 0);
  };

  const getItemsSubtotal = () => {
    return getTotalAmount(); // Items + addons total
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        getItemQuantity,
        getTotalItems,
        getTotalAmount,
        getItemsSubtotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

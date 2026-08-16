import React, { createContext, useContext, useState } from "react";
import ShoppingCart from "./ShoppingCart";

const CartContext = createContext();

function Products() {
  const { addToCart } = useContext(CartContext);

  const products = [
    { name: "Widget", price: 19.99 },
    { name: "Gadget", price: 29.99 },
  ];

  return (
    <>
      {products.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>

          <button onClick={() => addToCart(item)}>
            Add to Cart
          </button>

          <br />
          <br />
        </div>
      ))}
    </>
  );
}

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      <div>
        <Products />

        <ShoppingCart
          cart={cart}
          removeFromCart={removeFromCart}
        />
      </div>
    </CartContext.Provider>
  );
}
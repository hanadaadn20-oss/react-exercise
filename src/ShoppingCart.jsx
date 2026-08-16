import React, { useContext } from "react";

export default function ShoppingCart({ cart, removeFromCart }) {
  return (
    <>
      <h1>Shopping Cart</h1>

      <p>Total Items: {cart.length}</p>

      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}

            <button onClick={() => removeFromCart(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
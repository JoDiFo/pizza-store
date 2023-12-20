import React from "react";

import { useSelector } from "react-redux";

import { EmptyCart, LoadedCart } from "../components";

function Cart({ pizzas }) {
  const pizzaCounter = useSelector((state) => state.pizzaCounter.value);

  return (
    <div className="content">
      <div className="container container--cart">
        {pizzaCounter.pizzas.length === 0 ? (
          <EmptyCart />
        ) : (
          <LoadedCart pizzas={pizzas} />
        )}
      </div>
    </div>
  );
}

export default Cart;

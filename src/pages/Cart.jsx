import React from "react";

import { useSelector } from "react-redux";

import { EmptyCart, LoadedCart } from "../components";

function Cart({ pizzas }) {
  const pizzaStorage = useSelector((state) => state.pizzaStorage.value);

  return (
    <div className="content">
      <div className="container container--cart">
        {pizzaStorage.totalCount === 0 ? (
          <EmptyCart />
        ) : (
          <LoadedCart pizzas={pizzas} />
        )}
      </div>
    </div>
  );
}

export default Cart;

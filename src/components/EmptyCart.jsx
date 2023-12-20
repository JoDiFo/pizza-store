import React from "react";

import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="cart cart--empty">
      <h2>
        Корзина пустая <icon>😕</icon>
      </h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src="/img/empty-cart.png" alt="Empty cart" />
      <Link to="/">
        <div className="button button--black">
          <span>Вернуться назад</span>
        </div>
      </Link>
    </div>
  );
}

export default EmptyCart;

import React from "react";

import { Categories, SortPopup, PizzaBlock } from "../components";

import { useSelector } from "react-redux";

function Home({ pizzas }) {
  const filter = useSelector((state) => state.filter.value);

  const categoryItems = [
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const sortItems = ["популярности", "цене", "алфавиту"];

  switch (filter.sortBy) {
    case "popularity":
      pizzas.sort((a, b) => b.rating - a.rating);
      break;
    case "price":
      pizzas.sort((a, b) => a.price - b.price);
      break;
    case "alphabet":
      pizzas.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      });
      break;
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categoryItems} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items--home">
        {pizzas &&
          pizzas.map(
            (pizza) =>
              (filter.category === pizza.category ||
                filter.category === null) && (
                <PizzaBlock key={pizza.id} {...pizza} />
              )
          )}
      </div>
    </div>
  );
}

export default Home;

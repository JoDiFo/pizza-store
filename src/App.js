import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { setStorage } from "./redux/pizzaStorageSlice";

import { Header } from "./components";
import { Home, Cart } from "./pages";

function App() {
  const [pizzas, setPizzas] = useState([]);

  const pizzaStorage = useSelector((state) => state.pizzaStorage.value);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      setPizzas(data.pizzas);
    });

    dispatch(setStorage(JSON.parse(localStorage.getItem("cartData"))));
  }, []);

  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("cartData", JSON.stringify(pizzaStorage));
    });
  }, [pizzaStorage]);

  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home pizzas={pizzas} />} />
        <Route path="/cart" element={<Cart pizzas={pizzas} />} />
      </Routes>
    </div>
  );
}

export default App;

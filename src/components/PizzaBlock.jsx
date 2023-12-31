import React, { useState } from "react";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { addPizza } from "../redux/pizzaStorageSlice";

function PizzaBlock({ id, imageUrl, name, types, sizes, price }) {
  const availableTypes = ["тонкое", "традиционное"];
  const availableSizes = [26, 30, 40];

  const [selectedType, setSelectedType] = useState(types[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const pizzaStorage = useSelector((state) => state.pizzaStorage.value);

  const dispatch = useDispatch();

  const onSelectType = (index) => {
    setSelectedType(index);
  };

  const onSelectSize = (index) => {
    setSelectedSize(availableSizes[index]);
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {availableTypes.map((type, index) => (
            <li
              key={`${type}_${index}`}
              onClick={() => onSelectType(index)}
              className={classNames({
                active: selectedType === index,
                disabled: !types.includes(index),
              })}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {availableSizes.map((size, index) => (
            <li
              key={`${size}_${index}`}
              onClick={() => onSelectSize(index)}
              className={classNames({
                active: selectedSize === size,
                disabled: !sizes.includes(size),
              })}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div
          className="button button--outline button--add"
          onClick={() => {
            dispatch(
              addPizza({
                id: id,
                price: price,
                type: selectedType,
                size: selectedSize,
              })
            );
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>{pizzaStorage.pizzas[id] || 0}</i>
        </div>
      </div>
    </div>
  );
}

export default PizzaBlock;

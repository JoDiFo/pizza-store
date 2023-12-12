import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { setCategory } from "../redux/filter";

function Categories({ items }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const dispatch = useDispatch();

  const selectItem = (item) => {
    setSelectedItem(item);
    dispatch(setCategory(item));
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={selectedItem === null ? "active" : ""}
          onClick={() => selectItem(null)}
        >
          Все
        </li>
        {items &&
          items.map((item, index) => (
            <li
              key={`${item}_${index}`}
              className={selectedItem === index ? "active" : ""}
              onClick={() => selectItem(index)}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;

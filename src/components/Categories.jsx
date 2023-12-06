import React, { useState } from "react";

function Categories({ items }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const selectItem = (item) => {
    setSelectedItem(item);
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

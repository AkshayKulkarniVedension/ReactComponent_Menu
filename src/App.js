import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menu, setMenu] = useState(items);

  const filterItems = (category) => {
    if (category === "All") {
      setMenu(items);
      return;
    }

    const filteredItems = items.filter(function (item) {
      if (category === item.category) {
        return item;
      }
    });
    setMenu(filteredItems);
    console.log(filteredItems);
  };

  return (
    <div className="menu">
      <h2 className="title">Our Menu</h2>
      <div className="underline"></div>
      <div className="btn-container"></div>
      <Categories items={items} filterItems={filterItems}></Categories>
      <Menu items={menu}></Menu>
    </div>
  );
}

export default App;

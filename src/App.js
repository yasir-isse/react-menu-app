import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

// generate unique values from items data with Set, then spread it into the array
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterMenu = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    } else {
      const newMenu = items.filter((item) => item.category === category);
      setMenuItems(newMenu);
    }
  };

  return (
    <main>
      <section className="menu">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categoriesList={categories} handleFilter={filterMenu} />
        <Menu data={menuItems} />
      </section>
    </main>
  );
}

export default App;

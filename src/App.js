import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import "../src/components/loader.css";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

//one category for all, and then create one with sread operator for each unique value (each category)
//UNIQUE VALUES from javascript: new Set. It only get the unique values
//It is somewhat similar to an array but it does not allow us to store duplicate values.
//any time a new categorie is added it will be shown in the app

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const [loading, setLoading] = useState(true);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <AnimatePresence>
      {loading === false ? (
        <main>
          <section className="menu section">
            <div className="title">
              <h2>Menu</h2>
              <div className="underline"></div>
            </div>
            <Categories categories={categories} filterItems={filterItems} />
            <Menu items={menuItems} />
          </section>
        </main>
      ) : (
        <motion.div key="loader">
          <Loader setLoading={setLoading} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;

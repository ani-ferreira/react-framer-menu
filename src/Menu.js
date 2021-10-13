import React from "react";
import { motion } from "framer-motion";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <motion.article
            key={id}
            className="menu-item"
            whileHover={{
              position: "relative",
              zIndex: 1,
              background: "#1a1a1a",
              scale: 1.2,
              transition: { duration: 0.2 },
            }}
          >
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
};

export default Menu;

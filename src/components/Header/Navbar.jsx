import React from "react";
import { categories } from "../../helper/data";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="menu">
      <div className="buttons">
        {categories.map((categories) => (
            <button key={categories}>{categories.toUpperCase()}</button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

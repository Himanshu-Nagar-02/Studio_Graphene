import React from "react";
import classes from "./SubHeader.module.css";
function SubHeader() {
  const navbar = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    {
      name: "Our Products",
      id: "product",
    },
    { name: "Contact Us", id: "contact" },
  ];
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.logo}>
          <a href="index.html" style={{fontSize:"30px", fontFamily:"Poppins", textDecoration:"none", fontWeight:"275"}}>ShopKart</a>
        </div>
        <input
          type="checkbox"
          id="menu-toggle"
          className={classes.menuToggle}
        />
        <label for="menu-toggle" className={classes.menuIcon}>
          &#9776;
        </label>
        <label for="menu-toggle" className={classes.menuIconClose}>
          &#x2715;
        </label>
        <ul className={classes.menu}>
          {navbar?.map((nav) => (
            <li className={classes.menuItem}>
              <a href="#">{nav.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default SubHeader;

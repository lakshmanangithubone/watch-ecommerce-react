import React, { useContext, useState } from "react";

import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";

import { NavLink } from "react-router-dom";

import { ShopContext } from "../context/ShopContext";

const Navbar = ({ changeTheme, currentTheme }) => {
  const { j } = useContext(ShopContext);

  const [scroll, setScroll] = useState(false);

  const [showSideNavbar, setShowSideNavbar] = useState(false);

  // console.log(productsCount);

  function scrollHeader() {
    if (this.scrollY >= 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }

  window.addEventListener("scroll", scrollHeader);

  return (
    <div className={scroll ? "nav scrolled" : "nav"}>
      <div className="left">
        <NavLink to="/" style={{ textDecoration: "none" }} className="logo">
          <i className="bx bxs-watch nav__logo-icon"></i>
          <h2>ROLEX</h2>
        </NavLink>
        <ul className={showSideNavbar ? "ul show" : "ul"}>
          <NavLink
            to="/"
            style={{ textDecoration: "none" }}
            className={({ isActive }) => {
              return isActive ? "li highlight" : "li";
            }}
          >
            HOME
          </NavLink>
          <NavLink
            to="/products"
            style={{ textDecoration: "none" }}
            className={({ isActive }) => {
              return isActive ? "li highlight" : "li";
            }}
          >
            PRODUCTS
          </NavLink>
          <NavLink
            to="/login"
            style={{ textDecoration: "none" }}
            className={({ isActive }) => {
              return isActive ? "li highlight" : "li";
            }}
          >
            LOGIN
          </NavLink>

          <div className="close-btn" onClick={() => setShowSideNavbar(false)}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </ul>
      </div>
      <div className="icons">
        {currentTheme === "dark" ? (
          <ImSun className="sun" onClick={changeTheme} />
        ) : (
          <BsFillMoonFill className="moon" onClick={changeTheme} />
        )}

        <NavLink
          to="/cart"
          style={{ textDecoration: "none" }}
          className={({ isActive }) => {
            return isActive ? "shopping-card highlight" : "shopping-card";
          }}
        >
          <i className="bx bx-shopping-bag"></i>
          <p className="count">{j}</p>
        </NavLink>
        <div className="menu-btn" onClick={() => setShowSideNavbar(true)}>
          <i className="bx bx-grid-alt"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

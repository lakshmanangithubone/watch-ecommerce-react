import React, { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Cart from "./Pages/Cart/Cart";
import Products from "./Pages/Products/Products";

import { ShopContextProvider } from "./context/ShopContext";

function App() {
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <div className="App" data-theme={theme}>
      <ShopContextProvider>
        <Router>
          <Navbar changeTheme={changeTheme} currentTheme={theme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;

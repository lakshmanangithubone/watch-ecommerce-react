import React, { useContext } from "react";

import { ShopContext } from "../../context/ShopContext";

import ProductsData from "../../ProductsData";

import CartItem from "./CartItem";

import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  // console.log(totalAmount);

  return (
    <div className="cart-section" id="cart-section">
      {totalAmount > 0 ? (
        <div className="cart-box">
          <div className="cart-header">
            <h2>product</h2>
            <h2>price</h2>
            <h2>quantity</h2>
          </div>
          <div className="cart-products">
            {ProductsData.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <CartItem data={product} />;
              }
            })}
          </div>
          <p className="total-div">
            Total:
            <span className="total">{totalAmount}</span>
          </p>
        </div>
      ) : (
        <div className="empty-notif">
          <p>your cart is empty</p>
          <button
            className="btn"
            onClick={() => {
              checkout();
              navigate("/products");
            }}
          >
            shop now
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;

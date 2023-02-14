import React, { useContext, useState } from "react";

import { ShopContext } from "../../context/ShopContext";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;

  const { addToCart, cartItems, removeFromCart } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  // console.log(Object.values(cartItems[id] > 0).length);

  return (
    <div className="product">
      <img src={productImage} alt="product1" />
      <h3>{productName}</h3>
      <p>
        $ <span> {price} </span>
      </p>

      {cartItems[id] !== 0 ? (
        <button
          onClick={() => removeFromCart(id)}
          className="i-div add-card-btn"
        >
          {/* <i class="bx bx-shopping-bag"></i> */}
          remove from card
        </button>
      ) : (
        <button onClick={() => addToCart(id)} className="i-div add-card-btn">
          {/* <i class="bx bx-shopping-bag"></i> */}
          add to card
        </button>
      )}
    </div>
  );
};

export default Product;

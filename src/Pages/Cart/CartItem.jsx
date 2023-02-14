import React, { useContext } from "react";

import { ShopContext } from "../../context/ShopContext";

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;

  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    removeProduct,
  } = useContext(ShopContext);

  //   console.log(productName);
  return (
    <div className="cart-product">
      <div className="first">
        <img src={productImage} alt="" />
        <p className="product-name">{productName}</p>
      </div>
      <p>
        $ <span className="price">{price}</span>
      </p>
      <div className="quantity-div">
        <div className="inner-div">
          <button className="minus" onClick={() => removeFromCart(id)}>
            -
          </button>
          <input
            className="quantity"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(+e.target.value, id)}
          />
          <button className="plus" onClick={() => addToCart(id)}>
            +
          </button>
        </div>
        <button className="remove-btn" onClick={() => removeProduct(id)}>
          remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;

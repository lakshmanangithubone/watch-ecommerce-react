import React from "react";

import product1 from "../../img/product1.png";
import product2 from "../../img/product2.png";
import product3 from "../../img/product3.png";

import ProductsData2 from "../../ProductsData2";

import Product from "../Products/Product";

import { useNavigate } from "react-router";

const ProductsSection = () => {
  const navigate = useNavigate();

  return (
    <div className="products-section">
      <h2>PRODUCTS</h2>

      <div className="products">
        {ProductsData2.map((prod, idx) => (
          <Product key={idx} data={prod} />
        ))}
      </div>

      <button onClick={() => navigate("/products")} className="products-btn">
        view all products
      </button>
    </div>
  );
};

export default ProductsSection;

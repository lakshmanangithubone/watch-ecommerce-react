import React from "react";
import ProductsData from "../../ProductsData";
import Product from "./Product";

const Products = () => {
  // console.log(ProductsData);
  return (
    <div className="products-main" id="products-main">
      <h1>products main section</h1>
      <div className="products">
        {ProductsData.map((prod, idx) => (
          <Product key={idx} data={prod} />
        ))}
      </div>
    </div>
  );
};

export default Products;

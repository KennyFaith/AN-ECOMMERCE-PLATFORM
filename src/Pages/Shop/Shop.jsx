// import React from 'react'
import "./Shop.css";
import { PRODUCTS } from "../../Products/";
import { ProductFunction } from "./ProductFunction.jsx";


const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1> KennyFaiths Tech Shop </h1>
      </div>

      <div className="products">
        
        {PRODUCTS.map((product) => (
          <ProductFunction data={product}/>
        ))}
      </div> 
    </div>
  );
};

export default Shop;

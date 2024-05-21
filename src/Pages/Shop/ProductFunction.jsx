// // import React from 'react'
// import { ShopContext } from "../../Context/ShopContext.jsx";
// import useContext from 'react';
// import "./Shop.css"

// export const ProductFunction = (props) => {
//     const { id, productName, price, productImage } = props.data;
//     const { addToCart } = useContext( ShopContext)
//   return (
//     <div className="product ">
//         <img src={productImage} />
//         <div className="description">
//             {/* <a href={`/product/${id}`} > */}
//             <p>
//                 <b> {productName} </b>
//             </p>
//             {/* </a> */}
//             <p> ${price}</p>
//         </div>
//         <button className="addToCartBttn" onClick={() => addToCart(id) }> Add To Cart </button>
//     </div>
//   )
// };

import { useContext } from "react"; // Import useContext from react
import { ShopContext } from "../../Context/ShopContext.jsx";
import "./Shop.css";

export const ProductFunction = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext); // Use useContext to access context
  const cartItemsAmount = cartItems[id];
  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemsAmount > 0 && <> ({cartItemsAmount}) </>}
      </button>
    </div>
  );
};

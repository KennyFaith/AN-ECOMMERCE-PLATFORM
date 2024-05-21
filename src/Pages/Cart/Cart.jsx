import React from "react";
import { useContext } from "react";
import { PRODUCTS } from "../../Products";
import { ShopContext } from "../../Context/ShopContext";
import { CartItem } from "./CartItem";
import "./Cart.css";

import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>My Cart Items</h1>
      </div>

      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      <div>
        {totalAmount > 0 ? (
          <div>
            <div className="checkouttext">
              <p>
                <b>Total: $ {totalAmount}</b>
              </p>
            </div>
            <div className="btns">
              <div className="btn1">
                <button onClick={() => navigate("/")}>Keep Shopping</button>
              </div>
              <div className="btn2">
                <button onClick={() => navigate("/Checkout")}>Checkout</button>
              </div>
            </div>
          </div>
        ) : (
          <h1>Oops!!!, Nothing Here...</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;

// import { useContext } from "react";
// import { ShopContext } from "../../Context/ShopContext";
// import { CartItem } from "./CartItem";
// import "./Cart.css";

// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const { cartItems, getTotalCartAmount } = useContext(ShopContext);
//   const totalAmount = getTotalCartAmount();

//   const navigate = useNavigate();
//   return (
//     <div className="cart">
//       <div>
//         <h1>My Cart Items</h1>
//       </div>

//       <div className="cartItems">
//         {Object.values(cartItems).map((cartItem) => {
//           // Check if quantity is greater than 0 to render the item
//           if (cartItem.quantity > 0) {
//             return <CartItem key={cartItem.id} data={cartItem} />;
//           }
//           return null; // Return null if quantity is 0
//         })}
//       </div>
//       <div>
//         {totalAmount > 0 ? (
//           <div>
//             <div className="checkouttext">
//               <p>
//                 <b>Total: $ {totalAmount}</b>
//               </p>
//             </div>
//             <div className="checkout">
//               <div className="checkout1">
//                 <button onClick={() => navigate("/")}>Keep Shopping</button>
//               </div>
//               <div className="checkout2">
//                 <button onClick={() => navigate("/Checkout")}>Checkout</button>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <h1>Oops!!!, Nothing Here...</h1>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;

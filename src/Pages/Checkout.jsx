// import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
// import { PRODUCTS } from "../../Products";
import { ShopContext } from "../Context/ShopContext";
// import { CartItem } from "./CartItem";
// import "./Cart.css";
import "./Checkout.css";

const Checkout = () => {
  const { cartItems, getTotalCartAmount, clearCart } = useContext(ShopContext); // Assuming useShopContext provides cartItems, getTotalCartAmount, and clearCart functions
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  //{ cartItems }

  // Function to handle checkout button click
  const handleCheckout = () => {
    // Perform checkout logic here (e.g., place order, redirect to payment gateway, etc.)
    // For now, let's just clear the cart
    clearCart();
    // Redirect to home page after checkout
    navigate("/");
  };

  return (
    <div className="checkoutformat">
      <div>
        <br />
        <h4>Mai_Checkout_Page</h4>
        <br />
      </div>
      <div>
        <form id="form">
          <div>
            <label>First Name:</label>
            <input
              className="checkout"
              type="text"
              name="firstName"
              // value={formData.firstName}
              // onChange={handleChange}
              // You can add other attributes like value, onChange, etc. here
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              className="checkout"
              type="text"
              name="lastName"
              // value={formData.lastName}
              // onChange={handleChange}
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              className="checkout"
              type="number"
              name="phoneNumber"
              // value={formData.phoneNumber}
              // onChange={handleChange}
            />
          </div>
          <div>
            <label>Email Address:</label>
            <input
              className="checkout"
              type="email"
              name="emailAddress"
              // value={formData.emailAddress}
              // onChange={handleChange}
            />
          </div>
          <div>
            <label>Contact Information:</label>
            <input
              className="checkout"
              type="text"
              name="contactInformation"
              // value={formData.contactInformation}
              // onChange={handleChange}
            />
          </div>
          <div>
            <label>Zip Code:</label>
            <input
              className="checkout"
              type="number"
              name="zipCode"
              // value={formData.zipCode}
              // onChange={handleChange}
            />
          </div>
        </form>
      </div>
      <div className="cart-items">
  {/* Render cart items */}
  {Object.values(cartItems).map((item) => (
    <div key={item.id} className="cart-item">
      {/* Render product name */}
      <div>{item.productName}</div>
      {/* Render product image */}
      <img src={item.productImage} alt={item.productName} />
      {/* Render price */}
      <div>${item.price}</div>
    </div>
  ))}
</div>

      <div className="total">
        <p>
          <b>Total: ${totalAmount}</b>
        </p>
      </div>
      <div className="twobtns">
        {/* Keep Shopping button */}
        <button className="btn3" onClick={() => navigate("/")}>
          Keep Shopping
        </button>
        <button className="btn4" type="submit" onClick={handleCheckout}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;

// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { ShopContext } from "../Context/ShopContext";
// // import { useContext } from "react"; // Assuming useShopContext is a custom hook to access context
// import "./Checkout.css";

// const Checkout = () => {
//   const { cartItems, getTotalCartAmount, clearCart } = useContext(ShopContext); // Assuming useShopContext provides cartItems, getTotalCartAmount, and clearCart functions
//   const totalAmount = getTotalCartAmount();
//   const navigate = useNavigate();

//   // Function to handle checkout button click
//   const handleCheckout = () => {
//     // Perform checkout logic here (e.g., place order, redirect to payment gateway, etc.)
//     // For now, let's just clear the cart
//     clearCart();
//     // Redirect to home page after checkout
//     navigate("/");
//   };

//   return (
//     <div className="checkout-container">
//       <h1>Checkout</h1>
//       <div className="cart-items">
//         {/* Render cart items */}
//         {Object.values(cartItems).map((item) => (
//           <div key={item.id} className="cart-item">
//             <div>{item.name}</div>
//             <div>{item.quantity}</div>
//             <div>${item.price}</div>
//           </div>
//         ))}
//       </div>
//       <div className="total">
//         <p>Total: ${totalAmount}</p>
//       </div>
//       <div className="checkout-buttons">
//         {/* Keep Shopping button */}
//         <button className="keep-shopping-btn" onClick={() => navigate("/")}>
//           Keep Shopping
//         </button>
//         {/* Checkout button */}
//         <button className="checkout-btn" onClick={handleCheckout}>
//           Checkout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Checkout;

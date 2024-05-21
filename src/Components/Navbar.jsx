// import React from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/cart">
          <ShoppingCart Size="32" color="white" />
        </Link>
        {/* <Link to="/Checkout"> Checkout </Link> */}
        <Link to="/Login"> <button className="nav-bar-btn"> LOGIN </button> </Link>
      </div>
    </div>
  );
};

export default Navbar;

// import React from 'react'
// import { ShoppingCart } from "@mui/icons-material";
// import { Link } from "react-router-dom";
// const Navbar = () => {
//   return (
//     <div className="navbar">
//       THE_NAVBAR
//       <div className="links">
//         <Link to={"/"}> Shop </Link>
//         <Link to={"/cart"}>
//           <ShoppingCart fontSize="32" />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

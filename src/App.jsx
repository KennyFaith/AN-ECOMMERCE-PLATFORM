import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Shop from "./Pages/Shop/Shop.jsx";
import ShopDetails from "./Pages/Shop/ShopDetails.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import ShopContextProvider from "./Context/ShopContext.jsx";
import Checkout from "./Pages/Checkout.jsx";
import Login from "./Pages/Login.jsx";

function App() {
  return (
    <div className="app">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/product/:id" element={<ShopDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;

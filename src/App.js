import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";
import useToken from "./useToken";
import "./App.css";

function App() {
  const { token, setToken } = useToken();
  const [cartItems, setCartItems] = useState([]);

  if (!token) {
    return <Login setToken={setToken} />;
  }

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home addToCart={addToCart} cartItems={cartItems} />}
          />
          <Route
            path="/product/:id"
            element={
              <ProductDetail cartItems={cartItems} addToCart={addToCart} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartItems }) => {
  return (
    <nav className="navbar">
      <div className="nav flex">
        <Link to={"/"}>
          <h2 className="logo">E-commerce</h2>
        </Link>
        <Link to={"/cart"}>
          <p className="cart-icon">CART {cartItems.length}</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

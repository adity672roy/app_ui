import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <Navbar cartItems={cartItems} />
      <h2 className="heading">Shopping Cart</h2>

      {cartItems && cartItems.length > 0 ? (
        <div>
          <div className="grid section">
            {cartItems.map((item) => (
              <div key={item.id} className="card">
                <Link to={`/product/${item.id}`}>
                  <img src={item.thumbnail} alt="" className="img" />
                  <div className="container">
                    <h4 className="title">{item.title}</h4>
                    <p className="price"> ${item.price}</p>
                  </div>
                </Link>
                <button onClick={() => removeFromCart(item.id)} className="btn">
                  Remove from Cart
                </button>
              </div>
            ))}
          </div>
          <h3 className="total">
            Total Price: $
            {cartItems.reduce((total, item) => total + item.price, 0)}
          </h3>
        </div>
      ) : (
        <p className="empty-cart">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;

// Dashboard.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Dashboard = ({ addToCart, cartItems }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPrice, setFilterPrice] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const api = await fetch("https://dummyjson.com/products?limit=100");
    const response = await api.json();
    setProducts(response.products);
    console.log(response.products);
  };

  const filteredProducts = products.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!filterPrice || p.price <= parseInt(filterPrice))
  );

  return (
    <div>
      <Navbar cartItems={cartItems} />
      <div className="flex home-container">
        <input
          className="input-box"
          type="text"
          placeholder="Search Products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          onChange={(e) => setFilterPrice(e.target.value)}
          className="sorting"
        >
          <option value="">sort</option>
          <option value="100">under $100</option>
          <option value="500">under $500</option>
          <option value="1000">under $1000</option>
          <option value="1500">under $1500</option>
        </select>
      </div>
      <div className="grid section">
        {filteredProducts.map((product) => (
          <div key={product.id} className="card">
            <Link to={`/product/${product.id}`}>
              <img src={product.thumbnail} alt="" className="img" />
              <div className="container">
                <h4 className="title">{product.title}</h4>

                <p className="price">${product.price}</p>
                <p className="discount">
                  Discount - {product.discountPercentage}%
                </p>
              </div>
            </Link>
            <div className="button">
              <button onClick={() => addToCart(product)} className="btn">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

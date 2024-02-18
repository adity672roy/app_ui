// src/ProductDetails.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const ProductDetails = ({ cartItems, addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleAddToCart = (event) => {
    event.preventDefault();
    if (product) {
      addToCart(product);
    }
  };

  return (
    <div>
      <Navbar cartItems={cartItems} />
      <h1 className="heading">Product Detail</h1>
      {product ? (
        <div className="grid detail-container">
          <div className="detail-left-side grid img-wrapper">
            {product.images.map((image, index) => (
              <div className="image-box" key={index}>
                <img
                  src={image}
                  alt={`Product ${index + 1}`}
                  className="detail-img  "
                />
              </div>
            ))}
          </div>

          <div className="detail-right-side">
            <h1 className="title">{product.title}</h1>
            <p className="brand">Brand : {product.brand}</p>
            <h1 className="price">${product.price}</h1>
            <p className="discount">Discount : {product.discountPercentage}%</p>
            <p className="rating">
              {product.rating} <span className="star">★</span>{" "}
            </p>
            <h3>Description :</h3>
            <p className="description">{product.description}</p>
            <div className="button">
              <button
                onClick={(event) => handleAddToCart(event)}
                className="btn"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;

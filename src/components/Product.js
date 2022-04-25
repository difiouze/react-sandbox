import React from "react";

const Product = ({ name, image, description, price }) => {
  return (
    <div className="card">
      <img className="product-image" src={image} alt="" />
      <h3>{name}</h3>
      <span>{description}</span>
      <span>Price: {price}$</span>
      <button>Buy product</button>
    </div>
  );
};

export default Product;

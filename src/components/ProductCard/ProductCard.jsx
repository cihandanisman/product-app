import React from "react";
import { products } from "../../helper/data";
import './ProductCard.css'

const ProductCard = () => {
  return (
    <div className="product-container">
      <div className="cards">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <div className="image">
              <img src={product.image} alt={product.category} height={"300px"} width={"200px"} />
            </div>
            <div className="price">
              <h3>{product.price} $</h3>
            </div>
            <div className="info">
              <h5>{product.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;

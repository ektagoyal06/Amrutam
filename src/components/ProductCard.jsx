// src/components/ProductCard.jsx
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4">
      <img src={product.image} alt={product.name} className="w-full h-36 object-cover rounded" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">{`₹ ${product.price} - ${product.volume}`}</p>
      <p className="text-yellow-500">{`${product.rating} ★ (${product.reviews} reviews)`}</p>
      <button className="mt-2 bg-blue-500 text-white py-1 px-4 rounded">Add to Cart</button>
    </div>
  );
};

export default ProductCard;

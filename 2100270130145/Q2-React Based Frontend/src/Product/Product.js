import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{product.productName}</h3>
          <p className="text-gray-700">
            <span className="font-bold">Company:</span> {product.company}
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Category:</span> {product.category}
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Price:</span> ${product.price}
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Rating:</span> {product.rating}
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Discount:</span> {product.discount}%
          </p>
          <p className={`font-bold ${product.availability === 'yes' ? 'text-green-600' : 'text-red-600'}`}>
            <span className="font-bold">Availability:</span> {product.availability}
          </p>
          {/* Add more details as needed */}
        </div>
      </div>
    </Link>
  );
};

export default Product;

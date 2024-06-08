import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ products }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {products.map((product, index) => (
      <Link to={`/product/${product.id}`} key={index}>
        <div className="bg-gradient-to-br from-gray-200 to-gray-400 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{product.productName}</h3>
            <p className="text-gray-700">
              Price: <span className="font-bold">${product.price}</span>
            </p>
            <p className="text-gray-700">
              Rating: <span className="font-bold">{product.rating}</span>
            </p>
            <p className="text-gray-700">
              Discount: <span className="font-bold">{product.discount}%</span>
            </p>
            <p className={`font-bold ${product.availability === 'yes' ? 'text-green-600' : 'text-red-600'}`}>
              Availability: <span>{product.availability}</span>
            </p>
          </div>
        </div>
      </Link>
    ))}
  </div>
);

export default Product;

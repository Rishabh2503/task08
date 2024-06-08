import React from 'react';

const Product = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out hover:shadow-lg"
        >
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">{product.productName}</h2>
            <p className="text-gray-700 mb-1">Price: ${product.price}</p>
            <p className="text-gray-700 mb-1">Rating: {product.rating}</p>
            <p className="text-gray-700 mb-1">Discount: {product.discount}%</p>
            <p className="text-gray-700 mb-1">Availability: {product.availability}</p>
          </div>
          <div className="bg-gray-200 p-4">
            <button className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300 ease-in-out">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
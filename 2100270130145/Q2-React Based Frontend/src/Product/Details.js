import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = ({ products }) => {
  const { productId } = useParams();

  console.log('products:', products);
  console.log('productId:', productId);

  const product = products.find(p => p.id === productId);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">{product.productName}</h2>
      <p className="text-gray-700 mb-2">
        Price: <span className="font-bold">${product.price}</span>
      </p>
      <p className="text-gray-700 mb-2">
        Rating: <span className="font-bold">{product.rating}</span>
      </p>
      <p className="text-gray-700 mb-2">
        Discount: <span className="font-bold">{product.discount}%</span>
      </p>
      <p className={`font-bold ${product.availability === 'yes' ? 'text-green-600' : 'text-red-600'} mb-4`}>
        Availability: <span>{product.availability}</span>
      </p>
      <Link to="/" className="text-blue-600 hover:underline">
        &larr; Go Back
      </Link>
    </div>
  );
};

export default ProductDetails;

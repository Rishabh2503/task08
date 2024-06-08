// src/components/ProductList.js

import React, { useState, useEffect } from 'react';
import Product from './Product';
import Pagination from './Pagination';

const ProductList = ({ products, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10); // Number of products per page
  const [displayedProducts, setDisplayedProducts] = useState([]);

  // Use useEffect to update displayedProducts whenever products change
  useEffect(() => {
    setDisplayedProducts(products);
  }, [products]);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page); // Call parent function to update current page
  };

  // Calculate indexes for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = displayedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(displayedProducts.length / productsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductList;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import ProductList from './Product/List';
import ProductDetails from './Product/Details';

const BASE_URL = 'http://20.244.56.144/test';

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Track current page

  useEffect(() => {
    fetchProducts();
  }, [currentPage]); // Ensure useEffect watches currentPage changes

  const fetchProducts = async () => {
    try {
      const authData = {
        companyName: 'goMart',
        clientID: '5959d983-6ffb-45ae-8609-71231b1fbd25',
        clientSecret: 'BvFMtgAsiJoISmFY',
        ownerName: 'Rishabh Gupta',
        ownerEmail: 'GUPTA.RISH2501@gmail.com',
        rollNo: '2100270130145'
      };

      const authResponse = await axios.post(`${BASE_URL}/auth`, authData);
      const { access_token } = authResponse.data;

      const companies = ["AMZ", "FLP", "SNP", "MYN", "AZO"]; // List of companies
      const categories = ["Phone", "Computer", "TV", "Earphone", "Tablet", "Charger", "Mouse", "Keypad", "Bluetooth", "Pendrive", "Remote", "Speaker", "Headset", "Laptop", "PC"]; // List of categories

      const topN = 10; // Number of top products to fetch per company
      const productsData = [];

      for (const company of companies) {
        for (const category of categories) {
          const productResponse = await axios.get(
            `${BASE_URL}/companies/${company}/categories/${category}/products?top=${topN}&minPrice=1&maxPrice=10000&page=1`,
            {
              headers: {
                Authorization: `Bearer ${access_token}`
              }
            }
          );
          productsData.push(...productResponse.data);
        }
      }

      setProducts(productsData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data');
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page); // Update currentPage state
  };

  return (
    <Router>
      <div className="App bg-gray-100 min-h-screen p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Top Products</h1>
        <div className="max-w-4xl mx-auto">
          <nav className="flex justify-center mb-4 space-x-4">
            <NavLink
              exact
              to="/"
              className="text-blue-600 hover:underline"
              activeClassName="font-bold"
            >
              Product List
            </NavLink>
          </nav>
          <div className="bg-white rounded-lg shadow-md p-4">
            {loading ? (
              <p className="text-center">Loading...</p>
            ) : error ? (
              <p className="text-center text-red-600">{error}</p>
            ) : (
              <Routes>
                <Route
                  exact
                  path="/"
                  element={<ProductList products={products} onPageChange={handlePageChange} />}
                />
                <Route
                  path="/product/:productId"
                  element={<ProductDetails products={products} />}
                />
              </Routes>
            )}
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;

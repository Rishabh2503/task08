import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import ProductList from './component/Product';
import ProductDetails from './component/ProductDETails';

const BASE_URL = 'http://20.244.56.144/test';

const App = () => {
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchToken();
  }, []);

  const fetchToken = async () => {
    try {
      const authData = {
        companyName: 'goMart',
        clientID: '5959d983-6ffb-45ae-8609-71231b1fbd25',
        clientSecret: 'BvFMtgAsiJoISmFY',
        ownerName: 'Rishabh Gupta',
        ownerEmail: 'GUPTA.RISH2501@gmail.com',
        rollNo: '2100270130145'
      };

      const response = await axios.post(`${BASE_URL}/auth`, authData);
      const { access_token } = response.data;
      setToken(access_token);
      fetchProducts(access_token);
    } catch (error) {
      console.error('Error fetching token:', error);
      setLoading(false);
    }
  };

  const fetchProducts = async (token) => {
    try {
      const response = await axios.get(`${BASE_URL}/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000&page=1`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  return (
    <Router>
      <div className="App bg-gray-100 min-h-screen p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Product List</h1>
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
            ) : (
              <Routes>
                <Route exact path="/" element={<ProductList products={products} />} />
                <Route path="/product/:productId" element={<ProductDetails products={products} />} />
              </Routes>
            )}
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
 
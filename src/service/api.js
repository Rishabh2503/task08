import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/test';

export const registerCompany = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, {
      companyName: 'goMart',
      ownerName: "Rishabh Gupta",
  ownerEmail: "GUPTA.RISH2501@gmail.com",
      accessCode: 'yUDwzZ'
    });
    return response.data;
  } catch (error) {
    console.error('Error registering company:', error);
  }
};
export const getAuthToken = async (clientID, clientSecret) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth`, {
        companyName: "goMart",
  clientID: "5959d983-6ffb-45ae-8609-71231b1fbd25",
  clientSecret: "BvFMtgAsiJoISmFY",
  ownerName: "Rishabh Gupta",
  ownerEmail: "GUPTA.RISH2501@gmail.com",
  rollNo: "2100270130145"
      });
      return response.data.token;
    } catch (error) {
      console.error('Error getting auth token:', error);
    }
  };
  export const getProducts = async (companyName, categoryName, minPrice, maxPrice, topN) => {
    try {
      const response = await axios.get(`${BASE_URL}/companies/${companyName}/categories/${categoryName}/products`, {
        params: {
          top: topN,
          minPrice: minPrice,
          maxPrice: maxPrice
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
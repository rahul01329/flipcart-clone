import React, { useEffect } from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/products';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Cart from './Pages/Cart/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import { useDispatch } from 'react-redux';
import supabase from './supabase';
import { setUser } from './slices/userSlice';

const App = () => {
  const dispatch = useDispatch();

  const getUser = async () => {
    const { data, error } = await supabase.auth.getSession();
    if (data.session) {
      dispatch(setUser(data.session.user));
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />{' '}
        <Route path="/Products" element={<Products />} />{' '}
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />{' '}
        <Route path="/Cart" element={<Cart />} />{' '}
      </Routes>{' '}
    </Router>
  );
};

export default App;

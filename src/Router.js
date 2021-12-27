import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalNav from 'components/GlobalNav/GlobalNav';
import Footer from 'components/Footer/Footer';
import Login from './pages/Login';
import Signup from 'pages/Signup';
import Main from 'pages/Main';
import ShopList from 'pages/ShopList';
import ShopDetail from 'pages/ShopDetail';

function Router() {
  return (
    <BrowserRouter>
      <GlobalNav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route exact path="/" element={<Main />} />
        <Route path="/shoplist/:category" element={<ShopList />} />
        <Route path="/product/:category/:id" element={<ShopDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalNav from 'components/GlobalNav/GlobalNav';
import Footer from 'components/Footer/Footer';
import Login from 'pages/Login/Login';
import Signup from 'pages/Signup/Signup';
import Main from 'pages/Main/Main';
import ShopList from 'pages/ShopList/ShopList';
import ShopDetail from 'pages/ShopDetail/ShopDetail';

function Router() {
  return (
    <BrowserRouter>
      <GlobalNav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route exact path="/" element={<Main />} />
        <Route path="/shoplist/category/:cateNum" element={<ShopList />} />
        <Route path="/product/:id" element={<ShopDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;

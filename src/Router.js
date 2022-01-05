import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalNav from 'components/GlobalNav/GlobalNav';
import Footer from 'components/Footer/Footer';
import Login from 'pages/Login/Login';
import Signup from 'pages/Signup/Signup';
import Main from 'pages/Main/Main';
import ShopList from 'pages/ShopList/ShopList';
import ShopDetail from 'pages/ShopDetail/ShopDetail';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import Modal from './components/Modal/modal';

function Router() {
  return (
    <BrowserRouter>
      <GlobalNav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Main />} />
        <Route path="/productlist" element={<ShopList />} />
        <Route path="/productdetail/:id" element={<ShopDetail />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/modal" element={<Modal />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;

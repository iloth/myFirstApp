import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Navigation from './controls/Navigation';
import Users from './pages/admin/Users';
import User from './pages/admin/User';
import Login from './pages/Login';
import NotFound from './pages/error/NotFound';
import Unauthorized from './pages/error/Unauthorized';
import Forbidden from './pages/error/Forbidden';
import ServerError from './pages/error/ServerError';
import OtherError from './pages/error/OtherError';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <div className="container" >
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="features" element={<Features />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="admin">
              <Route path="users" element={<Users />} />
              <Route path="users/:id" element={<User />} />
            </Route>
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="error/401" element={<Unauthorized />} />
          <Route path="error/403" element={<Forbidden />} />
          <Route path="error/404" element={<NotFound />} />
          <Route path="error/500" element={<ServerError />} />
          <Route path="error/other/:status" element={<OtherError />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>  
  </React.StrictMode>
);
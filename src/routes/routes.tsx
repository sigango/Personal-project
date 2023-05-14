import React from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GuardEC } from '../models/Guard';
import { AdminEC, UserEC } from '../models/Guard';
import { Register } from '../pages/Register';
import { LoginLayout } from '../pages/LoginLayout';
import NotFound404 from '../pages/NotFound404';
import Login from '../pages/Login';
// import Landingpage from '../pages/Landingpage';

export default function AppRoute() {
  const AdminGuard: GuardEC = {
    guardEntity: AdminEC,
  };

  const UserGuard: GuardEC = {
    guardEntity: UserEC,
  };

  return (
    <BrowserRouter>
        <Routes>
          {/* public routes */}
          <Route element={<LoginLayout />}>
            {/* <Route path="/" element={<Landingpage />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
  
          {/* 404 Not Found */}
          <Route path="*" element={<NotFound404 />} />
        </Routes>
    </BrowserRouter>
  );  
}
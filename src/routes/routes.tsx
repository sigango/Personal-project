import React from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GuardEC } from '../models/Guard';
import { AdminEC, UserEC } from '../models/Guard';
import { Register } from '../pages/Register';
import { LoginLayout } from '../pages/LoginLayout';
import NotFound404 from '../pages/NotFound404';
import Login from '../pages/Login';
import Landingpage from '../pages/Landingpage';
import FoodSelection from '../pages/FoodSelection';
import DrinkSelection from '../pages/DrinkSelection';
import OrderConfirmation from '../pages/Confirmation';
import UserLayout from '../pages/UserLayout';

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
            <Route path="/" element={<Landingpage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

        {/* student routes */}
          {/* <Route path="/student/*" element={<Guard {...StudentGuard} />}> */}
              <Route path=":id/*">
                <Route element={<UserLayout />}>
                <Route path="/foodselection" element={<FoodSelection />} />
                  <Route path="/drinkselection" element={<DrinkSelection />} />
                    {/* <Route path="/confirmation" element={<OrderConfirmation />} /> */}
                </Route>
              </Route>

          {/* admin routes */}  
          {/* <Route path="/admin/*" element={<Guard {...AdminGuard} />}> */}
              {/* <Route path=":id/*"> */}
                {/* <Route element={<AdminLayout />}> */}
                  {/* <Route path="/admin" element={<Admin />} /> */}
                  {/* <Route path="/admin/OrderDetails" element={<OrderDetails />} /> */}
                  
          {/* 404 Not Found */}
          <Route path="*" element={<NotFound404 />} />
        </Routes>
    </BrowserRouter>
  );  
}
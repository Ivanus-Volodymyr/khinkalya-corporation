/* eslint-disable react/jsx-no-undef */
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import {
      Admin,
      AddDish,
      Layout,
      Main,
      UserLogin,
      UserRegistration,
      Users,
      Cart,
    } from './components';
import OrderDone from "./components/OrderDone/OrderDone";

function App() {

    return (
        <div>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route path={'/main'} element={<Main/>}></Route>
                    <Route path={'/auth/registration'} element={<UserRegistration/>}></Route>
                    <Route path={'/auth/login'} element={<UserLogin/>}></Route>
                    <Route path={'/admin/AddDish'} element={<AddDish/>}></Route>
                    <Route path={'/admin'} element={<Admin/>}></Route>
                    <Route path={'/users'} element={<Users/>}></Route>
                    <Route path={'/dish/:id'} element={<DishList/>}></Route>
                    <Route path={'/cart'} element={<Cart/>}></Route>
                    <Route path={'/cart/orderDone'} element={<OrderDone/>}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;

/* eslint-disable react/jsx-no-undef */
import React from 'react';
import 'antd/dist/antd.css';
import {Route, Routes} from 'react-router-dom';

import './App.css';
import {
    About,
    AddDish,
    AddLocality,
    AddRestaurant,
    Admin,
    Cart,
    DeliveryInfo,
    DishList,
    LayoutComponent,
    Main,
    OrderDone,
    Promotions,
    Restaurants,
    UserLogin,
    UserRegistration,
    Users,
} from './components';
import {AddPromotions} from "./components/AddPromotions/AddPromotions";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<LayoutComponent/>}>
                <Route path={'*'} element={<Main/>}></Route>
                <Route path={'/main'} element={<Main/>}></Route>
                <Route
                    path={'/auth/registration'}
                    element={<UserRegistration/>}
                ></Route>
                <Route path={'/auth/login'} element={<UserLogin/>}></Route>
                <Route path={'/admin/AddDish'} element={<AddDish/>}></Route>
                <Route path={'/admin/AddRestaurant'} element={<AddRestaurant/>}></Route>
                <Route path={'/admin/AddLocality'} element={<AddLocality/>}></Route>
                <Route path={'/admin/AddPromotions'} element={<AddPromotions/>}></Route>
                <Route path={'/admin'} element={<Admin/>}></Route>
                <Route path={'/users'} element={<Users/>}></Route>
                <Route path={'/dish/:id'} element={<DishList/>}></Route>
                <Route path={'/cart'} element={<Cart/>}></Route>
                <Route path={'/cart/orderDone'} element={<OrderDone/>}></Route>
                <Route path={'/delivery'} element={<DeliveryInfo/>}></Route>
                <Route path={'/about'} element={<About/>}></Route>
                <Route path={'/promotions'} element={<Promotions/>}></Route>
                <Route path={'/restaurants'} element={<Restaurants/>}></Route>
            </Route>
        </Routes>
    );
}

export default App;

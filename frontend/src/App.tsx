import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";

import {Admin, AddDish,  DishView, Layout, Main, UserLogin, UserRegistration, Users, Cart } from "./components";

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
                    <Route path={'/dish/:id'} element={<DishView/>}></Route>
                    <Route path={'/cart'} element={<Cart/>}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;

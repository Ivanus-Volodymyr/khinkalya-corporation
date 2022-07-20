import React from 'react';
import './App.css';
import UserRegistration from "./components/User/UserRegistration/UserRegistration";
import {Route, Routes} from "react-router-dom";
import UserLogin from "./components/User/UserLogin/UserLogin";
import Layout from "./components/Layout/Layout";
import AddDish from "./components/AddDish/AddDish";
import Users from "./components/Users/Users";
import Main from "./components/Main/Main";
import DishView from "./components/ViewDishes/DishView";
import Admin from "./components/Admin/Admin";
import Cart from "./components/Cart/Cart";

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

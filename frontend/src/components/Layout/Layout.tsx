import React, {FC} from 'react';
import Header from "../Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "../Footer/Footer";

const Layout :FC= () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
            </div>
    );
};

export default Layout;
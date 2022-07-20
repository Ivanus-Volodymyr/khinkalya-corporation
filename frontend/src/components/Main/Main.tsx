import React, {useEffect, useState} from 'react';
import Cart from "../Cart/Cart";
import BarChart from "../BarChart/BarChart";

const Main = () => {

    return (
        <div>
            <BarChart  />
            <Cart/>
        </div>
    );
};

export default Main;
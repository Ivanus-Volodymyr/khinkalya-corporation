import React from 'react';
import {IDish} from "../../interfaces";

import {useAppDispatch} from "../../hooks/redux";
import {saveOrderInDb} from "../../store/slices/order.slice";

const Cart = () => {
    const dispatch = useAppDispatch()
    let totalPrice: number = 0
    const userId = localStorage.getItem('userId');
    const item = localStorage.getItem('order');
    const dishFromCart = JSON.parse(item as string) as IDish[];
    console.log(dishFromCart);


// dishFromCart.map(value => value.price)
    let arrDishId: number[] = []

    for (const iDish of dishFromCart) {
        totalPrice += iDish.price
        arrDishId.push(iDish.id)
    }


    console.log(totalPrice)

    function submit() {
        dispatch(saveOrderInDb({
            userId: Number(userId),
            totalPrice: Number(totalPrice),
            dish: arrDishId
        }))
        localStorage.clear()

    }

    return (
        <div>
            {dishFromCart.map((value, index) => <div key={index}>
                <h4>{value.name}</h4>
                <p>{value.price}</p>
            </div>)}
            <h4>Сума замовлення-{totalPrice}</h4>

            <button onClick={() => submit()}>Оформи Замовлення</button>

        </div>
    );
};

export {Cart};

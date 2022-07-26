import React, {FC} from 'react';

import {IDish} from "../../interfaces";
import {useAppDispatch} from "../../hooks/redux";
import {createOrder} from "../../store/slices/order.slice";

const Dishes: FC<{ results: IDish }> = ({results}) => {
    // const {orders} = useAppSelector(state => state.orderReducer);
    const dispatch = useAppDispatch();

    return (
        <div>
            <img width={'220px'} src={`${results.image}`} alt="dish"/>
            <div>{results.name}</div>
            <div style={{display: 'flex'}}>
                <div>{results.weight}грам</div>
                <div>{results.price}грн</div>
            </div>
            <button onClick={() => dispatch(createOrder(results))}>Добавити в корзину</button>

        </div>
    );
};

export { Dishes};

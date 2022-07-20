import React, {FC, useState} from 'react';
import {IDish} from "../../interfaces";
import {useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {createOrder} from "../../store/slices/order.slice";

const Dishes: FC<{ results: IDish }> = ({results}) => {
    const {orders} = useAppSelector(state => state.orderReducer);
    const dispatch = useAppDispatch();
    // const submit: any = () => {
    //     dispatch(createOrder(results))
    // }

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

export default Dishes;
import React from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {dec, inc, removeItem, saveOrderInDb, setLoaderFalse} from '../../store';
import {IOrder} from '../../interfaces/order.interface';
import {useNavigate} from 'react-router-dom';
import {Button, ButtonGroup} from '@mui/material';
import Loader from "../Loader/Loader";

const Cart = () => {
    const {orders, loading} = useAppSelector((state) => state.orderReducer);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    let totalPrice = 0;
    const userId = localStorage.getItem('userId');

    const item = localStorage.getItem('order');
    const dishFromCart = JSON.parse(item as string) as IOrder[];
    const submit = async () => {
        await dispatch(
            saveOrderInDb({
                userId: Number(userId),
                totalPrice: Number(totalPrice),
                dish: arrDishId,
            }),
        );
        dispatch(setLoaderFalse)
        localStorage.removeItem('order')
        navigate('/cart/orderDone');
    };

    const arrDishId: IOrder[] = [];
    if (dishFromCart) {
        for (const iDish of dishFromCart) {
            totalPrice += iDish.dish.price * iDish.quantity;
            arrDishId.push(iDish);
        }
    } else {
        return <h1>Полистай щось замов</h1>;
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
            backgroundColor: '#f5f5f5',
        }}>
            {dishFromCart.map((value, index) => (
                <div key={index} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    marginBottom: '10px',
                    padding: '10px',
                    backgroundColor: 'white',
                    boxShadow: '0px 1px 3px rgba(0,0,0,0.3)',
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: "space-between",
                        alignItems: 'center',
                        rowGap: '15px',
                    }}>
                        <h4 style={{margin: 0, fontSize: "14px"}}>{value.dish.name}</h4>
                        <img style={{
                            width: '200px',
                            borderRadius: '20px'
                        }}
                             src={`${value.dish.image}`}
                             alt="dish"/>
                        <span style={{color: 'gray', fontSize: '14px'}}>{value.dish.price} UAH</span>
                        <span style={{color: 'gray', fontSize: '14px'}}>Quantity: {value.quantity}</span>
                    </div>
                    <ButtonGroup style={{alignItems: "center"}} variant="outlined" aria-label="outlined button group">
                        <Button onClick={() => dispatch(inc(value))}>+</Button>
                        <Button onClick={() => dispatch(dec(value))}>-</Button>
                        <Button onClick={() => dispatch(removeItem(value))}>x</Button>
                        <span
                            style={{fontWeight: 'bold', marginLeft: 10}}>{value.dish.price * value.quantity} UAH</span>
                    </ButtonGroup>
                </div>
            ))}

            <h4 style={{marginTop: '20px'}}>Total: {totalPrice} UAH</h4>
            {loading && <Loader/>}
            <Button
                variant="contained"
                size="large"
                style={{
                    marginTop: '20px',
                    backgroundColor: '#4caf50',
                    color: 'white',
                    fontWeight: 'bold',
                    boxShadow: 'none',
                }}
                onClick={() => submit()}>
                Оформити Замовлення
            </Button>
        </div>
    );
};

export {Cart};

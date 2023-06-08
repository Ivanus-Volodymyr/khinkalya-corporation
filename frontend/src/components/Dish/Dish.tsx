import React, {FC, useState} from 'react';

import {IDish} from '../../interfaces';
import {useAppDispatch} from '../../hooks/redux';
import {createOrder} from '../../store';

interface Styles {
    container: React.CSSProperties;
    image: React.CSSProperties;
    name: React.CSSProperties;
    info: React.CSSProperties;
    quantity: React.CSSProperties;
    quantityButton: React.CSSProperties;
    quantityValue: React.CSSProperties;
    addButton: React.CSSProperties;
}

const Dish: FC<{ results: IDish }> = ({results}) => {
    const dispatch = useAppDispatch();
    const [quantity, setQuantity] = useState(1);
    const order = {
        dish: results,
        quantity: quantity,
    };

    return (
        <div style={styles.container}>
            <img style={styles.image} src={`${results.image}`} alt="dish"/>
            <div style={styles.name}>{results.name}</div>
            <div style={styles.info}>
                <div>{results.weight} грам</div>
                <div>{results.price} грн</div>
            </div>
            <div style={styles.quantity}>
                <button
                    style={styles.quantityButton}
                    onClick={() => setQuantity(quantity + 1)}
                >
                    +
                </button>
                <div style={styles.quantityValue}>
                    {order.quantity >= 1 ? order.quantity : 1}
                </div>
                <button
                    style={styles.quantityButton}
                    onClick={() => setQuantity(quantity - 1)}
                >
                    -
                </button>
            </div>
            <button style={styles.addButton} onClick={() => dispatch(createOrder(order))}>
                Добавити в корзину
            </button>
        </div>
    );
};

const styles: Styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        width: '300px',
        height: '450px',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        margin: '10px',
        flexDirection: 'column',
        justifyContent: "space-between",
        boxShadow: '0px 3px 6px rgba(0,0,0,0.16)',
    },
    image: {
        marginBottom: '10px',
        borderRadius: 10,
        width: '280px',
        height: '200px'
    },
    name: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    info: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: '10px',
        color: '#666',
        fontSize: '14px',
    },
    quantity: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '130px',
        height: '50px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        overflow: 'hidden',
    },
    quantityButton: {
        width: '30px',
        height: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        fontSize: '20px',
        backgroundColor: 'red',
        color: '#fff',
        padding: '5px',
        borderRadius: '5px',
    },
    quantityValue: {
        width: '40px',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeft: '1px solid #ddd',
        borderRight: '1px solid #ddd',
        fontSize: '16px',
        fontWeight: 'bold',
    },
    addButton: {
        width: '100%',
        height: '40px',
        backgroundColor: '#c5161b',
        color: '#fff',
        fontSize: '16px',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export {Dish};

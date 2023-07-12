import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {getLocality, getUserById} from '../../store';
import {Avatar} from '@mui/material';
import {deepOrange} from '@mui/material/colors';

import './Admin.css';
import {useNavigate} from "react-router-dom";

const Admin: FC = () => {
    const {user} = useAppSelector((state) => state.userReducer);
    const dispatch = useAppDispatch();
    const role = localStorage.getItem('role');

    const navigate = useNavigate();
    useEffect(() => {
        const id = localStorage.getItem('userId');
        dispatch(getLocality());
        if (id) dispatch(getUserById(id));
    }, []);

    const {locality} = useAppSelector((state) => state.localityReducer);
    const array: number[] = [];

    for (let i = 0; i < locality.length; i++) {
        const datum = locality[i];
        if (datum.Dish) {
            const a = datum.Dish.length;
            array.push(a);
        }
    }

    return (
        <div className="admin-container">
            {role === 'user' && user && (
                <div className="user-info">
                    {!user.avatar && <Avatar className="avatar" sx={{background: deepOrange[500]}}>
                        {user.name}
                    </Avatar>}
                    <img src={user.avatar} alt=""/>
                    <h1>{user.name}</h1>
                    <div style={{margin: 30}}>
                        {user.phone && <h3 className="info-item">тел: {user.phone}</h3>}
                        <h3 className="info-item">Вік: {user.age}</h3>
                        <h3 className="info-item">Email: {user.email}</h3>
                        <h3 className="info-item">Місто: {user.city}</h3>
                        {user.address && <h3 className="info-item">адреса: {user.address}</h3>}
                    </div>
                    <div className="button-container">
                        <button onClick={() => navigate('/users')}>Статистика</button>
                    </div>
                </div>
            )}
            {role === 'admin' && user && (
                <div className="user-info">
                    {!user.avatar && <Avatar className="avatar" sx={{background: deepOrange[500]}}>
                        {user.name}
                    </Avatar>}
                    <img src={user.avatar} alt=""/>
                    <h1>{user.name}</h1>
                    <div style={{margin: 30}}>
                        {user.phone && <p className="info-item">тел: {user.phone}</p>}
                        <h3 className="info-item">Вік: {user.age}</h3>
                        <h3 className="info-item">Email: {user.email}</h3>
                        <h3 className="info-item">Місто: {user.city}</h3>
                        {user.address && <p className="info-item">адреса: {user.address}</p>}

                    </div>

                    <div className="button-container">
                        <button onClick={() => navigate('' +
                            'addRestaurant')}>Добавити Ресторан
                        </button>
                        <button onClick={() => navigate('addDish')}>Добавити Страву</button>
                        <button onClick={() => navigate('addLocality')}>Добавити новий цех</button>
                        <button onClick={() => navigate('AddPromotions')}>Добавити Акцію</button>
                        <button onClick={() => navigate('/users')}>Статистика</button>
                    </div>
                </div>
            )}

        </div>
    );
};

export {Admin};

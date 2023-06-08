import React, {FC, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {TextField} from '@mui/material';

import {addDish, getLocality, getRestaurants} from '../../store';
import {IDish} from '../../interfaces';
import './AddDish.css';

const AddDish: FC = () => {
    const {locality} = useAppSelector((state) => state.localityReducer);
    const {restaurants} = useAppSelector((state) => state.restaurantReducer);
    const {register, handleSubmit} = useForm();

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getLocality());
        dispatch(getRestaurants());
    }, [dispatch]);

    const submit: any = async (data: IDish) => {
        const formData = new FormData();
        formData.append('image', data.image[0]);
        formData.append('name', data.name);
        formData.append('price', data.price.toString());
        formData.append('weight', data.weight.toString());
        formData.append('description', data.description);
        formData.append('localityId', data.localityId);
        formData.append('restaurantId', data.restaurantId);
        await dispatch(addDish(formData));
    };

    return (
        <div className="add-dish-container">
            <form className="add-dish-form" onSubmit={handleSubmit(submit)}>
                <h3 className="add-dish-header">Додати Страву</h3>
                <div className="add-dish-fields">
                    <div className="add-dish-field">
                        <div className="add-dish-field-label">Фото Страви</div>
                        <input
                            className="add-dish-field-input"
                            type="file"
                            {...register('image')}
                        />
                    </div>
                    <div className="add-dish-field">
                        <input
                            className="add-dish-field-input"
                            type="text"
                            placeholder={'name'}
                            {...register('name')}
                        />
                    </div>
                    <div className="add-dish-field">
                        <input
                            className="add-dish-field-input"
                            type="number"
                            placeholder={'price'}
                            {...register('price')}
                        />
                    </div>
                    <div className="add-dish-field">
                        <input
                            className="add-dish-field-input"
                            type="number"
                            placeholder={'weight'}
                            {...register('weight')}
                        />
                    </div>
                    <div className="add-dish-field">
                        <TextField
                            id="outlined-multiline-static"
                            label="Текст Опису"
                            multiline
                            rows={4}
                            {...register('description')}
                        />
                    </div>
                    <div className="add-dish-field">
                        <select {...register('localityId')}>
                            <option value="">Виберіть цех приготування</option>
                            {locality &&
                                locality.map((result) => (
                                    <option key={result.id} value={result.id}>
                                        {result.name}
                                    </option>
                                ))}
                        </select>
                    </div>
                    <div className="add-dish-field">
                        <select {...register('restaurantId')}>
                            <option value="">Виберіть ресторан</option>
                            {restaurants &&
                                restaurants.map((result) => (
                                    <option key={result.id} value={result.id}>
                                        {result.name}
                                    </option>
                                ))}
                        </select>
                    </div>
                    <div>
                        <button>Добавити Страву</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export {AddDish};

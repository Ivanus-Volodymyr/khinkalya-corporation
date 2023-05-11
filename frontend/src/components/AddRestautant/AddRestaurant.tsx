import React from 'react';
import {useAppDispatch} from '../../hooks/redux';
import {useForm} from 'react-hook-form';
import {addRestaurant} from '../../store';
import {IRestaurant} from '../../interfaces/restaurant.interface';
import './AddRestaurant.css'

const AddRestaurant = () => {
    const dispatch = useAppDispatch();
    const {register, handleSubmit} = useForm();

    const submit: any = async (data: IRestaurant) => {
        const formData = new FormData();
        data.image && formData.append('image', data.image[0]);
        formData.append('name', data.name);
        formData.append('city', data.name);
        formData.append('address', data.name);
        await dispatch(addRestaurant(formData));
    };

    return (
        <div className="add-restaurant-container">
            <h3 className="add-dish-header">Додати ресторан</h3>
            <form onSubmit={handleSubmit(submit)}>
                <div className="add-restaurant-field">
                    <label className={'add-restaurant-field-label'} htmlFor="image">Фото ресторану</label>
                    <input className={'add-restaurant-field-input'} type="file" id="image" {...register('image')} />
                </div>
                <div className="add-restaurant-field">
                    <label className={'add-restaurant-field-label'} htmlFor="name">Назва ресторану</label>
                    <input className={'add-restaurant-field-input'} type="text" id="name"
                           placeholder="Назва ресторану" {...register('name')} />
                </div>
                <div className="add-restaurant-field">
                    <label className={'add-restaurant-field-label'} htmlFor="city">Місто</label>
                    <input className={'add-restaurant-field-input'} type="text" id="city"
                           placeholder="Місто" {...register('city')} />
                </div>
                <div className="add-restaurant-field">
                    <label className={'add-restaurant-field-label'} htmlFor="address">Адреса</label>
                    <input className={'add-restaurant-field-input'} type="text" id="address"
                           placeholder="Адреса" {...register('address')} />
                </div>
                <button style={{backgroundColor: '#0077c2'}} type="submit">Додати ресторан</button>
            </form>
        </div>
    );
};

export {AddRestaurant};

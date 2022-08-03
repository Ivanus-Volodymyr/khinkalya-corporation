import React, { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import {addDish, getLocality, getRestaurants} from "../../store";
import {IDish} from "../../interfaces";
import './AddDish.css'
import {AddLocality} from "../AddLocality/AddLocality";
import {AddRestaurant} from "../AddRestautant/AddRestaurant";

const AddDish: FC = () => {
    const {locality, restaurant} = useAppSelector(state => state.adminReducer)
    const {register, handleSubmit, reset} = useForm()


    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getLocality())
        dispatch(getRestaurants())
    }, [])

    const submit: any = async (data: IDish) => {
        const formData = new FormData();
        formData.append('image', data.image[0])
        formData.append('name', data.name)
        formData.append('price', data.price.toString())
        formData.append('weight', data.weight.toString())
        formData.append('description', data.description)
        formData.append('localityId', data.localityId)
        formData.append('restaurantId', data.restaurantId)
        await dispatch(addDish(formData))
    }

  return (
    <div>
      Добавити Страву
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <div>
                        <div id="image">Chose file</div>
                        <input className={'file'} type="file"   {...register('image')} />
                    </div>
                    <div><input type="text" placeholder={'name'}{...register('name')}/></div>
                    <div><input type="number" placeholder={'price'}{...register('price')}/></div>
                    <div><input type="number" placeholder={'weight'}{...register('weight')}/></div>
                    <div><input type="textBox" placeholder={'description'}{...register('description')}/></div>
                    <select {...register('localityId')}  >
                        <option value="">Виберіть цех приготування</option>
                        {locality && locality.map(result =>
                            <option key={result.id} value={result.id}>{result.name}</option>)}
                    </select>
                    <div><input type="text" placeholder={'ingredients'}{...register('ingredients')}/></div>
                    <select {...register('restaurantId')}  >
                        <option value="">Виберіть ресторан</option>
                        {restaurant && restaurant.map(result =>
                            <option key={result.id} value={result.id}>{result.name}</option>)}
                    </select>
                    <div>
                        <button>Add</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  );
};

export { AddDish };

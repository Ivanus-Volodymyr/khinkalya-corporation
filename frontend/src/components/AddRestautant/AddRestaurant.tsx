import React from 'react';
import {useAppDispatch} from "../../hooks/redux";
import {useForm} from "react-hook-form";
import {addRestaurant} from "../../store/slices/admin.slice";

const AddRestaurant = () => {
    const dispatch = useAppDispatch()
    const {register, handleSubmit, reset} = useForm()
    const submit = (data: any) => {
        dispatch(addRestaurant(data))
    }
    return (
        <div>
            Add Restaurant
            <form onSubmit={handleSubmit(submit)}>
                <div><input type="text" placeholder={'name'}{...register('name')}/></div>
                <button> Add Restaurant</button>
            </form>
        </div>
    );
};

export default AddRestaurant;
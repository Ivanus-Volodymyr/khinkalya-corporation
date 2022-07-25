import React, {FC} from 'react';
import {useForm} from 'react-hook-form';
import {IUser} from "../../../interfaces";
import {useAppDispatch} from "../../../hooks/redux";
import { userRegistration} from "../../../store";
import './UserRegistrtion.css';

const UserRegistration: FC = () => {
    const {register, handleSubmit, reset} = useForm<IUser>()
    const dispatch = useAppDispatch()

    const onSubmitForm = async(data: IUser) => {
        const res = await dispatch(userRegistration(data));
        console.log(res);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitForm)} className="signUp-form">
                <div className={'signUp-content'}>
                    <label>Name</label>
                    <input type="text" {...register('name')}/>
                </div>

                <div className={'signUp-content'}>
                    <label>Email</label>
                    <input type="text"{...register('email')}/>
                </div>

                <div className={'signUp-content'}>
                    <label>Age</label>
                    <input type="number"{...register('age')}/>
                </div>

                <div className={'signUp-content'}>
                    <label>City</label>
                    <input type="text" {...register('city')}/>
                </div>

                <div className={'signUp-content'}>
                    <label>Password</label>
                    <input type="text" {...register('password')}/>
                </div>
                <div className="btn-container">
                    <button>Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export {UserRegistration};

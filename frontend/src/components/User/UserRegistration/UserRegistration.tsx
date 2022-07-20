import React, {FC} from 'react';
import {useForm} from 'react-hook-form';
import {IUser} from "../../../interfaces";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {registrationUser} from "../../../store";
import {Link} from "react-router-dom";

const UserRegistration: FC = () => {
    const {register, handleSubmit, reset} = useForm()
    const dispatch = useAppDispatch()
    const submit: any = async (data: IUser) => {
        dispatch(registrationUser(data))
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div className={'registration'}>
                    <div><input type="text" placeholder={'name'}{...register('name')}/></div>
                    <div><input type="text" placeholder={'email'}{...register('email')}/></div>
                    <div><input type="number" placeholder={'age'}{...register('age')}/></div>
                    <div><input type="text" placeholder={'city'}{...register('city')}/></div>
                    <div><input type="text" placeholder={'password'}{...register('password')}/></div>
                    <div>
                        {/*<Link to={'/user/id'}>*/}
                        <button>Registration</button>
                        {/*</Link>*/}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UserRegistration;
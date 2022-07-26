import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import {IUser} from "../../../interfaces";
import {useAppDispatch} from "../../../hooks/redux";
import {setLoginActive, setRegisterActive, userLogin} from "../../../store";
import "./UserLogin.css";

const UserLogin: FC = () => {
    let navigate = useNavigate()
    const dispatch = useAppDispatch()
    const checkRole: any = async () => {
        const role = await localStorage.getItem('role')
        if (role === 'user') {
            navigate('/users')
        }
        if (role === 'admin') {
            navigate('/admin')
        }
        console.log(role)

    }
    // const {isLog,status} = useAppSelector(state => state.authReducer)

    const {register, handleSubmit, reset} = useForm<Partial<IUser>>()
    const onSubmitForm = async (data: Partial<IUser>) => {
        dispatch(setLoginActive());
        await dispatch(userLogin(data));

        await checkRole()
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitForm)} className="logIn-form">
                <div className={'logIn-content'}>
                    <label>Email</label>
                    <input type="text"{...register('email')}/>
                </div>

                <div className={'logIn-content'}>
                    <label>Password</label>
                    <input type="text" {...register('password')}/>
                </div>

                <div className="btn-container">
                    <button>Увійти</button>
                    {/*<Link to={'/auth/google'}>*/}
                    {/*    <GoogleAuth/>*/}
                    {/*</Link>*/}
                    <a><h4>Забули пароль?</h4></a>

                    <button  onClick={() => {dispatch(setRegisterActive())}}>
                        Зареєструватись
                    </button>
                </div>
            </form>
        </div>
    );
};

export {UserLogin};

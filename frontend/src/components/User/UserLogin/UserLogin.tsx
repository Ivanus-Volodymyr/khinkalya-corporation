import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {IUser} from "../../../interfaces";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {loginUser} from "../../../store";
import {Link, useNavigate} from "react-router-dom";


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
    const {isLog,status} = useAppSelector(state => state.authReducer)

    const {register, handleSubmit, reset} = useForm()
    const submit: any = async (data: Partial<IUser>) => {
        await dispatch(loginUser(data))
        await checkRole()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <div><input type="text" placeholder={'email'}{...register('email')}/></div>
                    <div><input type="text" placeholder={'password'}{...register('password')}/></div>
                </div>
                <div>
                    <button> Login</button>
                </div>
                <a href="#"><h4>Forgot Password?</h4></a>
                <Link to={'/auth/registration'}>
                    <button>
                        Registration new account
                    </button>
                </Link>
            </form>
        </div>
    );
};

export default UserLogin;
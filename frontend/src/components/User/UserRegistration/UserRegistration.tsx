import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { IUser } from '../../../interfaces';
import { useAppDispatch } from '../../../hooks/redux';
import { userRegistration } from '../../../store';
import './UserRegistrtion.css';
import { UserGoogleLogin } from "../UserGoogleLogin/UserGoogleLogin";

const UserRegistration: FC = () => {
  const { register, handleSubmit, reset } = useForm<IUser>();
  const dispatch = useAppDispatch();

  const onSubmitForm = async (data: IUser) => {
    await dispatch(userRegistration(data));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitForm)} className="signUp-form">
        <div className={'signUp-content'}>
          <label>Ім'я</label>
          <input type="text" {...register('name')} />
        </div>

        <div className={'signUp-content'}>
          <label>Пошта</label>
          <input type="text" {...register('email')} />
        </div>

        <div className={'signUp-content'}>
          <label>Вік</label>
          <input type="number" {...register('age')} />
        </div>

        <div className={'signUp-content'}>
          <label>Місто</label>
          <input type="text" {...register('city')} />
        </div>

        <div className={'signUp-content'}>
          <label>Пароль</label>
          <input type="text" {...register('password')} />
        </div>
        <div className="btn-container">
          <button>Зареєструватись</button>
        </div>
      </form>
    </div>
  );
};

export { UserRegistration };

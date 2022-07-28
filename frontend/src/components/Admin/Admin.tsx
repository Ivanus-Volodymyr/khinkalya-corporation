import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getLocality, getUserById } from '../../store';
import { AddLocality } from '../AddLocality/AddLocality';
import { AddRestaurant } from '../AddRestautant/AddRestaurant';

const Admin: FC = () => {
  const { user } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();

  const role = localStorage.getItem('role');
  useEffect(() => {
    const id = localStorage.getItem('userId');
    dispatch(getLocality());
    if (id) dispatch(getUserById(id));
  }, []);

  const { locality } = useAppSelector((state) => state.adminReducer);
  const array: any[] = [];

  for (let i = 0; i < locality.length; i++) {
    const datum = locality[i];
    if (datum.Dish) {
      const a = datum.Dish.length;
      array.push(a);
    }
  }
  console.log(array);

  return (
    <div>
      {role === 'admin' && (
        <div>
          <h1>{user.name}</h1>
          <h2>{user.city}</h2>
        </div>
      )}
      <AddLocality />
      <AddRestaurant />
      <Link to={'addDish'}>
        <button>Добавити страву</button>
      </Link>
      {role === 'user' && <h1>Тіки Адмін</h1>}
    </div>
  );
};

export { Admin };

import React, { FC, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  getCurrentUser,
  getGeolocation,
  getLocality,
  getRestaurants,
  setLoginActive,
  setOfferPopupActive,
  userLogout
} from "../../store";
import { AuthModal } from '../AuthModal/AuthModal';
import { UserLogin } from '../User/UserLogin/UserLogin';
import { UserRegistration } from '../User/UserRegistration/UserRegistration';
import { OfferPopup } from "../OfferPopup/OfferPopup";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import './Header.css';


const HeaderComponent: FC = () => {
  const dispatch = useAppDispatch();
  const { user, isLoginActive, isRegisterActive } = useAppSelector(
    (state) => state.authReducer,
  );
  const { locality } = useAppSelector((state) => state.adminReducer);
  const { restaurants } = useAppSelector((state) => state.restaurantReducer);
  const { user: currentUser } = useAppSelector((state) => state.userReducer);

  const refresh = localStorage.getItem('refresh');
  const access = localStorage.getItem('access') as string;
  const request = { ...user, access };
  const navigate = useNavigate();

  useEffect(() => {
      dispatch(getRestaurants());
      dispatch(getLocality());

      access &&
      !currentUser.name &&
      !user.name &&
      dispatch(getCurrentUser(access));

      if (!access && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          dispatch(getGeolocation({ lat, lng }));
        });
      }

       user.name && setTimeout(() => {
        dispatch(setOfferPopupActive());
      }, 10000);

    },
    [refresh, currentUser, user, access, dispatch, user.name]);

  const handleChange = (event: SelectChangeEvent) => {
    localStorage.setItem('restaurantId', event.target.value as string);
    navigate('/main');
  };

  return (
    <header style={{ background: 'white' }}>
      <div className={'header_menu'}>
        <div>
          <a href="/">
            {' '}
            <img
              src="/image-for-header/logoKhinkalnya.jpg"
              width={'100px'}
              alt="logo"
            />
          </a>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Link to={'/promotions'}>
            <img
              src="/image-for-header/discount.svg"
              width={'80px'}
              height={'40px'}
              alt="promotions"
            />
          </Link>
          <div>Акції</div>
        </div>
        {locality &&
          locality.map((value) => (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              key={value.id}
            >
              <Link to={'/dish/' + value.id.toString()}>
                {' '}
                <img
                  src={value.image}
                  width={'80px'}
                  height={'40px'}
                  alt="locality"
                />
              </Link>
              <div>{value.name}</div>
            </div>
          ))}

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Link to={'/about'}>
            <img
              src="/image-for-header/information.svg"
              width={'80px'}
              height={'40px'}
              alt="informations"
            />
          </Link>
          <div>Інформація</div>
        </div>
        <FormControl style={{ width: '250px' }}>
          <InputLabel>Виберіть ресторан</InputLabel>
          <Select onChange={handleChange}>
            {restaurants &&
              restaurants.map((result) => (
                <MenuItem key={result.id} value={result.id}>
                  {result.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <div>
          <Link to={'/cart'}>
            <img
              src="/image-for-header/cart.png"
              width={'80px'}
              height={'50px'}
              alt="cart"
            />
          </Link>
        </div>
        <div>
          <div>
            {user && access && <div>{user.name}</div>}
            {currentUser && access && <div>{currentUser.name}</div>}
          </div>
          <button
            onClick={() => {
              !access && dispatch(setLoginActive());

              if (access && request)
                dispatch(userLogout({ accessToken: request.access }));
            }}
          >
            {!access ? 'Увійти' : 'Вийти'}
          </button>
        </div>
      </div>
      <AuthModal>
        {isLoginActive ? (
          <UserLogin />
        ) : isRegisterActive ? (
          <UserRegistration />
        ) : null}
      </AuthModal>
      <hr />
      <OfferPopup/>
    </header>
  );
};

export { HeaderComponent };

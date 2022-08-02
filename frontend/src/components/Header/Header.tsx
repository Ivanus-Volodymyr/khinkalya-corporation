import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';

import './Header.css';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getCurrentUser, getLocality, setLoginActive, userLogout } from "../../store";
import { AuthModal } from '../AuthModal/AuthModal';
import { UserLogin } from '../User/UserLogin/UserLogin';
import { UserRegistration } from '../User/UserRegistration/UserRegistration';

const { Header } = Layout;

const HeaderComponent: FC = () => {
  const dispatch = useAppDispatch();
  const { user, isLoginActive, isRegisterActive } = useAppSelector(
    (state) => state.authReducer,
  );
  const { locality } = useAppSelector((state) => state.adminReducer);
  const { user: currentUser } = useAppSelector((state) => state.userReducer);

  const refresh = localStorage.getItem('refresh');
  const access = localStorage.getItem('access') as string;
  const request = { ...user, access };

  useEffect(() => {
    dispatch(getLocality());
    access && !currentUser.name &&  !user.name && dispatch(getCurrentUser(access));
  }, [refresh, currentUser, user, access]);

  return (
    <Header>
      <div className={'header_menu'}>
        <div>
          <a href="/">
            {' '}
            <img
              src="/image-for-header/logoKhinkalnya.jpg"
              width={'150px'}
              alt="logo"
            />
          </a>
        </div>
        {locality &&
          locality.map((value) => (
            <div key={value.id}>
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
            {user && <div>{user.name}</div>}
            { currentUser && <div>{currentUser.name}</div> }
          </div>
          <button
            onClick={() => {
              dispatch(setLoginActive());

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
    </Header>
  );
};

export { HeaderComponent };

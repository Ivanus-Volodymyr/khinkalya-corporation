import { FC } from 'react';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

import { setLoginActive, userGoogleLogin } from '../../../store';
import { useAppDispatch } from '../../../hooks/redux';

const UserGoogleLogin: FC = () => {
  const navigate = useNavigate();
  const redirectPage = process.env.REACT_APP_GOOGLE_OAUTH_REDIRECT as string;
  const clientId = process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID as string;
  const dispatch = useAppDispatch();

  const onSuccess = async (response: CredentialResponse) => {
    try {
      console.log(response, response.credential)
      const tokens = await dispatch(
        userGoogleLogin({
          token: response.credential || '',
          clientId: clientId,
        }),
      );

      if (!tokens) {
        alert('Error while logging via Google 1');
      } else {
        dispatch(setLoginActive());
        console.log('navigate');
        navigate(redirectPage);
      }
    } catch (error) {
      alert('Спробуй ще раз 1!');
    }
  };

  const onFailure = () => {
    alert('Спробуй ще раз 2!');
  };

  return (
    <GoogleLogin
      type="icon"
      shape="circle"
      onSuccess={onSuccess}
      onError={() => onFailure}
    />
  );
};

export { UserGoogleLogin };
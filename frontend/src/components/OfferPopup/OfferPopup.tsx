import { FC } from 'react';
import * as React from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import "./OfferPopup.css";
import { setOfferPopupActive } from "../../store";

const OfferPopup: FC = () => {
  const { user } = useAppSelector((state) => state.authReducer);
  const {  isOfferPopupActive, user:currentUser } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();

  return (
    <div
      className={isOfferPopupActive ? 'offer-modal active' : 'offer-modal'}
      onClick={() => {dispatch(setOfferPopupActive())}}
    >
      <div
        className={
          isOfferPopupActive
            ? 'offer-modal-content active'
            : 'offer-modal-content '
        }
        onClick={(event) => event.stopPropagation()}
      >
        {user && <p>{user.name}</p>}
        {!user && currentUser && <p>{currentUser.name}</p>}
        text popup
      </div>
    </div>
  );
};

export { OfferPopup };

import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';

import './Footer.css';
import { FooterModal } from '../FooterModal/FooterModal';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import { useAppDispatch } from '../../hooks/redux';
import { setReviewActive } from '../../store';

const { Footer } = Layout;

const FooterComponent: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <Footer className={'footer'}>
      <div className={'footer-item'}>
        <div>Наші ресторани</div>
        <Link to={'about'}>Про нас</Link>
      </div>
      <div className={'footer-item'}>
        <div>Контакти</div>
        <div>Політика конфеденційності</div>
        <Link to={'delivery'}>Доставка і оплата</Link>
      </div>
      <div className={'footer-item'}>
        <div onClick={() => dispatch(setReviewActive())}>Залишити відгук</div>
        <div>Ви можете знайти нас:</div>
        <div className={'icons-container'}>
          <a href={'https://www.facebook.com/khinkalnya'}>
            <InstagramOutlined style={{ fontSize: '32px', color: 'white' }} />
          </a>
          <a href={'https://www.instagram.com/khinkalnya_fedorova/'}>
            <FacebookOutlined style={{ fontSize: '32px', color: 'white' }} />
          </a>
        </div>
        <div className="payment">
          <img
            src="/image-for-footer/visa.svg"
            alt="visa"
            width={'50px'}
            height={'30px'}
          />
          <img
            src="/image-for-footer/mastercard.svg"
            alt="mastercard"
            width={'50px'}
            height={'30px'}
          />
        </div>
      </div>
      <FooterModal>
        <ReviewForm />
      </FooterModal>
    </Footer>
  );
};

export { FooterComponent };

import { FacebookOutlined, InstagramOutlined  } from '@ant-design/icons';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';

import './Footer.css';

const { Footer } = Layout;

const FooterComponent: FC = () => {
  return (
    <Footer className={'footer'}>
      <div className={'footer-item'}>
      <div>
        Наші ресторани
      </div>
        <Link to={'about'}>
          Про нас
        </Link>
      </div>
        <div className={'footer-item'}>
          <div>
           Контакти
          </div>
          <div>
            Політика конфеденційності
          </div>
          <div>
            Доставка і оплата
          </div>
        </div>
        <div className={'footer-item'}>
          <div>
            Залишити відгук
          </div>
          <div>
          Ви можете знайти нас:
          </div>
          <div className={'icons-container'}>
            <a href={"https://www.facebook.com/khinkalnya"}>
              <InstagramOutlined style={{ fontSize: '32px', color: "white"}}/>
            </a>
            <a href={"https://www.instagram.com/khinkalnya_fedorova/"}>
              <FacebookOutlined style={{ fontSize: '32px', color: "white"}} />
            </a>
          </div>
          <div className="payment">
            <img  src="/image-for-header/visa.svg" alt="visa" width={'50px'} height={'30px'}/>
            <img src="/image-for-header/mastercard.svg" alt="mastercard" width={'50px'} height={'30px'}/>
          </div>
        </div>
    </Footer>
  );
};

export { FooterComponent };

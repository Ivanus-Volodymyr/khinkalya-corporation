import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

import { HeaderComponent } from '../Header/Header';
import { FooterComponent } from '../Footer/Footer';

const LayoutComponent: FC = () => {
  return (
    <Layout>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </Layout>
  );
};

export { LayoutComponent};

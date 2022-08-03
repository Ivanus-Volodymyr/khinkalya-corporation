import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { HeaderComponent } from '../Header/Header';
import { FooterComponent } from '../Footer/Footer';

const LayoutComponent: FC = () => {
  return (
    <section>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </section>
  );
};

export { LayoutComponent};

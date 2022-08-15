import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { HeaderComponent } from '../Header/Header';
import { FooterComponent } from '../Footer/Footer';
import { Main } from '../Main/Main';

const LayoutComponent: FC = () => {
  return (
    <section>
      {/*<Main />*/}
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </section>
  );
};

export { LayoutComponent };

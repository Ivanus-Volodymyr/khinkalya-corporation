import React from 'react';

import { Cart } from '../Cart/Cart';
import { BarChart } from '../BarChart/BarChart';

const Main = () => {
  return (
    <div>
      <BarChart />
      <Cart />
    </div>
  );
};

export { Main };

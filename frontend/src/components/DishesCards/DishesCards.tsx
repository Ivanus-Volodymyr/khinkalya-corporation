import React, { FC, useEffect } from 'react';
import { Avatar, Card } from 'antd';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getAllDishes } from '../../store';
import './DishesCards.css';

const { Meta } = Card;

const DishesCards: FC = () => {
  const { dishes } = useAppSelector((state) => state.dishReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllDishes());
  }, []);

  return (
    <div className={'dishes-container'}>
      {dishes.map((dish) => (
        <Card
          key={dish.id}
          style={{ width: 300 }}
          cover={<img alt="example" src={dish.image} />}
        >
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Card title"
            description="This is the description"
          />
        </Card>
      ))}
    </div>
  );
};

export { DishesCards };

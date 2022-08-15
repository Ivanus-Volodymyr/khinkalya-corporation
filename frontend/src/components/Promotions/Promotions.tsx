import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getPromotions } from '../../store';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import { PromotionItem } from "../PromotionItem/PromotionItem";

const Promotions: FC = () => {
  const { promotion } = useAppSelector((state) => state.adminReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPromotions());
  }, []);
  return (
    <div>
      <Carousel
        autoplay
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        {promotion.map((value) => (
          <PromotionItem key={value.id} promotion={value} />
        ))}
      </Carousel>
    </div>
  );
};

export  { Promotions };

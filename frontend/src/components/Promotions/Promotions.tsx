import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import { PromotionItem } from "../PromotionItem/PromotionItem";
import { getPromotions } from "../../store/slices/promotions.slice";

const Promotions: FC = () => {
  const { promotion } = useAppSelector((state) => state.promotionsReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPromotions());
  }, [dispatch]);
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

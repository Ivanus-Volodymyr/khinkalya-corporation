import React, { FC, useEffect, useState } from "react";
import { Avatar, Card } from 'antd';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getAllDishes } from '../../store';
import './DishesCardsList.css';
import { DishCard } from "../DishCard/DishCard";

const { Meta } = Card;

const DishesCardsList: FC = () => {
  const { dishes } = useAppSelector((state) => state.dishReducer);
  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(getAllDishes());
  }, []);

  return (
    <div className={'dishes-container'}>
      {dishes.map((dish) => (
       <DishCard key={dish.id} dish={dish}/>
      ))}
    </div>
  );
};

export { DishesCardsList };

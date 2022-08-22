import React, { FC, useState } from "react";
import { Avatar, Card } from 'antd';

import { IDish } from "../../interfaces";

const { Meta } = Card;

const DishCard:FC<{ dish: IDish }>  = ({dish}) => {

  const [quantity, setQuantity] = useState(1);
  const order = {
    dish:  dish,
    quantity: quantity,
  };

  return (
    <Card
      key={dish.id}
      style={{ width: 300 }}
      cover={<img alt="example" src={dish.image} />}
    >
      <Meta
        avatar={<Avatar src={dish.image}/>}
        title={dish.name}
        description={<div>
          <p>{dish.description}</p>
          <span>{dish.weight}г.</span>  <span>{dish.price}грн.</span>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <button
              style={{ height: '30px' }}
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
            <h1>{order.quantity >= 1 ? order.quantity : 1}</h1>
            <button
              style={{ height: '30px' }}
              onClick={() => setQuantity(quantity - 1)}
            >
              -
            </button>
          </div>
          <button>Додати до замовлення</button>
        </div>
        }
      />
    </Card>
  );
};

export {DishCard};

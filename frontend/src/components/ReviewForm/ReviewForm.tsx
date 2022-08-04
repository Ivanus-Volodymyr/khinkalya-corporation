import { Button, Input, Select, Rate } from "antd";
import React, { FC, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { CreateReview} from "../../store";
import { IReview,  } from "../../interfaces";
import { useForm } from "react-hook-form";
import './ReviewForm.css';

const { TextArea } = Input;
const { Option } = Select;

const ReviewForm: FC = () => {
  const dispatch = useAppDispatch();
  const { restaurant } = useAppSelector((state) => state.adminReducer);
  const { register, handleSubmit } = useForm<Partial<IReview>>();
  const defaultRestaurantId = localStorage.getItem('restaurantId') as string;
  const userId = localStorage.getItem('userId') as string;

  const [restaurantId, setRestaurantId]= useState(defaultRestaurantId);
  const [reviewBody, setReviewBody]= useState("");
  const [rate, setRate] = useState(3);
  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];


  const onChange = (value:string) => {
    setRestaurantId(value);
  };

  const onChangeBody= (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewBody(e.target.value);
  };

  const onSubmitForm = (data:Partial<IReview>) => {
    data.restaurantId = +restaurantId;
    data.body = reviewBody;
    data.userId = +userId;

    dispatch(CreateReview(data as IReview));
  }

  return(
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <h3>Залишити відгук</h3>
        <Select  placeholder="ресторан" style={{ width: 150 }} {...register('restaurantId')} onChange={onChange}>
          {restaurant &&
            restaurant.map((result) => (
              <Option key={result.id} value={result.id}>
                {result.name}
              </Option>
            ))
          }
        </Select>
      <span>
        <Rate tooltips={desc} onChange={setRate} value={rate} />
        {rate ? <span className="ant-rate-text">{desc[rate - 1]}</span> : ''}
      </span>
       <TextArea showCount maxLength={100} style={{ height: 130}}
                allowClear={true} {...register('body')} onChange={onChangeBody}/>
        <Button htmlType="submit">
         Надіслати
        </Button>
  </form>)
}

export {ReviewForm}
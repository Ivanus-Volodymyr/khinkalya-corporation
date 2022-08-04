import { Button, Form, Input, Select } from "antd";
import React, { FC, useEffect, useState } from "react";

import './ReviewForm.css';
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { CreateReview} from "../../store";
import { IReview,  } from "../../interfaces";
import { useForm } from "react-hook-form";

const { TextArea } = Input;
const { Option } = Select;

const ReviewForm: FC = () => {
  const dispatch = useAppDispatch();
  const { restaurant } = useAppSelector((state) => state.adminReducer);
  const { register, handleSubmit, reset } = useForm<Partial<IReview>>();
  const [restaurantId, setRestaurantId]= useState("");
  const [reviewBody, setReviewBody]= useState("");

  const onChange = (value:string) => {
    console.log('Change:',value);
    setRestaurantId(value);

  };

  const onChangeBody= (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log('Change:', e.target.value);
    setReviewBody(e.target.value);
  };

  const onSubmitForm = (data:Partial<IReview>) => {
    data.restaurantId = +restaurantId;
    data.body = reviewBody;
    console.log(data);
    dispatch(CreateReview(data as IReview));
  }

  return(
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <h3>Залишити відгук</h3>
       <Select style={{ width: 120 }} {...register('restaurantId')} onChange={onChange}>
        {restaurant &&
          restaurant.map((result) => (
            <Option key={result.id} value={result.id}>
              {result.name}
            </Option>
          ))
        }
       </Select>
       <TextArea showCount maxLength={100} style={{ height: 130}}
                allowClear={true} {...register('body')} onChange={onChangeBody}/>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
  </form>)
}

export {ReviewForm}

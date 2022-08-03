import { Input, Select } from 'antd';
import React, { FC, useEffect } from "react";

import './ReviewForm.css';

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { CreateReview, setReviewBody } from "../../store";
import { IReview } from "../../interfaces";

const { TextArea } = Input;
const { Option } = Select;

const ReviewForm: FC = () => {
  const dispatch = useAppDispatch();
  const {reviewBody} = useAppSelector(state => state.reviewReducer);
  let review:IReview = { body: ''};
  const { restaurant } = useAppSelector((state) => state.adminReducer);

  useEffect(() => {
     console.log('change')
  },[reviewBody])


  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // dispatch(setReviewBody(e.target.value))
      review = {
      body: reviewBody,
      restaurantId: 1,
    };
    console.log('Change:', e.target.value, review, reviewBody);
  };

  const [restaurantId, setRestaurantId] = React.useState(0);
  const handleChange = (event: number) => {
    setRestaurantId(event);
  };
  const onSubmitForm = () => {
    //dispatch(CreateReview(review));
  }



  return(
    <div>
      <h3>Залишити відгук</h3>
      <Select style={{ width: 120 }} onChange={handleChange}>
        {restaurant &&
          restaurant.map((result) => (
            <Option key={result.id} value={result.id}>
              {result.name}
            </Option>
          ))
        }
      </Select>
      <TextArea showCount maxLength={100} style={{ height: 130}}
                allowClear={true}
                onChange={onChange}  onPressEnter={onSubmitForm}/>
  </div>)
}

export {ReviewForm}

import { Input } from 'antd';
import React, { FC } from "react";

import './ReviewForm.css';

const { TextArea } = Input;

const ReviewForm: FC = () => {

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log('Change:', e.target.value);
  };

  const onSubmitForm = () => {
    console.log("data")
  }

  return(
    <div>
      <TextArea showCount maxLength={100} style={{ height: 120 }} onChange={onChange}  onPressEnter={onSubmitForm}/>
  </div>)
}

export {ReviewForm}
